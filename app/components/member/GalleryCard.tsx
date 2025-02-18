"use client"
import { GalleryCardProps } from "@/app/utils/member/profile/gallery.dto";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

export default function GalleryCard({ url, name, date }: GalleryCardProps) {
  return (
    <Card
      className="w-36 lg:w-52 h-fit flex flex-col justify-center"
      shadow="sm"
    >
      <CardBody className="overflow-visible p-0 ">
        <Image
          isZoomed
          alt={name}
          className="w-full object-cover aspect-3/4"
          radius="lg"
          shadow="sm"
          src={url}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-xs font-ltradio flex flex-col justify-center items-center text-center">
        <p className="w-full truncate">{name}</p>
        <p className="text-default-500">{date.slice(0, 10)}</p>
      </CardFooter>
    </Card>
  );
}
