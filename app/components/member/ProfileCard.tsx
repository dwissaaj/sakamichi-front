import React from "react";


import { Divider } from "@heroui/react";
import { ProfileCardProps } from "@/app/utils/member/profile/profile.dto";

export default function ProfileCard({member, ...props}: ProfileCardProps) { 
    return ( 
    <div className="flex flex-col gap-1 items-center">
      <div>
        <h1 className="text-2xl font-bold font-ltradio border-b-2 border-foreground py-1">
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
        <Divider orientation="vertical"  />
        <p>{member.penlight}</p>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row gap-2 font-ltradio text-sm lg:text-xl border-b-2 border-foreground py-1">
        <p>{member.birthdate.slice(0, 10)}</p>
        <Divider orientation="vertical" />
        <p>{member.birthplace}</p>
        <Divider orientation="vertical" />
        <p>{member.height} cm</p>
        <Divider orientation="vertical" />
        <p>{member.bloodtype ?? "-"} type</p>
      </div>
      <div className="text-sm lg:text-xl flex flex-row gap-2 font-ltradio border-b-2 border-foreground py-1">
        <p className="truncate">{member.generation} - Gen</p>
        <p className="truncate">{member.group}</p>
        <p className="truncate">{member.agency}</p>
        <p className="truncate">{member.debut.slice(0, 10)}</p>
        <p className="truncate">{member.graduate ? "Graduated" : "Active"}</p>
      </div>
    </div>
  );
};


