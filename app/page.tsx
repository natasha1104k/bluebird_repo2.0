import { createClient } from "./utils/supabase/server";
import { cookies } from "next/headers";
import AuthButton from "./auth-button";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.from('tweets').select('*');
  console.log('error', error)
  console.log('data', data)

  return (
    <>
      <AuthButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}