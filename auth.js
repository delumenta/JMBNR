/* JMBNR uses the existing Supabase Auth project. Read-only member queries. */
const JMBNR_AUTH_URL='https://fcegavhipeaeihxegsnw.supabase.co';
const JMBNR_AUTH_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZWdhdmhpcGVhZWloeGVnc253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMjk3NTcsImV4cCI6MjA3NzcwNTc1N30.i-ZjOlKc89-uA7fqOIvmAMv60-C2_NmKikRI_78Jei8';
const guildAuth=window.supabase.createClient(JMBNR_AUTH_URL,JMBNR_AUTH_KEY,{auth:{flowType:'pkce',detectSessionInUrl:false,persistSession:true}});
async function guildUser(){const {data,error}=await guildAuth.auth.getUser();if(error&&error.name!=='AuthSessionMissingError')throw error;return data?.user||null}
