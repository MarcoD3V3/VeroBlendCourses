"use client";
import React from "react";
import styles from "./NavBar.module.scss";
import { AiFillSetting } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { FaVolumeMute } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { FaPause } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import { MusicPlayer } from "../MusicPlayer";

export type NavBarProps = {
  // types...
};

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className={styles.navbar}>
      {/* <i>
        <AiFillSetting />
      </i>
      <i>
        <AiFillEdit />
      </i>
      <i>
        <AiFillStar />
      </i>
      <i>
        <AiFillBook />
      </i>
      <i>
        <FaBars />
      </i>
      <i>
        <FaSearch />
      </i>
      <i>
        <FaMusic />
      </i>
      <i>
        <GoPersonFill />
      </i>
      <i>
        <GiPreviousButton />
      </i>
      <i>
        <FaVolumeMute />
      </i>
      <i>
        <GiNextButton />
      </i>
      <i>
        <FaCopy />
      </i>
      <i>
        <FaCode />
      </i>
      <i>
        <FaPause />
      </i>
      <i>
        <FaInfoCircle />
      </i>
      <i>
        <MdCopyright />
      </i>
      <i>
        <FaPencilAlt />
      </i> */}
      <div className={styles.navv}>
        <div>hola</div>
        <div className={styles.musicPlayerCont}>
          <MusicPlayer src="/music/2.mp3" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
