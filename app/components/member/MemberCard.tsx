import React from "react";
import { Card, CardFooter, Image } from "@heroui/react";
interface MemberCard {
  name: string;
  url: string;
  kanji: string;
  key: string;
}
export default function MemberCard({ name, url, kanji, key }: MemberCard) {
  return (
    <Card key={key} className="w-44 h-56 lg:w-60 lg:h-72">
      <Image
        removeWrapper
        alt={name}
        className="z-0 w-full h-full object-cover"
        src={url}
      />
      <CardFooter className="absolute z-10 bottom-1 flex-col items-center">
        <p className="font-jpshippori font-bold shadow-lg">{kanji}</p>
        <h4 className="font-ltradio shadow-lg">{name}</h4>
      </CardFooter>
    </Card>
  );
}
