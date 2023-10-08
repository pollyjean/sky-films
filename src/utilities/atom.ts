import { atom } from "recoil";

export const backgroundState = atom({ key: "backgroundState", default: "" });

export const movieIdState = atom({ key: "movieIdState", default: "" });

export const modalState = atom({ key: "modalState", default: false });
