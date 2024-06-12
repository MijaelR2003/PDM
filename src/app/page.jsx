"use server";
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
  function handleVideoClick() {
    router.push(`/video/`);
    console.log(router.push);
  }
  return (
    <>
      <Navbar />
      <AuthButtonServer />
      <main className="p-5 space-y-2">
        <VideoCard
          title="Curso 1"
          creatorName="docente 1"
          thumbnailUrl="https://nextui.org/images/hero-card-complete.jpeg"
          creatorAvatar="https://nextui.org/avatars/avatar-1.png"
          followers={45}
          onClick={() => {
            handleVideoClick;
          }}
        />

        <VideoCard
          title="Curso 2"
          thumbnailUrl="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
          creatorAvatar="https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/Lasse+Rafn/128"
          creatorName="Doc. Áaron"
          followers="4.5 M  "
        />
        {videos.map((video) => {
          return (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnail_url}
              creatorName={video.users.name}
              creatorAvatar={video.users.avatar_url}
              followers={video.users.followers}
            />
          );
        })}
      </main>
      <pre className="flex min-h-screen flex-col items-center justify-between p-24 text-sm">
        {/* {JSON.stringify(videos, null, 2)} */}
        {/* {console.log(videos)} */}
      </pre>
    </>
  );
}
