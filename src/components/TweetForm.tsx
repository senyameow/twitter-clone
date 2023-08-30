'use client'
import React, { useRef, useState } from 'react'
// import submitTweet from '@/actions/server-actions/submitTweet'
import { PostgrestError } from '@supabase/supabase-js'
import { toast } from 'sonner'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import Button from './Button'

interface TweetFormProps {
    serverAction: (
        formData: FormData
    ) => Promise<
        | { error: { message: string }; data?: undefined }
        | { data: null; error: PostgrestError | null }
        | undefined>
}

const TweetForm = ({ serverAction }: TweetFormProps) => {

    const { pending } = useFormStatus()

    const formRef = useRef<HTMLFormElement>(null)

    const inpRef = useRef<HTMLInputElement>(null)

    const handleSubmitTweet = async (data: any) => {

        if (!inpRef.current?.value) return

        try {
            const res = await serverAction(data)
            if (res?.error) return toast.error(res.error.message)
            formRef?.current?.reset()

            toast.success('tweet submitted!')
        } catch (error) {
            return console.log(error)
        }
    }

    return (
        <form ref={formRef} action={handleSubmitTweet as any} className='border-y border-gray-600 px-6 py-4 relative flex flex-row items-start gap-4'>
            <div className='bg-slate-400 w-12 h-12 rounded-full'></div>
            <div className='flex flex-col gap-3 justify-between w-[90%]'>
                <div>
                    <input name='tweet' type="text" placeholder={`What's happening`} className='bg-transparent outline-none border-none p-4 w-hull h-full border-b-[.5px] border-gray-600 text-white' ref={inpRef} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex-1 flex flex-row gap-2'></div>
                    <div className='flex-1 max-w-[30%]'>
                        <Button pending_text='submitting..' type='submit' disabled={pending} className={`${pending && 'bg-neutral-400'}`}>
                            tweet
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TweetForm