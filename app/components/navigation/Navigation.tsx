"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../ThemeSwitcher";
export const SakamichiLogo = () => {
  return (
    <Link href="/">
      <Image
        priority={true}
        src={"/logo.png"}
        width={50}
        height={50}
        alt="sakamichi logo"
      />
    </Link>
  );
};

export default function Navigation() {
  const pathname = usePathname();
  return (
    <Navbar
      isBlurred
      isBordered
      shouldHideOnScroll
      className="font-ltanaheim"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "font-light",
          "font-ltanaheim",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
          "data-[active=true]:font-bold",
        ],
      }}
    >
      <NavbarBrand>
        <SakamichiLogo />
        <Link href="/" className="font-ltanaheim font-bold text-inherit">
          SAKAMICHI
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <Dropdown>
          <NavbarItem
            className="mx-2"
            isActive={pathname.startsWith("/single")}
          >
            <DropdownTrigger>
              <Button disableRipple radius="sm" variant="light">
                Single
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="All Single" className="w-[340px]">
            <DropdownItem
              key="newest"
              description="All Newest Sakamichi Group Single Release"
            >
              <Link color="foreground" href="/single">
                New Release
              </Link>
            </DropdownItem>
            <DropdownItem
              key="nogizaka46"
              description="Nogizaka46 Single Release Data"
            >
              Nogizaka46
            </DropdownItem>
            <DropdownItem
              key="sakurazaka46"
              description="Sakurazaka46 Single Release Data"
            >
              Sakurazaka46
            </DropdownItem>
            <DropdownItem
              key="hinatazaka46"
              description="Hinatazaka46 Single Release Data"
            >
              Hinatazaka46
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="mx-2" isActive={pathname.startsWith("/member")}>
          <Link color="foreground" href="/member">
            Members
          </Link>
        </NavbarItem>
        <NavbarItem className="mx-2" isActive={pathname.startsWith("/group")}>
          <Link color="foreground" href="/fansite">
            Fansite
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="primary" href="#">
            <Image
              src={"/socmed/discord-mark-black.png"}
              width={"0"}
              height={"0"}
              className="w-6 h-auto"
              alt="discord logo"
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
