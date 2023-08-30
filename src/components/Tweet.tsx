'use server'
import React from 'react'
import { AiOutlineRetweet } from 'react-icons/ai'
import { BsDot, BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoMdStats } from 'react-icons/io'
import { GoShare } from 'react-icons/go'
import '../app/globals.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useTransition } from 'react'
import likeTweet from '@/actions/server-actions/likeTweet'
import Button from './Button'
import LikeButton from './LikeButton'
import { getLikes } from '@/actions/server-actions/getLikes'
import { isLikedByUser } from '@/actions/server-actions/isLikedByUser'
import { Like, Profile, Tweet as TweetType } from '@/lib/db/schema'
import useReplyModal from '@/hooks/useReplyModal'
import ReplyButton from './ReplyButton'
import ReplyModal from './ReplyModal'
import TweetMeat from './TweetMeat'
dayjs.extend(relativeTime)



interface TweetProps {
    tweet: {
        tweets: TweetType;
        profiles: Profile;
        likes: Like | null;
    }
}

const Tweet = async ({ tweet }: TweetProps) => {

    const countLikes = await getLikes(tweet.tweets.id)

    const isLiked = await isLikedByUser(tweet.tweets.id)



    console.log(tweet, 'tweet')



    return (
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
                        <span className='text-neutral-400 text-[13px]'>{dayjs(tweet.tweets.createdAt).fromNow()}</span>
                        <div className='justify-self-end rounded-full p-2 hover:bg-white/30  transition duration-200 cursor-pointer'>
                            <BsThreeDots />
                        </div>
                    </div>
                </div>

                <TweetMeat tweet={tweet} />



                <div className='flex flex-row justify-around w-full items-center'>
                    <ReplyButton tweet={tweet} />
                    <Button className='hovered flex justify-center items-center w-fit'><AiOutlineRetweet size={22} /></Button>
                    <LikeButton tweetId={tweet.tweets.id} countLikes={countLikes} isLiked={isLiked!} />
                    <Button className='hovered flex justify-center items-center w-fit'><IoMdStats size={22} /></Button>
                    <Button className='hovered flex justify-center items-center w-fit'><GoShare size={22} /></Button>
                </div>
            </div>
        </div>
    )
}

export default Tweet