import { Card, CardContent } from "@/components/ui/card";
import React from "react";

type StatsCardProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  bgColor: string;
  iconColor: string;
};
const Statscard = ({
  icon: Icon,
  label,
  value,
  bgColor,
  iconColor,
}: StatsCardProps) => {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-800/80 transition-colors ">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full ${bgColor}`}>
            <Icon className={`size-6 ${iconColor}`} />
          </div>
        </div>
        <div>
          <p className="text-sm text-zinc-400">{label}</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Statscard;
