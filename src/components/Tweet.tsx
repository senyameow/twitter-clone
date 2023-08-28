'use server'
import React from 'react'
import { AiOutlineRetweet } from 'react-icons/ai'
import { BsDot, BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoMdStats } from 'react-icons/io'
import { GoShare } from 'react-icons/go'
import '../app/globals.css'
import { Tweet as t } from '@/types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useTransition } from 'react'
import likeTweet from '@/actions/server-actions/likeTweet'
import Button from './Button'
import LikeButton from './LikeButton'
import { getLikes } from '@/actions/server-actions/getLikes'
import { isLikedByUser } from '@/actions/server-actions/isLikedByUser'
dayjs.extend(relativeTime)



interface TweetProps {
    tweet: t
}

const Tweet = async ({ tweet }: TweetProps) => {

    const countLikes = await getLikes(tweet.id)

    const isLiked = await isLikedByUser(tweet.id)



    return (
        <div className=' flex flex-row min-w-[300px] border-b border-gray-600 p-3 transition-all duration-200'>
            <div className='flex-[1] h-full flex items-start justify-start p-3'>
                <div className='w-12 h-12 rounded-full bg-slate-200'></div>
            </div>
            <div className='flex-[9] flex flex-col justify-between gap-2'>
                <div className='flex flex-row w-full justify-between items-center'>
                    <div className='text-slate-300 flex flex-row items-center gap-1'>
                        <span className='hover:underline cursor-pointer'>{tweet.profiles.username}</span>
                        {tweet.profiles.full_name && <span className='hover:underline cursor-pointer'>{tweet.profiles.full_name}</span>}
                        <div className=''>
                            <BsDot />
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='text-neutral-400 text-[13px]'>{dayjs(tweet.created_at).fromNow()}</span>
                        <div className='justify-self-end rounded-full p-2 hover:bg-white/30  transition duration-200 cursor-pointer'>
                            <BsThreeDots />
                        </div>
                    </div>
                </div>
                <div className='text-white text-sm'>
                    {tweet.text}
                </div>
                <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl' />

                <div className='flex flex-row justify-around w-full items-center'>
                    <Button className='hovered flex justify-center items-center w-fit'><FaRegComment size={22} /></Button>
                    <Button className='hovered flex justify-center items-center w-fit'><AiOutlineRetweet size={22} /></Button>
                    <LikeButton tweetId={tweet.id} countLikes={countLikes.count} isLiked={isLiked!} />
                    <Button className='hovered flex justify-center items-center w-fit'><IoMdStats size={22} /></Button>
                    <Button className='hovered flex justify-center items-center w-fit'><GoShare size={22} /></Button>
                </div>
            </div>
        </div>
    )
}

export default Tweet