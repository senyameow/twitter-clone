'use server'

import { Database } from "@/lib/supabase"
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'

export const isLikedByUser = async (tweetId: string) => {

    const supabase = createServerActionClient<Database>({ cookies })
    const supabaseClient = createServerComponentClient<Database>({ cookies })

    const { data: { user }, error } = await supabaseClient.auth.getUser()

    if (error) return



    const res = await supabase.from('likes').select('*', { count: 'exact' }).eq('user_id', user?.id!).eq('tweet_id', tweetId)


    return res.data?.length === 1;
}
