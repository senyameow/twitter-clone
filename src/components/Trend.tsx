import React from 'react'
import { BsDot, BsThreeDots } from 'react-icons/bs'

interface TrendProps {
    trend: { id: number, title: string, created_at: string | null, tweets: number | null, url: string | null, area: string | null }
}

const Trend = ({ trend }: TrendProps) => {
    return (
        <div className='text-white flex flex-row items-start justify-between w-full gap-3 hover:bg-neutral-700 cursor-pointer p-2 rounded-xl'>
            <div className='flex flex-col items-start justify-start gap-1'>
                <div className='flex flex-row gap-1 text-gray-500'>
                    <span>{trend.area}</span>
                    {trend.created_at && <BsDot />}
                    {trend.created_at && <span>{trend.created_at}</span>}
                </div>
                <div>
                    {trend.title}
                </div>
                {trend.tweets! && <div className='text-neutral-400 text-sm'>
                    {trend.tweets! > 10000 ? (
                        <div>{(trend.tweets! / 1000).toFixed(1)}K Tweets</div>
                    ) : (
                        <div>{(trend.tweets! / 100).toFixed(2)} Tweets</div>
                    )}
                </div>}
            </div>

            {trend.url ? <div className='h-[100px] aspect-square flex justify-center items-center rounded-md place-self-center justify-self-center'>
                <img src={trend.url} className='rounded-md object-cover' alt="" />
            </div> : <BsThreeDots size={18} />}
        </div>
    )
}

export default Trend