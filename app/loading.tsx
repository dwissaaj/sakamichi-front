"use client";
import { useRive } from "@rive-app/react-canvas";
import React from "react";
import LoadSakura from "./components/rive/LoadingSakura";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <LoadSakura />
    </div>
  );
}
