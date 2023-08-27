// import { Database } from '@/lib/supabase'
// import { Button } from '@radix-ui/themes'
// import { createServerActionClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import React, { useRef } from 'react'
// import { cookies } from 'next/headers'
// import { useUser } from '@/hooks/useUser'
// import { randomUUID } from 'crypto'
// import { toast } from 'sonner'
// import { revalidatePath } from 'next/cache'

// export const revalidate = 0;


// const CreateTweet = () => {


//     const submitTweet = async (formData: FormData) => {
//         'use server'

//         const tweet = String(formData.get('tweet'))

//         const supabase = createServerActionClient<Database>({ cookies })
//         const supabaseClient = createServerComponentClient<Database>({ cookies })

//         const { data: { user }, error } = await supabaseClient.auth.getUser()

//         if (error) {
//             console.log(error)
//             return
//         }

//         console.log(user?.id)

//         // проверка твита

//         if (!tweet) return

//         const { data: insertData, error: insertError } = await supabase.from('tweets').insert({ text: tweet, user_id: String(user?.id), id: randomUUID() })

//         if (insertError) {
//             console.log(insertError)
//         }

//         console.log(tweet)


//         revalidatePath('/')
//     }

// }

// export default CreateTweet