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
import { getLikes } from './getLikes'


const likeTweet = async (tweetId: string) => {

    getLikes(tweetId)


    const supabase = createServerActionClient<Database>({ cookies })
    const supabaseClient = createServerComponentClient<Database>({ cookies })

    const { data: { user }, error } = await supabaseClient.auth.getUser()

    const { data: selectData, error: selectError } = await supabase.from('likes').select('*').eq('tweet_id', tweetId).single()


    if (error) {
        console.log(error)
        return
    }

    if (selectError) {
        console.log(selectError.message)
    }


    if (selectData?.id) {
        const { data: deleteData, error: deleteError } = await supabase.from('likes').delete().eq('tweet_id', tweetId)

        if (deleteError) return
    } else {
        const { data: insertData, error: insertError } = await supabase.from('likes').insert({ user_id: String(user?.id), tweet_id: tweetId, id: randomUUID() })

        if (insertError) {
            return console.log(insertError)
        }
    }






    revalidatePath('/')
}

export default likeTweet;