import Image from "next/image";
import s from "./page.module.scss";
import { NavBar } from "@/components/NavBar";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

export default function Home() {
  return (
    <main>
      <div className={s.contenido}>
        <NavBar />
        <div>
          <h1>Next.js Music Player</h1>
        </div>
      </div>
    </main>
  );
}
