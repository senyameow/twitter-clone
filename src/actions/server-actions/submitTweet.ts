'use server'
import { Database } from '@/lib/supabase'
import { Button } from '@radix-ui/themes'
import { createServerActionClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useRef } from 'react'
import { cookies } from 'next/headers'
import { useUser } from '@/hooks/useUser'
import { randomUUID } from 'crypto'
import { toast } from 'sonner'
import { revalidatePath } from 'next/cache'
import { tweets } from '@/lib/db/schema'
import { db } from '@/lib/db'


const submitTweet = async (formData: FormData) => {

    const tweet = String(formData.get('tweet'))

    const supabaseClient = createServerComponentClient<Database>({ cookies })

    const { data: { user }, error } = await supabaseClient.auth.getUser()

    if (error) {
        console.log(error)
        return
    }


    // проверка твита

    if (!tweet) return console.log('there is no text')

    // const { data: insertData, error: insertError } = await supabase.from('tweets').insert({ text: tweet, user_id: String(user?.id), id: randomUUID() })

    db.insert(tweets).values({ text: tweet, profileId: String(user?.id) })
        .returning().then(() => console.log('submitted')).catch(() => console.log('something went wrong'))




    revalidatePath('/')
}

export default submitTweet;