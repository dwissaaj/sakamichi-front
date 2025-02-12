import GetSocial from "@/app/utils/member/profile/getSocial";
import React from "react";
import SocialCard from "@/app/components/member/SocialCard";

export default async function Page(
  { params }: { params: { "memberid": string } },
) {
  const id = (await params).memberid;
  const social = await GetSocial(id);
  console.log("social", social);
  return (
    <div className="grid grid-cols-3 lg:flex lg:flex-row gap-2">
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
