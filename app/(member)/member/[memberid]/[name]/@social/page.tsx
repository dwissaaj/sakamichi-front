import GetSocial from "@/app/utils/member/profile/getSocial";
import React from "react";
import SocialCard from "@/app/components/member/SocialCard";

export default async function Page({
  params,
}: {
  params: Promise<{ memberid: string; name: string }>
}) {
  const id = (await params).memberid;
  const social = await GetSocial(id);
  return (
    <div className="border-b-2 p-2">
      {social?.social?.documents?.map((item) => (
        <SocialCard
          key={item.$id}
          blog={item.blog}
          instagram={item.instagram}
          website={item.website}
          showroom={item.showroom}
          other={item.other}
        />
      ))}
    </div>
  );
}
