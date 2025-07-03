import Topbar from "@/components/Topbar";
import React, { useEffect } from "react";
import { useMusicStore } from "@/store/useMusicStore";
import FeaturedSection from "./components/FeaturedSection";
import SectionGrid from "./components/SectionGrid";
import { ScrollArea } from "@/components/ui/scroll-area";
const HomePage = () => {
  const {
    fetchFeaturedSongs,
    featuredSongs,
    isLoading,
    error,
    fetchMadeForYouSongs,
    madeForYouSongs,
    fetchTrendingSongs,
    trendingSongs,
  } = useMusicStore();

  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

  console.log({ featuredSongs, madeForYouSongs, trendingSongs });

  return (
    <div className="overflow-hidden rounded-md">
      <Topbar />

      <ScrollArea className="has-[calc(100vh-180px)]: h-full bg-gradient-to-b from-zinc-800 to-zinc-900">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Good Evening</h1>
          <FeaturedSection />
        </div>
        <div className="space-y-8">
          <p>Made for you</p>
          <p>Trending</p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default HomePage;
