'use client'
import React from 'react'
import { AiOutlineRetweet } from 'react-icons/ai'
import { BsDot, BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoMdStats } from 'react-icons/io'
import { GoShare } from 'react-icons/go'
import '../app/globals.css'

interface TweetProps {
    tweet: { id: number, url: string, userName: string, user_id: string, created_at: string, body: string }
}

const Tweet = ({ tweet }: TweetProps) => {
    return (
        <div className=' flex flex-row min-w-[300px] border-b border-gray-600 p-3 transition-all duration-200'>
            <div className='flex-[1] h-full flex items-start justify-start p-3'>
                <div className='w-12 h-12 rounded-full bg-slate-200'></div>
            </div>
            <div className='flex-[9] flex flex-col justify-between gap-2'>
                <div className='flex flex-row w-full justify-between items-center'>
                    <div className='text-slate-300 flex flex-row items-center gap-1'>
                        <span className='hover:underline cursor-pointer'>{tweet.userName}</span>
                        <span className='hover:underline cursor-pointer'>{tweet.user_id}</span>
                        <div className=''>
                            <BsDot />
                        </div>
                    </div>
                    <div className='justify-self-end rounded-full p-2 hover:bg-white/30  transition duration-200 cursor-pointer'>
                        <BsThreeDots />
                    </div>
                </div>
                <div className='text-white text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae laboriosam eveniet architecto excepturi dolorum tempora dicta commodi iure, repellat distinctio officia neque sint harum placeat aut quam magnam, rerum rem. Expedita illum qui dignissimos minima debitis id, enim fuga possimus laborum obcaecati aliquam ratione, dolorum eveniet totam magnam quo!
                </div>
                <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl' />

                <div className='flex flex-row justify-around w-full items-center'>
                    <div className='hovered'><FaRegComment size={22} /></div>
                    <div className='hovered'><AiOutlineRetweet size={22} /></div>
                    <div className='hovered'><AiOutlineHeart size={22} /></div>
                    <div className='hovered'><IoMdStats size={22} /></div>
                    <div className='hovered'><GoShare size={22} /></div>
                </div>
            </div>
        </div>
    )
}

export default Tweet