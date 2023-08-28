'use server'

import { Database } from "@/lib/supabase"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'

export const getLikes = async (tweet_id: string) => {

    const supabase = createServerActionClient<Database>({ cookies })



    const res = await supabase.from('likes').select('id', { count: 'exact' }).eq('tweet_id', tweet_id)


    return res
}
