import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title?: string;
    description?: string;
    black?: boolean

}

const Modal = ({ children, isOpen, onChange, title, description, black = false }: ModalProps) => {


    return (
        <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
            <Dialog.Trigger />
            <Dialog.Portal>
                <Dialog.Overlay className='bg-neutral-900/90 backdrop-blur-sm fixed inset-0 z-[2]' />
                <Dialog.Content className={`fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[700px] -translate-x-1/2 -translate-y-1/2 ${black ? 'bg-black' : 'bg-neutral-800'} rounded-md p-[25px] z-[3]`}>
                    <Dialog.Title className='text-center text-4xl text-white mb-4 font-bold'>{title}</Dialog.Title>
                    <Dialog.Description className='text-center text-xl mb-5 leading-normal'>
                        {description}

                    </Dialog.Description>
                    <div>
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <button className='text-neutral-400 hover:text-white absolute top-[14px] right-[14px]'>
                            <IoMdClose size={24} />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root >
    )
}

export default Modal

// для модальных окон будем юзать Radix-ui (прикольная штука)

