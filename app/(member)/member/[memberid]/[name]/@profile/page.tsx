import GetProfile from "@/app/utils/member/profile/getProfile";
import React from "react";
import { fakejson } from "./fake";
import { Divider } from "@heroui/react";

export default async function MemberPage({
  params,
}: { params: { memberid: string } }) {
  const member = fakejson;
  console.log("the console");
  return (
    <div className="flex flex-col gap-1 items-center">
      <div>
        <h1 className="text-md text-2xl font-bold font-ltradio border-b-2 border-foreground py-1">
          {member.name}
        </h1>
      </div>
      <div>
        <h2 className="text-sm lg:text-xl font-jpshippori border-b-2 border-foreground py-1">
          {member.nameKanji} {member.nameKana}
        </h2>
      </div>
      <div className="flex flex-row gap-2 font-ltradio text-sm lg:text-xl border-b-2 border-foreground py-1">
        <p>{member.nickname}</p>
        <Divider className="" orientation="vertical" />
        <p>{member.penlight}</p>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row gap-2 font-ltradio text-sm lg:text-xl border-b-2 border-foreground py-1">
        <p>{member.birthdate.slice(0, 10)}</p>
        <Divider className="" orientation="vertical" />
        <p>{member.birthplace}</p>
        <Divider orientation="vertical" />
        <p>{member.height}</p>
        <Divider orientation="vertical" />
        <p>{member.bloodtype} - type</p>
      </div>
      <div className="text-sm lg:text-xl flex flex-row gap-2 font-ltradio text-wrap truncate border-b-2 border-foreground py-1">
        <p className="text-wrap truncate">{member.generation} - Gen</p>
        <p className="text-wrap truncate">{member.group}</p>
        <p className="text-wrap truncate">{member.agency}</p>
        <p className="text-wrap truncate">{member.debut.slice(0, 10)}</p>
        <p className="text-wrap truncate">{member.graduate}</p>
      </div>
    </div>
  );
}
