'use client'
import { Like, Profile } from '@/lib/db/schema';
import { useRouter } from 'next/navigation'
import { Tweet as TweetType } from '@/lib/db/schema';
import React from 'react'

interface TweetMeatProps {
    tweet: {
        tweets: TweetType;
        profiles: Profile;
        likes: Like | null;
    }
}

const TweetMeat = ({ tweet }: TweetMeatProps) => {

    const router = useRouter()

    return (
        <div className='hover:bg-opacity-[.95] cursor-pointer' onClick={() => {
            router.push(`tweet/${tweet.tweets.id}`)
        }}>
            <div className='text-white text-sm mb-4'>
                {tweet.tweets.text}
            </div>
            <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl' />
        </div>
    )
}

export default TweetMeat