import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  createRouteHandlerClient
} from "@supabase/auth-helpers-nextjs";

export async function GET(req) {
  const reqUrl = new URL(req.url);
  const code = reqUrl.searchParams.get("code");
  if (code) {
    const cookiesStore = cookies();
    const supabase = createRouteHandlerClient({
      cookies: () => cookiesStore,
    });
    console.log("codigo de autorizacion: ", code);
    await supabase.auth.exchangeCodeForSession(code);
  }
  return NextResponse.redirect(reqUrl.origin);
}
