import { Database } from "@/lib/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getTweets = async () => {

    const supabase = createServerComponentClient({
        cookies: cookies
    })



    const { data, error } = await supabase.from('tweets').select('*, profiles(full_name, username)').returns<

        Database['public']['Tables']['tweets']['Row'] & {
            profiles: Pick<Database['public']['Tables']['profiles']['Row'], 'full_name' | 'username'>
        }

    >()

    if (error) {
        console.log(error)
        return []
    }

    if (!data) {
        return []
    }

    console.log(data)

    return data

}

export default getTweets;