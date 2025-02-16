import { GetProfile } from "@/app/utils/member/profile/getProfile";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ memberid: string; name: string }>;
}) {
  const id = (await params).memberid;
  const memberName = (await params).name;
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
      url: `https://sakamichi.cloud/member/${id}/${memberName
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    },
  };
}

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
        <p className="text-xl lg:text-2xl font-ltradio font-bold">
          Talk about <span className="text-primary-500">her</span>
        </p>
    </div>
  )
}
