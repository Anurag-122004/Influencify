"use server";

import { getVideoIdFromUrl } from "@/lib/getVideoFromUrl";
// import { getVideoIdFromUrl } from "@lib/youtube/getVideoIdFromUrl";
import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) {
    return;
  }
  const videoId =  getVideoIdFromUrl(url);
  console.log("video is = ",videoId);
  if (!videoId) return;

  //redirect to new post
  redirect(`/video/${videoId}/analysis`);
}
