import { Like, Profile, Tweet, likes, profiles, tweets } from "@/lib/db/schema";
import { Database } from "@/lib/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { desc, eq } from "drizzle-orm";
export const revalidate = 0;


const getTweets = async () => {

    try {
        // const res = await db.query.tweets.findMany({
        //     with: {
        //         profile: {
        //             columns: {
        //                 username: true,
        //                 fullName: true,
        //             }
        //         }
        //     }
        // })

        const res = await db.select().from(tweets)
            .leftJoin(likes, eq(likes.tweetId, tweets.id))
            .innerJoin(profiles, eq(profiles.id, tweets.profileId)) // на самом деле мне нравится очень такая штука!
            .orderBy(desc(tweets.createdAt))
            .catch(err => console.log(err))



        return res


    } catch (error) {
        console.log(error)
    }



    revalidatePath('/')

}

export default getTweets;