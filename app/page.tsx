import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-comfortaa">adsd</p>
      <Link color="primary" href={"/about"}>
        go
      </Link>
      <Button color="primary" href="/user">
        click
      </Button>
      <Button color="secondary" href="/user">
        click
      </Button>
      <Button color="default" href="/user">
        dfault
      </Button>
      <Button color="success" href="/user">
        click
      </Button>
      <Button color="warning" href="/user">
        click
      </Button>
      <Button color="danger" href="/user">
        click
      </Button>

      <ThemeSwitcher />
    </div>
  );
}
