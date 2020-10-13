import { Chapter } from './chapters.static'

export const coordinates = {
  cs: ``,
  ras: '',
  ias: '',
  embs: '',
  wie: '',
  pes: '',
}

interface Corr {
  x1: number
  x2: number
  y1: number
  y2: number
}

export class Coordinate {
  constructor(public corr: Corr, public chapter: Chapter) {}
}
