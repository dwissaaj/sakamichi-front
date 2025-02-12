import ProfileCard from "@/app/components/member/ProfileCard";
import GetProfile from "@/app/utils/member/profile/getProfile";
import React from "react";

export default async function page({
  params,
}: { params: { memberid: string; name: string } }) {
  const { memberid } = params; // No need to await
  const memberData = await GetProfile(memberid);

  return (
    <ProfileCard
  agency={memberData.agency}
  birthdate={memberData.birthdate}
  birthplace={memberData.birthplace}
  bloodtype={memberData.bloodtype}
  debut={memberData.debut}
  generation={memberData.generation}
  graduate={memberData.graduate}
  group={memberData.group}
  height={memberData.height}
  name={memberData.name}
  nameKana={memberData.nameKana}
  nameKanji={memberData.nameKanji}
  nickname={memberData.nickname}
  penlight={memberData.penlight}
/>
  );
}
