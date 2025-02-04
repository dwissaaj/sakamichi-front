"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const SakamichiLogo = () => {
  return (
    <Image src={"/logo.png"} width={50} height={50} alt="sakamichi logo"  />
  );
};

export default function Navigation() {
    const pathname = usePathname()
  return (
    <Navbar isBlurred isBordered shouldHideOnScroll className="font-barlow"
    classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}>
      <NavbarBrand>
        <SakamichiLogo />
        <p className="font-bold text-inherit">Sakamichi</p>
      </NavbarBrand>
      <NavbarContent  className="hidden sm:flex gap-4" justify="center">
      <NavbarItem isActive={pathname.startsWith("/single")}>
          <Link   color="foreground" aria-current="page" href="/single">
            Single
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.startsWith("/member")}>
          <Link aria-current="page" color="foreground" href="/member">
            Members
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.startsWith("/group")}>
          <Link aria-current="page" color="foreground" href="/group">
            Group
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="light">
            <Image src={"/socmed/discord-mark-black.png"} width={20} height={20} alt="discord logo" />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
