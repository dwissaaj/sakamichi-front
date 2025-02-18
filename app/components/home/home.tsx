"use client"
import React from 'react'
import { Button, Image, Link } from "@heroui/react";

export default function HomeComponent() {
  return (
    <>
    <div className="flex gap-4">
        <Button className="bg-nogicolor" variant="flat">
          <Link className="text-foreground" href="https://nogizaka46.com/">
            Nogizaka46
          </Link>
        </Button>
        <Button className="bg-sakucolor" variant="faded">
          <Link
            className="text-foreground"
            href="https://sakurazaka46.com/s/s46/?ima=0000"
          >
            Sakurazaka46
          </Link>
        </Button>
        <Button className="bg-hinatacolor" variant="flat">
          <Link className="text-foreground" href="https://hinatazaka46.com/">
            Hinatazaka46
          </Link>
        </Button>
      </div>
      <div className=" w-3/4 flex flex-col gap-4">
        <Image
          isBlurred
          src="/sakamichi/nogizaka46.png"
          width="w-3/4"
          alt="nogizaka46 logo"
        />
        <Image
          isBlurred
          src="/sakamichi/sakurazaka46.png"
          width="w-3/4"
          alt="sakurazaka46 logo"
        />
        <Image
          isBlurred
          src="/sakamichi/hinatazaka46.png"
          width="w-3/4"
          alt="hinatazaka46 logo"
        />
      </div>
    </>
  )
}
