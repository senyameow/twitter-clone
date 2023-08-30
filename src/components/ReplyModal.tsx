import useReplyModal from "@/hooks/useReplyModal"
import Modal from "./Modal"
import Tweet from "./Tweet"
import { Like, Profile, Tweet as TweetType } from "@/lib/db/schema"
import Button from "./Button"
import { BsDot, BsThreeDots } from "react-icons/bs"
import dayjs from "dayjs"
import { useState, useTransition } from "react"
import submitReply from "@/actions/server-actions/submitReply"





const ReplyModal = () => {

    const [isPending, startTransition] = useTransition()


    const { isOpen, onClose: onCloseReply, currentTweet } = useReplyModal()

    const [replyText, setReplyText] = useState<string>('')

    const onChange = (open: boolean) => {
        if (!open) {
            onCloseReply()
        }
    }

    return (
        <div className="flex justify-center items-center bg-black break-words">
            <Modal isOpen={isOpen} onChange={onChange} black>
                <div className=' flex flex-row p-3 transition-all duration-200 break-words bg-black'>
                    <div className='flex-[1] h-full flex items-start justify-start p-3'>
                        <div className='w-12 h-12 rounded-full bg-slate-200'></div>
                    </div>
                    <div className='flex-[9] flex flex-col justify-between gap-2 break-words'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <div className='text-slate-300 flex flex-row items-center gap-1'>
                                {currentTweet?.profiles.username && <span className='hover:underline cursor-pointer'>{currentTweet?.profiles.username}</span>}
                                {currentTweet?.profiles.fullName && <span className='hover:underline cursor-pointer'>{currentTweet?.profiles.fullName}</span>}
                                <div className=''>
                                    <BsDot />
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                {/* <span className='text-neutral-400 text-[13px]'>{dayjs(currentTweet?.tweets.createdAt).fromNow()}</span> */}
                                <div className='justify-self-end rounded-full p-2 hover:bg-white/30  transition duration-200 cursor-pointer'>
                                    <BsThreeDots />
                                </div>
                            </div>
                        </div>
                        <div className='text-white text-sm'>
                            {currentTweet?.tweets.text}
                        </div>
                        {/* <div className='bg-slate-400 aspect-square w-full h-64 rounded-xl' /> */}

                    </div>
                </div>
                <span>Replying to <span className="text-blue-500 hover:underline cursor-pointer">{currentTweet?.profiles.fullName}</span></span>
                <form className='border-t border-gray-500 mt-4 px-2 py-4 relative flex flex-row items-start gap-4'>
                    <div>
                        <div className='bg-slate-400 w-10 h-10 rounded-full'></div>
                    </div>
                    <div className='flex flex-col gap-3 justify-between w-[95%]'>
                        <div>
                            <textarea value={replyText} onChange={e => setReplyText(e.target.value)} name='tweet' placeholder={`your opinion`} maxLength={260} className='bg-transparent outline-none border-none p-4 w-[100%] no_scroll h-full border-b-[.5px] border-gray-600 text-white' />
                        </div>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex-1 flex flex-row gap-2'></div>
                            <div className='flex-1 max-w-[30%]'>
                                <Button pending_text='submitting..' type="button" onclick={() => startTransition(() => {
                                    submitReply({
                                        tweetId: (currentTweet?.tweets.id)!,
                                        replyText
                                    }).then(() => onCloseReply()).catch(err => console.log(err))
                                })}>
                                    reply
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>

    )
}

export default ReplyModal;