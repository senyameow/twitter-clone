'use server'

import { db } from "@/lib/db"
import { likes } from "@/lib/db/schema"
import { Database } from "@/lib/supabase"
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { and, eq } from "drizzle-orm"
import { cookies } from 'next/headers'

export const isLikedByUser = async (tweetId: string) => {

    const supabaseClient = createServerComponentClient<Database>({ cookies })

    const { data: { user }, error } = await supabaseClient.auth.getUser()

    if (error) return



    // const res = await supabase.from('likes').select('*', { count: 'exact' }).eq('user_id', user?.id!).eq('tweet_id', tweetId)

    const res1 = await db.select().from(likes).where(
        and(
            eq(likes.tweetId, tweetId),
            eq(likes.userId, String(user?.id))
        )
    )


    return res1.length === 1
}
