'use client'

import React, { useEffect, useState } from 'react';
import Modal from './Modal';

import { useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';

import { useRouter } from "next/navigation"
import useAuthModal from '@/hooks/useAuthModal';
import { Flex, Text, TextField, } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import * as Form from '@radix-ui/react-form';
import '../app/globals.css'
import { toast, Toaster } from 'sonner'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';



const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const [supabase] = useState(() => createPagesBrowserClient())
    const { session } = useSessionContext()
    const router = useRouter()



    const { isOpen, onClose: onCloseAuth } = useAuthModal()

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')


    const onChange = (open: boolean) => {
        if (!open) {
            onCloseAuth()
        }
    }

    useEffect(() => {
        if (session) {
            router.refresh()
            onCloseAuth()
        }
    }, [session]) // чувак зашел, session изменился, тригернул хук, раутер рефрешнул страничку и закрыли модалку с помощью функции


    return (
        <>
            <Modal
                title="Welcome back"
                description="Login to your account."
                isOpen={isOpen}
                onChange={onChange}

            >

                <Form.Root className="w-full" onSubmit={async e => {

                    //first check if the username exist or not!!!! (todo)

                    e.preventDefault()

                    const { data, error } = await supabaseClient.from('profiles').select('*').eq('username', username.trim())

                    if (data?.length! > 0 && data) {
                        console.log(data)
                        return toast.error('this username already exist')
                    }

                    await supabaseClient.auth.signInWithOtp({
                        email: email.trim(),
                        options: {
                            data: {
                                username
                            }
                        }
                    })
                    console.log(username, email, session)
                    onCloseAuth()
                }}>
                    <Toaster className='z-[100]' />

                    <Form.Field className="FormField" name="email">
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <Form.Label className="FormLabel">Email</Form.Label>
                            <Form.Message className="FormMessage" match="valueMissing">
                                Please enter your email
                            </Form.Message>
                            <Form.Message className="FormMessage" match="typeMismatch">
                                Please provide a valid email
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input className="Input" type="email" required onChange={e => setEmail(e.target.value)} />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field className="FormField" name="username">
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <Form.Label className="FormLabel">Username</Form.Label>
                            <Form.Message className="FormMessage" match="valueMissing">
                                Please enter your Username
                            </Form.Message>
                            <Form.Message className="FormMessage" match="typeMismatch">
                                Please provide a valid Username
                            </Form.Message>
                        </div>
                        <Form.Control asChild min={3}>
                            <input className="Input" type="text" required onChange={e => setUsername(e.target.value)} />
                        </Form.Control>
                    </Form.Field>

                    <Form.Submit asChild>
                        <button type='submit' className="Button" style={{ marginTop: 10 }}>
                            Sign Up
                        </button>
                    </Form.Submit>
                </Form.Root>


            </Modal>
        </>
    )
}

export default AuthModal;