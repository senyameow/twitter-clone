import LeftSidebar from "@/components/LeftSidebar"
import './globals.css'
import ScrollSession from "@/components/ScrollSession"
import RIghtSidebar from "@/components/RIghtSidebar"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "@/lib/supabase"
import { cookies } from 'next/headers'
import { useSessionContext } from "@supabase/auth-helpers-react"
import getTweets from "@/actions/server-actions/getTweets"

export const revalidate = 0;


export default async function Home() {

  const supabase = createServerComponentClient<Database>({
    cookies
  })

  const { data: { user }, error } = await supabase.auth.getUser()

  const tweets = await getTweets()

  const properTweets = tweets!


  console.log(properTweets, 'MY TWEETS')

  return (
    <div className="z-[150]">
      <ScrollSession tweets={properTweets as any} />
    </div>

  )
}
