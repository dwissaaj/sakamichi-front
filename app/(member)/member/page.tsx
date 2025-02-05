import React from "react";
import { Card, CardHeader, Image, Button, CardFooter } from "@heroui/react";
export default function Page() {
  return (
    <div className="flex flex-col gap-4 mt-8 justify-center items-center w-full">
      <div>
        <p className="font:md lg:text-5xl font-ltradio font-bold">
          All Members of <span className="text-primary-500">Sakamichi</span>
        </p>
      </div>
      <div className="w-full flex justify-center gap-6">
        <Card className="w-44 h-56 lg:w-60 lg:h-72">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cloud.appwrite.io/v1/storage/buckets/6799e3930015fb382302/files/67a34e30000dde546863/view?project=678f75c2002a40507695"
          />
          <CardFooter className="absolute z-10 bottom-1 flex-col items-center">
            <p className="font-jpshippori font-bold shadow-lg">谷口愛季</p>
            <h4 className="font-ltradio shadow-lg">Taniguchi Airi </h4>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
