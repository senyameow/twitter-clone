'use client'
import likeTweet from '@/actions/server-actions/likeTweet'
import React from 'react'
import Button from './Button'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useTransition } from 'react'

interface LikeButtonProps {
    tweetId: string;
    countLikes: number | null,
    isLiked: boolean
}

const LikeButton = ({ tweetId, countLikes, isLiked }: LikeButtonProps) => {


    const [isPending, startTransition] = useTransition()

    return (
        <Button className='hovered flex justify-center items-center w-fit gap-2' onclick={() => startTransition(() => likeTweet(String(tweetId)))}>
            {isLiked ? <AiFillHeart size={22} className={'text-red-500'} /> : <AiOutlineHeart size={22} />}
            <span className='text-white text-[14px]'>{countLikes}</span>
        </Button>
    )
}

export default LikeButton