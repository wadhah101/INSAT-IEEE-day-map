import * as React from 'react'
import styled, { css } from 'styled-components'
import { Chapter } from '../data/chapters.static'
import { flags, sbFlag } from '../data/flags.static'

interface props {
  openPortal: (chapter: Chapter) => void
}

const Container = styled.div`
  position: relative;
`

const MapImage = styled.img`
  max-height: 98vh;
`

const ChapterFlag = styled.img<{ accent: string; x: number; y: number }>`
  position: absolute;
  cursor: pointer;
  height: 12%;
  transition: all ease-in-out 0.3s;
  will-change: filter;

  ${({ accent, x, y }) => css`
    bottom: ${y}%;
    left: ${x}%;
    &:hover {
      filter: drop-shadow(0 0 0.25rem ${accent});
    }
  `}
`

const SbFlag = styled(ChapterFlag)`
  cursor: auto;
  height: 21%;
  &:hover {
    filter: none;
  }
`

const MainMap: React.FunctionComponent<props> = ({ openPortal }) => {
  return (
    <Container>
      <MapImage src="/images/map/map.webp" />

      {flags.map(({ chapter, corr }) => (
        <ChapterFlag
          key={chapter.acronym}
          src={`images/map/flags/${chapter.acronym}.webp`}
          onClick={() => openPortal(chapter)}
          x={corr.x}
          y={corr.y}
          accent={chapter.colors.accent}
        />
      ))}

      <SbFlag
        src={`images/map/flags/sb.webp`}
        x={sbFlag.corr.x}
        y={sbFlag.corr.y}
        accent={sbFlag.chapter.colors.accent}
      />
    </Container>
  )
}

export default MainMap
