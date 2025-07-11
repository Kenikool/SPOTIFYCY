import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useRef } from "react";
import { useChatStore } from "@/store/useChatStore";
import { useUser } from "@clerk/clerk-react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const prevSongRef = useRef<string | null>(null);

  const { currentSong, isPlaying, playNext } = usePlayerStore();

  const { socket } = useChatStore();
  const { user } = useUser();

  // Emit activity on play/pause
  useEffect(() => {
    if (!socket || !user || !currentSong) return;

    if (isPlaying) {
      socket.emit("update_activity", {
        userId: user.id,
        activity: `Playing ${currentSong.title} by ${currentSong.artist}`,
      });
    } else {
      socket.emit("update_activity", {
        userId: user.id,
        activity: "Idle",
      });
    }
    return () => {
      if (socket && user) {
        socket.emit("update_activity", {
          userId: user.id,
          activity: "Idle",
        });
      }
    };
  }, [isPlaying, currentSong, socket, user]);
  // handle play/pause logic
  useEffect(() => {
    if (isPlaying) audioRef.current?.play();
    else audioRef.current?.pause();
  }, [isPlaying]);

  // handle song ends
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      playNext();
    };

    audio?.addEventListener("ended", handleEnded);

    return () => audio?.removeEventListener("ended", handleEnded);
  }, [playNext]);

  // handle song changes
  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    const audio = audioRef.current;

    // check if this is actually a new song
    const isSongChange = prevSongRef.current !== currentSong?.audioUrl;
    if (isSongChange) {
      audio.src = currentSong?.audioUrl;
      // reset the playback position
      audio.currentTime = 0;

      prevSongRef.current = currentSong?.audioUrl;

      if (isPlaying) audio.play();
    }
  }, [currentSong, isPlaying]);

  return <audio ref={audioRef} />;
};
export default AudioPlayer;
