export class Chapter {
  constructor(
    public acronym: string,
    public name: string,
    public href: string,
    public accent: string,
    public images: string[]
  ) {}
}

export const chapters = {
  cs: new Chapter(
    "cs",
    "computer society",
    "http://cs-insat.ieee.tn",
    "#ff6535",
    ["/images/chapters/cs.png"]
  ),

  ras: new Chapter(
    "ras",
    "Robotics and Automation Society",
    "https://ras-insat.ieee.tn",
    "#e3074a",
    ["/images/chapters/ras.png"]
  ),

  embs: new Chapter(
    "embs",
    "Engineering in Medicine and Biology Society",
    "http://embs-insat.ieee.tn",
    "#0E4DC4",
    ["/images/chapters/embs.png"]
  ),

  ias: new Chapter(
    "ias",
    "Industry Applications Society",
    "https://ias-insat.ieee.tn",
    "#3a7406",
    ["/images/chapters/ias.png"]
  ),

  pes: new Chapter("pes", "Power and Energy Society", "", "#538d22", [
    "/images/chapters/pes.png",
  ]),

  wie: new Chapter(
    "wie",
    "women in engineering affinity group",
    "",
    "#e83e8c",
    ["/images/chapters/wie.png"]
  ),
};
