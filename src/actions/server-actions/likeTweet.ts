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
import { db } from '@/lib/db'
import { likes } from '@/lib/db/schema'
import { and, eq } from 'drizzle-orm'


const likeTweet = async (tweetId: string) => {

    getLikes(tweetId)


    const supabase = createServerActionClient<Database>({ cookies })
    const supabaseClient = createServerComponentClient<Database>({ cookies })

    const { data: { user }, error } = await supabaseClient.auth.getUser()

    // const { data: selectData, error: selectError } = await supabase.from('likes').select('*').eq('tweet_id', tweetId).single()

    const res = await db.select().from(likes).where(
        and(
            eq(likes.tweetId, tweetId),
            eq(likes.userId, String(user?.id))
        )
    )


    if (error) {
        console.log(error)
        return
    }
    // if (selectError) {
    //     console.log(selectError.message)
    // }


    if (res.length === 1) {
        await db.delete(likes).where(
            and(
                eq(likes.tweetId, tweetId),
                eq(likes.userId, String(user?.id))
            ))
        // const { data: deleteData, error: deleteError } = await supabase.from('likes').delete().eq('tweet_id', tweetId)

    } else {
        await db.insert(likes).values({ tweetId, userId: String(user?.id) })
            .catch(err => console.log(err))

    }






    revalidatePath('/')
}

export default likeTweet;