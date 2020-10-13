import { env } from 'process'
import { writing } from './writing.static'

const chapterImageFactory = (acronym: string) =>
  new Array(3)
    .fill(null)
    .map((_, ind) => `images/chapters/${acronym}/${ind + 1}.webp`)

export class Chapter {
  public images: string[]
  constructor(
    public acronym: string,
    public name: string,
    public website: string,
    public colors: {
      accent: string
      light: string
    },
    public writing: string,
    public meet: string
  ) {
    this.images = chapterImageFactory(acronym)
  }
}

export const chapters = {
  cs: new Chapter(
    'cs',
    'computer society',
    'http://cs-insat.ieee.tn',
    { accent: '#ff6535', light: '#ffe9e2' },
    writing.cs,
    env.NEXT_PUBLIC_CS_LINK
  ),

  ras: new Chapter(
    'ras',
    'Robotics and Automation Society',
    'https://ras-insat.ieee.tn',
    { accent: '#e3074a', light: '#FEECF1' },

    writing.ras,
    env.NEXT_PUBLIC_RAS_LINK
  ),

  embs: new Chapter(
    'embs',
    'Engineering in Medicine and Biology Society',
    'http://embs-insat.ieee.tn',
    { accent: '#0E4DC4', light: '#EBF1FE' },

    writing.embs,
    env.NEXT_PUBLIC_EMBS_LINK
  ),

  ias: new Chapter(
    'ias',
    'Industry Applications Society',
    'https://ias-insat.ieee.tn',
    { accent: '#3a7406', light: '#F0FEE5' },

    writing.ias,
    env.NEXT_PUBLIC_IAS_LINK
  ),

  pes: new Chapter(
    'pes',
    'Power and Energy Society',
    null,
    { accent: '#538d22', light: '#F2FAEC' },

    writing.pes,
    env.NEXT_PUBLIC_PES_LINK
  ),

  wie: new Chapter(
    'wie',
    'women in engineering affinity group',
    null,
    { accent: '#e83e8c', light: '#FDF1F7' },
    writing.wie,
    env.NEXT_PUBLIC_WIE_LINK
  ),
}
