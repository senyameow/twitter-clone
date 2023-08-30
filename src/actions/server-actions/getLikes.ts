'use server'

import { db } from "@/lib/db"
import { likes } from "@/lib/db/schema"
import { Database } from "@/lib/supabase"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { eq } from "drizzle-orm"
import { cookies } from 'next/headers'

export const getLikes = async (tweet_id: string) => {

    // const supabase = createServerActionClient<Database>({ cookies })



    // const res = await supabase.from('likes').select('id', { count: 'exact' }).eq('tweet_id', tweet_id)

    const res = await db.select().from(likes).where(eq(likes.tweetId, tweet_id))


    return res.length
}
