"use sever";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import AuthButtonServer from "./components/Auth/AuthButtonServer";
import { redirect } from "next/navigation";
import Navbar from "@/app/components/Navbar/Navbar";
import VideoCard from "./components/VideoCard";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: videos } = await supabase.from("videos").select("*, users(*)");
  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <Navbar />
      <AuthButtonServer />
      <main className="p-5">
        <VideoCard
          title="Video chavales"
          thumbnailUrl="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
          creatorAvatar="https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/Lasse+Rafn/128"
        />
      </main>
      <pre className="flex min-h-screen flex-col items-center justify-between p-24 text-sm">
        {JSON.stringify(videos, null, 2)}
        {videos.map((video) => {
          <VideoCard title={video.title} />;
        })}
      </pre>
    </>
  );
}
