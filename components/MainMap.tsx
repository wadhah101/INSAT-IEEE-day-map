import * as React from 'react'
import styled, { css } from 'styled-components'
import { Chapter } from '../data/chapters.static'
import { flags } from '../data/coordinates.data'

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

  height: 11.5%;
  transition: all ease-in-out 0.3s;

  ${({ accent, x, y }) => css`
    bottom: ${y}%;
    left: ${x}%;
    &:hover {
      filter: drop-shadow(0 0 0.25rem ${accent});
    }
  `}
`

const MainMap: React.FunctionComponent<props> = ({ openPortal }) => {
  return (
    <Container>
      <MapImage src="/images/map/map.webp" />

      {flags.map(({ chapter, corr }) => (
        <ChapterFlag
          key={chapter.acronym}
          src={`images/map/flags/${chapter.acronym}.png`}
          onClick={() => openPortal(chapter)}
          x={corr.x}
          y={corr.y}
          accent={chapter.colors.accent}
        />
      ))}
    </Container>
  )
}

export default MainMap
