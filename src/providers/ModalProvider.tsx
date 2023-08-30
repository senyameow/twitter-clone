'use client'


import AuthModal from '@/components/AuthModal'
import ReplyModal from '@/components/ReplyModal'
import React, { useState, useEffect } from 'react'

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

    // с помощью такой конструкции можно предотвратить появление всяких окон, если мы еще рендеримся
    // т.е. загрузились => isMounted = true => выводим нижний ретёрн, иначе ничего не выводим (ждем)

    return (
        <>
            <AuthModal />
            <ReplyModal />
        </>

    )
}

export default ModalProvider