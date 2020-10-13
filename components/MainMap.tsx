import * as React from 'react'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Chapter, chapters } from '../data/chapters.static'

interface props {
  openPortal: (chapter: Chapter) => void
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const MapImage = styled.img`
  max-height: 98vh;
`
const StyledArea = styled.area`
  cursor: pointer;
  background: #ffffff68;
`

const MainMap: React.FunctionComponent<props> = ({ openPortal }) => {
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    console.log('init map', ref.current.height, ref.current.width)

    const handler = () => console.log(window.innerHeight, window.innerWidth)

    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return (
    <Container>
      <map name="infographic">
        <StyledArea
          shape="rect"
          coords="0,0,1000,500"
          onClick={() => openPortal(chapters.ias)}
        />
      </map>
      <MapImage
        ref={ref}
        useMap="#infographic"
        src="/images/map/MapWithItems.webp"
      />
    </Container>
  )
}

export default MainMap
