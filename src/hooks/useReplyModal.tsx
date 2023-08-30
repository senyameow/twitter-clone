import { Like, Profile } from '@/lib/db/schema';
import { create } from 'zustand'
import { Tweet as TweetType } from '@/lib/db/schema';

// interface TweetProps {
//     tweet: {
//         tweets: TweetType;
//         profiles: Profile;
//         likes: Like | null;
//     }
// }
interface ReplyModalStore {
    isOpen: boolean;
    onOpen: (tweet: {
        tweets: TweetType;
        profiles: Profile;
        likes: Like | null;
    }) => void;
    onClose: () => void;
    currentTweet: {
        tweets: TweetType;
        profiles: Profile;
        likes: Like | null;
    } | undefined

}


const useReplyModal = create<ReplyModalStore>((set) => ({
    isOpen: false,
    onOpen: (tweet) => set({ isOpen: true, currentTweet: tweet }),
    onClose: () => set({ isOpen: false }),
    currentTweet: undefined

}));

export default useReplyModal;

// хукаем хранилище везде, где хотим и забираем функции или стейт