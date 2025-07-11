import React from "react";
import { useMusicStore } from "@/store/useMusicStore";
import FeaturedGridSkeleton from "@/components/skeletons/FeaturedGridSkeleton";
import PlayButton from "./PlayButton";

const FeaturedSection = () => {
  const { featuredSongs, isLoading, error } = useMusicStore();
  if (isLoading) return <FeaturedGridSkeleton />;
  if (error) return <p className="text-red-500 mb-4 text-lg">{error}</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-2">
      {featuredSongs.map((song) => (
        <div
          key={song._id}
          className="flex items-center gb-zinc-800/50 rounded-md overflow-hidden hover:bg-zinc-700/50 cursor-pointer transition-colors group relative"
        >
          <img
            src={song.imageUrl}
            alt={song.title}
            className="w-16 sm:w-20 h-16 sm:h-20 object-cover flex-shrink-0"
          />
          <div className="flex-1 p-4">
            <h3 className="font-medium truncate">{song.title}</h3>
            <p className="text-sm text-zinc-400 truncate">{song.artist}</p>
          </div>
          {/* TODO: add play button */}
          <PlayButton song={song} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedSection;
