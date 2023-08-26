// import { UUID } from "crypto";
import { Database } from "./lib/supabase";

export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    fill_name?: string;
    avatar_url?: string;
}

// export interface Tweet {
//     id: UUID;
//     text: string;
//     user_id: string;
//     created_at?: Date;
//     updated_at?: Date;
// }

export interface Tweet {
    created_at: string;
    id: string;
    text: string;
    updated_at: string;
    user_id: string;
    profiles: Pick<Database['public']['Tables']['profiles']['Row'], 'full_name' | 'username'>

}