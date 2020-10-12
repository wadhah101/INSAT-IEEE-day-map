import * as React from 'react'
import { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { Chapter } from '../data/chapters.static'
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside'

const zoomin = keyframes`
  from {
    transform : scale(0.25) translateY(50vh) ;
  }

  to {
    transform : scale(1)  translateY(0)   ;
  }
`

interface Props {
  data: Chapter
  closePortal: () => void
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background: #00000099;
`

const Container = styled.div`
  z-index: 6;
  padding: 1rem;
  background: white;
  max-width: 1200px;
  width: 80%;
  min-height: 70vh;
  border-radius: 0.5rem;
  animation: 0.4s ease forwards ${zoomin};
`

const InfoWindow: React.FunctionComponent<Props> = ({ data, closePortal }) => {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, closePortal)

  return (
    <Wrapper>
      <Container ref={ref} onBlurCapture={() => console.log('blur')}>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eveniet
          fugiat omnis eaque ullam debitis minus odio nulla quaerat alias
          laboriosam quae, facilis sequi, maxime veritatis excepturi, laborum
          dolor! Nisi.
        </span>
      </Container>
    </Wrapper>
  )
}

export default InfoWindow
