import GalleryCard from "@/app/components/member/GalleryCard";
import GetGallery from "@/app/utils/member/profile/getGallery";
import React from "react";

export default async function Page({
  params,
}: {
  params: { memberid: string; name: string };
}) {
  const id = (await params).memberid;
  const galleryResponse = await GetGallery(id);
  return (
    <div className="w-full flex items-center justify-center flex-col gap-4">
      <div className="">
        <p className="text-2xl lg:text-5xl font-ltradio font-bold">
          Gallery <span className="text-primary-500">& Meme</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {galleryResponse?.gallery?.documents.map((item) => {
          return (
            <GalleryCard
              key={item.$id}
              name={item.name}
              url={item.url}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
}
