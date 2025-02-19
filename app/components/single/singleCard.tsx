"use client"
import React from "react";
import { Card, CardFooter, Image, Link } from "@heroui/react";
interface SingleCardType {
  $id: string;
  url: string;
  mainTrack: string;
}
export default function SinglesCards({ $id, url, mainTrack }: SingleCardType) {
  return (
    <Link
      color="foreground"
      className="text-sm truncate whitespace-nowrap overflow-hidden font-ltradio"
      href={`/single/${$id}`}
    >
      <Card
        isFooterBlurred
        className="border-none bg-foreground font-ltfigtree"
        radius="lg"
      >
        <Image
          alt={`${mainTrack}`}
          className=""
          height={200}
          src={`${url}`}
          width={200}
        />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          {mainTrack}
        </CardFooter>
      </Card>
    </Link>
  );
}
