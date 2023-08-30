'use client'
import useReplyModal from '@/hooks/useReplyModal'
import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import Button from './Button'
import { Like, Profile } from '@/lib/db/schema'
import { Tweet as TweetType } from '@/lib/db/schema'

interface ReplyButtonProps {
    tweet: {
        tweets: TweetType;
        profiles: Profile;
        likes: Like | null;
    }
}

const ReplyButton = ({ tweet }: ReplyButtonProps) => {

    const { onOpen: onOpenReply } = useReplyModal()

    return (
        <Button onclick={() => {
            console.log(tweet, 'current tweet')
            onOpenReply(tweet!)
        }} className='hovered flex justify-center items-center w-fit'><FaRegComment size={22} /></Button>

    )
}

export default ReplyButton;