import React from "react";
import getMember from "@/app/utils/member/gallery/getGalleryPartial";
import MemberCard from "@/app/components/member/MemberCard";
export default async function Page() {
  const cover = await getMember();
  return (
    <div className="flex flex-col gap-4 mt-8 justify-center items-center w-full">
      <div>
        <p className="font:md lg:text-5xl font-ltradio font-bold">
          All Members of <span className="text-primary-500">Sakamichi</span>
        </p>
      </div>
      <div className="w-full flex justify-center gap-6">
        {cover.cover?.documents.map((item) => {
          return (
            <MemberCard
              key={item.galleryOfMember?.$id}
              name={item.galleryOfMember?.name}
              kanji={item.galleryOfMember?.nameKanji}
              url={item.url}
              link={`${item.galleryOfMember?.$id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
