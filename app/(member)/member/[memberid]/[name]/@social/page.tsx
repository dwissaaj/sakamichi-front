import GetSocial from "@/app/utils/member/profile/getSocial";
import React from "react";
import SocialCard from "@/app/components/member/SocialCard";

export default async function Page(
  { params }: { params: { "memberid": string } },
) {
  const id = (await params).memberid;
  const social = await GetSocial(id);
  return (
    <div className="">
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
