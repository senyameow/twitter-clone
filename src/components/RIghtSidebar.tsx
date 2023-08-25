import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Trend from './Trend'
import FollowAcc from './FollowAcc'

const TRENDS = [
    {
        id: 0,
        title: 'Chelsia vs Real Madrid',
        created_at: '49 min ago',
        area: 'UFA Champions',
        tweets: null,
        url: 'https://u-stena.ru/upload/iblock/d75/d75464127797b0760adaf7ed6f9b7aa0.jpg'
    },
    {
        id: 1,
        title: 'Chelsia vs Real Madrid',
        created_at: null,
        area: 'Sports',
        tweets: 12132,
        url: null
    },
    {
        id: 2,
        title: 'Chelsia vs Real Madrid',
        created_at: '49 min ago',
        area: 'Sports',
        tweets: 12132,
        url: null
    },
    {
        id: 3,
        title: 'Chelsia vs Real Madrid',
        created_at: '49 min ago',
        area: 'Sports',
        tweets: 12132,
        url: null
    },
]

const WHOTOFOLLOW = [
    {
        id: 0,
        userName: 'senyameow',
        user_id: '@senyameow',
        url: 'https://i.pinimg.com/originals/a8/ed/3e/a8ed3ed48acf2460058c76b77896ebba.jpg'
    },
    {
        id: 1,
        userName: 'senyameow',
        user_id: '@senyameow',
        url: 'https://i.pinimg.com/originals/a8/ed/3e/a8ed3ed48acf2460058c76b77896ebba.jpg'
    },
    {
        id: 2,
        userName: 'senyameow',
        user_id: '@senyameow',
        url: 'https://i.pinimg.com/originals/a8/ed/3e/a8ed3ed48acf2460058c76b77896ebba.jpg'
    },
]

const RIghtSidebar = () => {
    return (
        <section className='w-full px-5 py-4 sticky top-2 h-screen max-w-[275px]'>
            <div className='flex flex-col gap-4 fixed'>

                <div>
                    <div className='w-full relative h-full group'>
                        <input type="text" name="" id="search" placeholder='Search Twitter' className='pl-14 pr-4 py-2 rounded-xl outline-none peer focus:border focus:border-main bg-transparent text-white' />
                        <label htmlFor="search" className='peer-focus:text-main text-gray-500'>
                            <BsSearch className={`absolute top-[50%] -translate-y-1/2 left-3 `} />
                        </label>
                    </div>

                </div>



                <div className='bg-neutral-700/80 rounded-lg p-2 flex flex-col items-start justify-start gap-4'>
                    <h2 className='text-white font-bold text-2xl'>What's happening</h2>
                    <div className='flex flex-col gap-3'>
                        {TRENDS.map(trend => (
                            <Trend key={trend.id} trend={trend} />
                        ))}
                    </div>
                    <button className='text-main hover:underline text-sm'>
                        Show more
                    </button>
                </div>


                <div className='bg-neutral-700/80 rounded-lg flex flex-col gap-3 items-start justify-start p-2'>
                    <h2 className='text-white font-bold'>Who to follow</h2>
                    <div className='flex flex-col items-start justify-start w-full'>
                        {WHOTOFOLLOW.map(acc => (
                            <FollowAcc key={acc.id} acc={acc} />
                        ))}
                    </div>
                    <button className='text-main hover:underline text-sm'>
                        Show more
                    </button>
                </div>


            </div>
        </section>
    )
}

export default RIghtSidebar