"use client";
import React from "react";
import styles from "./Contenido.module.scss";

export type ContenidoProps = {
  // types...
};

const Contenido: React.FC<ContenidoProps> = ({}) => {
  return <div className={styles.contenido}>Contenido works!</div>;
};

export default Contenido;
