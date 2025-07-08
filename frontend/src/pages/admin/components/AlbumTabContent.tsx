import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Music } from "lucide-react";
import React from "react";
import AddAlbumDialog from "./AddAlbumDialog";
import AlbumTable from "./Albumtable";
const AlbumTabContent = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Music className="size-5 text-violet-500" />
              Albums Library
            </CardTitle>
            <CardDescription>Manage your albums</CardDescription>
          </div>
          <AddAlbumDialog />
        </div>
      </CardHeader>
      <CardContent>
        <AlbumTable />
      </CardContent>
    </Card>
  );
};

export default AlbumTabContent;
