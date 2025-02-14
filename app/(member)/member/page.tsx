import React from "react";
import GetMembersProfile from "@/app/utils/member/gallery/getProfilePics";
import MemberCard from "@/app/components/member/MemberCard";
import { CoverProfileProps } from "@/app/utils/member/gallery/gallery.dto";
export default async function Page() {
  const cover = await GetMembersProfile();
  return (
    <div className="flex flex-col gap-4 mt-8 justify-center items-center w-full">
      <div>
        <p className="font:md lg:text-5xl font-ltradio font-bold">
          All Members of <span className="text-primary-500">Sakamichi</span>
        </p>
      </div>
      <div className="w-full flex justify-center gap-6">
        {cover?.profile?.documents.map((item: CoverProfileProps) => {
          return (
            <MemberCard
              key={item?.$id}
              group={item?.group}
              id={item?.$id}
              name={item?.name}
              profilePic={item.profilePic}
              link={`${item.$id}/${item?.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            />
          );
        })}
      </div>
    </div>
  );
}
