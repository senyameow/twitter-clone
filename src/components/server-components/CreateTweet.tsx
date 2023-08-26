import { Database } from '@/lib/supabase'
import { Button } from '@radix-ui/themes'
import { createServerActionClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import { useUser } from '@/hooks/useUser'
import { randomUUID } from 'crypto'
import { toast } from 'sonner'

const CreateTweet = () => {

    const submitTweet = async (formData: FormData) => {
        'use server'

        const tweet = String(formData.get('tweet'))

        const supabase = createServerActionClient<Database>({ cookies })
        const supabaseClient = createServerComponentClient<Database>({ cookies })

        const { data: { user }, error } = await supabaseClient.auth.getUser()

        if (error) {
            console.log(error)
            return
        }

        console.log(user?.id)

        // проверка твита

        if (!tweet) return

        const { data: insertData, error: insertError } = await supabase.from('tweets').insert({ text: tweet, user_id: String(user?.id), id: randomUUID() })

        if (insertError) {
            console.log(insertError)
        }

        console.log(tweet)
    }

    return (
        <form action={submitTweet as any} className='border-y border-gray-600 px-6 py-4 relative flex flex-row items-start gap-4'>
            <div className='bg-slate-400 w-12 h-12 rounded-full'></div>
            <div className='flex flex-col gap-3 justify-between w-[90%]'>
                <div>
                    <input name='tweet' type="text" placeholder={`What's happening`} className='bg-transparent outline-none border-none p-4 w-hull h-full border-b-[.5px] border-gray-600 ' />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex-1 flex flex-row gap-2'></div>
                    <div className='flex-1 max-w-[25%]'>
                        <Button type='submit'>Tweet</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateTweet