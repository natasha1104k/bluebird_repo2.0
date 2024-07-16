import { createClient } from "../../utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code){
        const supabase = createClient()
        await supabase.auth.exchangeCodeForSession(code)
    }
    return NextResponse.redirect(requestUrl.origin);
}