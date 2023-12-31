'use client'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiHash } from 'react-icons/bi'
import { BsBell, BsBookmark, BsThreeDots, BsTwitter } from 'react-icons/bs'
import { BiMessageAltDetail, BiUser } from 'react-icons/bi'
import { CiCircleMore } from 'react-icons/ci'
import Link from 'next/link'
import Button from './Button'


const NAVIGATION = [
    {
        title: 'Home',
        icon: AiOutlineHome,
        href: '/'
    },
    {
        title: 'Explore',
        icon: BiHash,
        href: '/'
    },
    {
        title: 'Notifications',
        icon: BsBell,
        href: '/'
    },
    {
        title: 'Messages',
        icon: BiMessageAltDetail,
        href: '/'
    },
    {
        title: 'Bookmarks',
        icon: BsBookmark,
        href: '/'
    },
    {
        title: 'Profile',
        icon: BiUser,
        href: '/'
    },
]

const LeftSidebar = () => {
    return (
        <section className='w-full sticky top-0 xl:flex flex-col items-stretch h-screen pr-4 '>
            <div className='flex flex-col items-start h-full space-y-4 mt-4'>
                <Link href={'/'} className='w-[48px] h-[48px] my-4 hover:bg-white/10 transition duration-200 rounded-full flex items-center justify-center'>
                    <BsTwitter className={'text-white my-4 text-xl'} size={32} />
                </Link>
                {NAVIGATION.map(navItem => (
                    <Link key={navItem.title} href={`${navItem.href}`} className='rounded-2xl flex transition duration-200 hover:bg-white/10 items-center justify-center p-2 flex-row text-white gap-4'>
                        <navItem.icon className={'text-white text-xl'} size={28} />
                        <span>{navItem.title}</span>
                    </Link>
                ))}
                <Button>Tweet</Button>
            </div>
            <button className='text-white w-full flex gap-2 flex-row items-center justify-start py-2 px-2 my-2'>

                <div className='rounded-full w-12 h-12 bg-slate-400'></div>
                <div className='flex flex-col gap-1 items-start justify-around'>
                    <div className='text-white font-bold text-[1rem]'>Club of Coders</div>
                    <div className='text-slate-400 text-sm font-normal'>@clubofcoderscom</div>
                </div>
                <div className='justify-self-start flex-1 flex mr-4 hovered items-center justify-center max-w-[48px] aspect-square'><BsThreeDots size={24} /></div>

            </button>
        </section>
    )
}

export default LeftSidebar