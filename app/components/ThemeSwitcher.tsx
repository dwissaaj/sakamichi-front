"use client";
import { SunIcon } from "./navigation/SunIcon";
import { MoonIcon } from "./navigation/MoonIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Switch
      defaultSelected
      className="border-1 rounded-full border-foreground"
      color="secondary"
      size="md"
      thumbIcon={({ isSelected }) => (isSelected ? <SunIcon /> : <MoonIcon />)}
      onValueChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
    ></Switch>
  );
}
