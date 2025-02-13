"use client";
import React from "react";
import { Card, CardFooter, Image, Link } from "@heroui/react";
interface MemberCard {
  name: string;
  profilePic: string;
  link: string
  id: string
  group: string
}
export default function MemberCard(
  { name, profilePic ,id, link, group}: MemberCard,
) {
  return (
    <Link href={`/member/${link}`}>
      <Card key={id} className="w-44 h-56 lg:w-60 lg:h-72">
        <Image
          removeWrapper
          alt={name}
          className="z-0 w-full h-full object-cover"
          src={profilePic}
        />
        <CardFooter className="absolute z-10 bottom-1 flex-col items-center">
          <p className="font-jpshippori font-bold text-white shadow-lg">
            {name}
          </p>
          <h4 className="font-ltradio shadow-lg text-white">{group.charAt(0).toUpperCase() + group.slice(1)}</h4>
        </CardFooter>
      </Card>
    </Link>
  );
}
