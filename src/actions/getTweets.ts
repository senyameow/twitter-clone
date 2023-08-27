import { Database } from "@/lib/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const revalidate = 0;


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

    revalidatePath('/')


    return data


}

export default getTweets;