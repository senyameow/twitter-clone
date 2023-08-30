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
import { replies, tweets } from '@/lib/db/schema'
import { db } from '@/lib/db'

interface submitReplyProps {
    tweetId: string;
    replyText?: string

}

const submitReply = async ({ tweetId, replyText }: submitReplyProps) => {

    const supabaseClient = createServerComponentClient<Database>({ cookies })

    const { data: { user }, error } = await supabaseClient.auth.getUser()

    if (error) {
        console.log(error)
        return
    }

    if (!replyText) return toast.error('pls type some text')

    await db.insert(replies).values({
        tweetId,
        text: replyText,
        userId: String(user?.id)
    })


    revalidatePath('/')
}

export default submitReply;