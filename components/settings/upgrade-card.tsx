"use client";

import React from "react";
import { Plus } from "lucide-react";

import { useStore } from "@/hooks/useStore";
import { Card, CardContent, CardDescription } from "../ui/card";

const UpgradeCard = () => {
  const { onOpenProModal } = useStore();

  return (
    <Card
      role="button"
      className="border-dashed border-gray-400 w-full max-w-[350px] cursor-pointer h-[220px] flex items-center justify-center"
      onClick={onOpenProModal}
    >
      <CardContent className="flex gap-2 items-center">
        <div className="rounded-full border-2 p-1">
          <Plus className="text-gray-400" />
        </div>
        <CardDescription className="font-semibold">
          Upgrade Plan
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default UpgradeCard;
