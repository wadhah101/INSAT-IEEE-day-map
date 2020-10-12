import { env } from "process";
import { writing } from "./writing.static";
export class Chapter {
  constructor(
    public acronym: string,
    public name: string,
    public website: string,
    public accent: string,
    public images: string[],
    public writing: string,
    public meet: string
  ) {}
}

export const chapters = {
  cs: new Chapter(
    "cs",
    "computer society",
    "http://cs-insat.ieee.tn",
    "#ff6535",
    ["/images/chapters/cs.png"],
    writing.cs,
    env.NEXT_PUBLIC_CS_LINK
  ),

  ras: new Chapter(
    "ras",
    "Robotics and Automation Society",
    "https://ras-insat.ieee.tn",
    "#e3074a",
    ["/images/chapters/ras.png"],
    writing.ras,
    env.NEXT_PUBLIC_RAS_LINK
  ),

  embs: new Chapter(
    "embs",
    "Engineering in Medicine and Biology Society",
    "http://embs-insat.ieee.tn",
    "#0E4DC4",
    ["/images/chapters/embs.png"],
    writing.embs,
    env.NEXT_PUBLIC_EMBS_LINK
  ),

  ias: new Chapter(
    "ias",
    "Industry Applications Society",
    "https://ias-insat.ieee.tn",
    "#3a7406",
    ["/images/chapters/ias.png"],
    writing.ias,
    env.NEXT_PUBLIC_IAS_LINK
  ),

  pes: new Chapter(
    "pes",
    "Power and Energy Society",
    null,
    "#538d22",
    ["/images/chapters/pes.png"],
    writing.pes,
    env.NEXT_PUBLIC_PES_LINK
  ),

  wie: new Chapter(
    "wie",
    "women in engineering affinity group",
    null,
    "#e83e8c",
    ["/images/chapters/wie.png"],
    writing.wie,
    env.NEXT_PUBLIC_WIE_LINK
  ),
};
