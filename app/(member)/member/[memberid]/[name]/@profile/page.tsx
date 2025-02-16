import ProfileCard from "@/app/components/member/ProfileCard";
import { GetProfile } from "@/app/utils/member/profile/getProfile";


export default async function Page({
  params,
}: {
  params: Promise<{ memberid: string }>;
}) {
  const { memberid } = await params;
  const memberData = await GetProfile(memberid);
  console.log("GET REQ GET PROFILE")
  return (
    <ProfileCard
      profilePic={memberData.profilePic}
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
