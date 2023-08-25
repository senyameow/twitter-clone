import React from 'react'
import Button from './Button'

interface AccProps {
    acc: { id: number, userName: string, user_id: string, url: string }
}

const FollowAcc = ({ acc }: AccProps) => {
    return (
        <div className='w-full bg-transparent hover:bg-neutral-600 cursor-pointer rounded-xl'>
            <div className='flex flex-row gap-1 justify-between items-center px-2 py-3'>
                <div className='flex flex-row gap-3'>
                    <img src={acc.url} alt="" className='rounded-full w-[54px] h-[54px] object-cover' />
                    <div className='flex justify-center flex-col items-start gap-1'>
                        <span className='text-white font-bold cursor-pointer hover:underline'>
                            {acc.userName}
                        </span>
                        <span className='text-neutral-500 hover:underline cursor-pointer'>
                            {acc.user_id}
                        </span>
                    </div>
                </div>
                <Button className='text-gray-950 bg-white hover:bg-white/90 msx-w-[20%] flex-[.5]'>
                    Follow
                </Button>
            </div>
        </div>
    )
}

export default FollowAcc