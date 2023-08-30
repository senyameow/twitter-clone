
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import { db } from '@/lib/db'
import { likes, profiles, replies, tweets } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import Tweet from '@/components/Tweet'
import { BsDot, BsThreeDots } from 'react-icons/bs'
import dayjs from 'dayjs'

const page = async ({ params }: { params: { id: string } }) => {

    const repliesForThisTweet = await db.select().from(replies)
        .where(eq(replies.tweetId, params.id))
        .leftJoin(likes, eq(likes.tweetId, replies.id))
        .innerJoin(profiles, eq(profiles.id, replies.userId))


    const supabaseClient = createServerComponentClient({ cookies })

    const { data: userData, error: userError } = await supabaseClient.auth.getUser()

    if (userError) return console.log(userError.message)

    const tweet = await db.select().from(tweets)
        .where(eq(tweets.id, params.id))
        .leftJoin(likes, eq(likes.tweetId, tweets.id))
        .innerJoin(profiles, eq(profiles.id, tweets.profileId)) // на самом деле мне нравится очень такая штука!
        .limit(1)

    console.log(tweet)
    console.log(repliesForThisTweet, 'for this tweet')
    return (

        <main className=' mx-auto min-h-screen px-[3rem] bg-gray-950 relative w-full h-full flex justify-center items-center no_scroll'>
            <div className='flex flex-col items-center gap-2 w-full'>
                <Tweet tweet={tweet[0] as any} />
                <div className='flex flex-col gap-2 w-full'>
                    {repliesForThisTweet.map(tweet => (
                        <div className=' flex flex-row min-w-[300px] border-b border-gray-600 p-3 transition-all duration-200'>
                            <div className='flex-[1] h-full flex items-start justify-start p-3'>
                                <div className='w-12 h-12 rounded-full bg-slate-200'></div>
                            </div>

                            <div className='flex-[9] flex flex-col justify-between gap-2 max-w-[500px]'>

                                <div className='flex flex-row justify-between items-center'>
                                    <div className='text-slate-300 flex flex-row items-center gap-1'>
                                        {tweet.profiles.username && <span className='hover:underline cursor-pointer'>{tweet.profiles.username}</span>}
                                        {tweet.profiles.fullName && <span className='hover:underline cursor-pointer'>{tweet.profiles.fullName}</span>}
                                        <div className=''>
                                            <BsDot />
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <div className='justify-self-end rounded-full p-2 hover:bg-white/30  transition duration-200 cursor-pointer'>
                                            <BsThreeDots />
                                        </div>
                                    </div>
                                </div>

                                <div className='hover:bg-opacity-[.95] cursor-pointer'>
                                    <div className='text-white text-sm'>
                                        {tweet.replies.text}
                                    </div>
                                </div>




                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>

    )
}

export default page