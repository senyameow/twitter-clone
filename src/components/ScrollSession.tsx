import React from 'react'
import Button from './Button'
import Tweet from './Tweet'

const TWEETS = [
    {
        id: 0,
        url: 'https://wallpapers.com/images/hd/maki-harukawa-red-pfp-ouzyppwc7ih4xcpp.jpg',
        userName: 'senyameow',
        user_id: '@senyameowdanceqqe',
        created_at: 'Aug 25',
        body: 'some text some text some text some text some text some text some text some text some text some text some text ',

    },
    {
        id: 1,
        url: 'https://wallpapers.com/images/hd/maki-harukawa-red-pfp-ouzyppwc7ih4xcpp.jpg',
        userName: 'senyameow',
        user_id: '@senyameowdanceqqe',
        created_at: 'Aug 25',
        body: 'some text some text some text some text some text some text some text some text some text some text some text ',

    },
    {
        id: 2,
        url: 'https://wallpapers.com/images/hd/maki-harukawa-red-pfp-ouzyppwc7ih4xcpp.jpg',
        userName: 'senyameow',
        user_id: '@senyameowdanceqqe',
        created_at: 'Aug 25',
        body: 'some text some text some text some text some text some text some text some text some text some text some text ',

    },

]

const ScrollSession = () => {
    return (
        <main className='text-white ml-[275px] w-[600px] h-full flex flex-col border-x min-h-screen border-gray-600'>
            <h1 className='z-[55] text-white font-bold text-xl py-4 mb-3 w-full p-6 sticky top-0 bg-black/5 backdrop-opacity-90 backdrop-blur '>Home</h1>
            <div className='border-y border-gray-600 px-6 py-4 relative flex flex-row items-start gap-4'>
                <div className='bg-slate-400 w-12 h-12 rounded-full'></div>
                <div className='flex flex-col gap-3 justify-between w-[90%]'>
                    <div>
                        <input type="text" placeholder={`What's happening`} className='bg-transparent outline-none border-none p-4 w-hull h-full border-b-[.5px] border-gray-600 ' />
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex-1 flex flex-row gap-2'></div>
                        <div className='flex-1 max-w-[25%]'>
                            <Button className='justify-self-end w-full'>Tweet</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                {TWEETS.map(tweet => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}
            </div>
        </main>
    )
}

export default ScrollSession