import React from 'react'
import Button from './Button'
import Tweet from './Tweet'
import { Tweet as t } from '@/types'
import TweetForm from './TweetForm'
import submitTweet from '@/actions/server-actions/submitTweet'
import { Like, Profile, Tweet as TweetType } from '@/lib/db/schema'
import getTweets from '@/actions/server-actions/getTweets'
import { PostgrestError } from '@supabase/supabase-js'


export const revalidate = 0;

interface ScrollSessionProps {
    tweets: {
        tweets: TweetType,
        profiles: Profile,
        likes: Like | null
    }[]
}





const ScrollSession = async ({ tweets }: ScrollSessionProps) => {


    return (
        <main className='flex w-full min-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
            <h1 className='z-[1] text-white font-bold text-xl py-4 mb-3 w-full p-6 sticky top-0 bg-black/5 backdrop-opacity-90 backdrop-blur '>Home</h1>

            <TweetForm serverAction={submitTweet as (formData: FormData) => Promise<{ error: { message: string; }; data?: undefined; } | { data: null; error: PostgrestError | null; } | undefined>} />


            <div className='flex flex-col'>
                {tweets.map(tweet => (
                    <Tweet key={tweet.tweets.id} tweet={tweet} />
                ))}
            </div>
        </main>
    )
}

export default ScrollSession