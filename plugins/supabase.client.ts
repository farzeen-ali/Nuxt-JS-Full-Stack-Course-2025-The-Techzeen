import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    config.public.supabaseUrl!,
    config.public.supabaseKey!
  )

  return {
    provide: {
      supabase
    }
  }
})

function defineNuxtPlugin(arg0: () => { provide: { supabase: SupabaseClient<any, "public", "public", any, any> } }) {
  throw new Error('Function not implemented.')
}
