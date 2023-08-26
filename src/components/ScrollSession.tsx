import React from 'react'
import Button from './Button'
import Tweet from './Tweet'
import CreateTweet from './server-components/CreateTweet'
import { Tweet as t } from '@/types'

export const revalidate = 0;

interface ScrollSessionProps {
    tweets: t[]
}


const TWEETS = [
    {
        id: 0,
        url: 'https://wallpapers.com/images/hd/maki-harukawa-red-pfp-ouzyppwc7ih4xcpp.jpg',
        userName: 'senyameow',
        user_id: '@senyameowdanceqqe',
        created_at: 'Aug 25',
        body: 'some text some text some text some text some text some text some text some text some text some text some text ',

    },
    {
        id: 1,
        url: 'https://wallpapers.com/images/hd/maki-harukawa-red-pfp-ouzyppwc7ih4xcpp.jpg',
        userName: 'senyameow',
        user_id: '@senyameowdanceqqe',
        created_at: 'Aug 25',
        body: 'some text some text some text some text some text some text some text some text some text some text some text ',

    },
    {
        id: 2,
        url: 'https://wallpapers.com/images/hd/maki-harukawa-red-pfp-ouzyppwc7ih4xcpp.jpg',
        userName: 'senyameow',
        user_id: '@senyameowdanceqqe',
        created_at: 'Aug 25',
        body: 'some text some text some text some text some text some text some text some text some text some text some text ',

    },

]

const ScrollSession = ({ tweets }: ScrollSessionProps) => {
    return (
        <main className='flex w-full min-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
            <h1 className='z-[1] text-white font-bold text-xl py-4 mb-3 w-full p-6 sticky top-0 bg-black/5 backdrop-opacity-90 backdrop-blur '>Home</h1>

            <CreateTweet />


            <div className='flex flex-col'>
                {TWEETS.map(tweet => (
                    <Tweet key={tweet.id} tweet={tweet} tweets={tweets} />
                ))}
            </div>
        </main>
    )
}

export default ScrollSession