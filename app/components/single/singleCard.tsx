import React from "react";
import { Card, CardFooter, Image, Link } from "@heroui/react";
interface SingleCard {
  $id: string;
  name: string;
  mainCover: string;
}
export default function SingleCard({ $id, name, mainCover }: SingleCard) {
  return (
    <Link
      color="foreground"
      className="text-sm truncate whitespace-nowrap overflow-hidden font-ltradio"
      href={`/single/info/${$id}`}
    >
      <Card
        key={$id}
        isFooterBlurred
        className="border-none bg-foreground font-ltfigtree"
        radius="lg"
      >
        <Image
          alt={`${name}`}
          className=""
          height={200}
          src={`${mainCover}`}
          width={200}
        />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          {name}
        </CardFooter>
      </Card>
    </Link>
  );
}
