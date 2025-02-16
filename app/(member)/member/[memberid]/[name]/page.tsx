import ProfileCard from "@/app/components/member/ProfileCard";
import { GetProfile } from "@/app/utils/member/profile/getProfile";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ memberid: string; name: string }>;
}) {
  const id = (await params).memberid;
  const member = await GetProfile(id);
  const { name, group, generation, birthplace, debut, graduate, height } =
    member;
  const title = `${name} ${group.charAt(0).toUpperCase() + group.slice(1).toLowerCase()}`;
  const description = `${name} is a ${generation}-generation member of ${group}. Born in ${birthplace}, she debuted on ${new Date(
    debut,
  ).toLocaleDateString()} and is currently ${graduate}. Height: ${height} cm.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      url: `https://sakamichi.cloud/member`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ memberid: string }>;
}) {
  const { memberid } = await params;
  const memberData = await GetProfile(memberid);
  console.log("GET REQ GET PROFILE");
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


