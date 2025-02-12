import ProfileCard from "@/app/components/member/ProfileCard";
import GetProfile from "@/app/utils/member/profile/getProfile";

export default async function Page(
  { params }: { params: { "memberid": string; name: string } },
) {
  const id = (await params).memberid;
  const memberData = await GetProfile(id);
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
