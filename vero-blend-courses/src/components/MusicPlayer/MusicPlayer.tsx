"use client";
import React from "react";
import styles from "./MusicPlayer.module.scss";
// components/MusicPlayer.tsx
import { useState } from "react";
import { Howl, Howler } from "howler";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

interface MusicPlayerProps {
  src: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [sound] = useState<Howl>(
    new Howl({ src: ["/music/2.mp3"], format: ["mp3"] })
  );
  const [volume, setVolume] = useState<number>(1);

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    sound.volume(newVolume);
  };

  return (
    <div className={styles.musicPlayer}>
      <button onClick={togglePlay} className={styles.play}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className={` ${styles.volume}`}
      />
    </div>
  );
};

export default MusicPlayer;
