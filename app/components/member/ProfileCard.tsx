import React from "react";

import { Divider, Image } from "@heroui/react";
import { ProfileCardProps } from "@/app/utils/member/profile/profile.dto";

export default function ProfileCard({
  name,
  nameKanji,
  nameKana,
  nickname,
  penlight,
  birthdate,
  birthplace,
  height,
  bloodtype,
  generation,
  group,
  agency,
  debut,
  graduate,
  profilePic,
}: ProfileCardProps) {
  return (
    <div className="flex flex-col gap-1 items-center ">
      <div>
        <Image alt={name} className="w-32 md:w-42 lg:w-52" isBlurred src={profilePic} />
      </div>
      <div>
        <h1 className="text-2xl font-bold font-ltradio border-b-2 border-foreground py-1">
          {name}
        </h1>
      </div>
      <div>
        <h2 className="text-sm lg:text-xl font-jpgothic border-b-2 border-foreground py-1">
          {nameKanji} {nameKana}
        </h2>
      </div>
      <div className="flex flex-row gap-2 font-ltradio text-sm lg:text-xl border-b-2 border-foreground py-1">
        <p>{nickname}</p>
        <Divider orientation="vertical" />
        <p>{penlight}</p>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row gap-2 font-ltradio text-sm lg:text-xl border-b-2 border-foreground py-1">
        <p>{birthdate.slice(0, 10)}</p>
        <Divider orientation="vertical" />
        <p>{birthplace}</p>
        <Divider orientation="vertical" />
        <p>{height} cm</p>
        <Divider orientation="vertical" />
        <p>{bloodtype ?? "-"} type</p>
      </div>
      <div className="text-sm lg:text-xl flex flex-row gap-2 font-ltradio border-b-2 border-foreground py-1">
        <p className="text-wrap truncate">{generation} - Gen</p>
        <p className="text-wrap truncate">{group}</p>
        <p className="text-wrap truncate">{agency}</p>
        <p className="text-wrap truncate">{debut.slice(0, 10)}</p>
        <p className="text-wrap truncate">{graduate}</p>
      </div>
    </div>
  );
}
