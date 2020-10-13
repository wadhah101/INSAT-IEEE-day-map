import * as React from 'react'
import { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { Chapter } from '../data/chapters.static'
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside'
import { SiGooglehangoutsmeet } from 'react-icons/si'
import { RiFileTextFill } from 'react-icons/ri'

const zoomin = keyframes`
  from {
    transform : scale(0.5)  ;
  }

  to {
    transform : scale(1) ;
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
  overflow: hidden;
  background: #fff;
  z-index: 6;
  display: grid;
  grid-template-columns: 4fr 7fr;
  max-width: 1200px;
  width: 75%;
  height: 72vh;
  border-radius: 0.5rem;
  animation: 0.4s ease forwards ${zoomin};
`

const Pictures = styled.div<{ accent: string }>`
  border-right: 5px solid ${({ accent }) => accent};
  img {
    width: 100%;
    height: 24vh;
    object-fit: cover;
  }
`

const Title = styled.h2<{ accent: string }>`
  color: ${({ accent }) => accent};
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  margin-bottom: 0.5rem;
`

const Information = styled.div<{ light: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  background: ${({ light }) => light};
  color: #121212;
`

const Writing = styled.p``

const ButtonWithIcon = styled.a`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-top: 0.5rem;
  background: #00a7e1;
  padding: 0.65rem 2.5rem;
  color: white;
  display: flex;
  font-weight: 500;
  letter-spacing: 0.1rem;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 100000rem;

  span {
    margin-right: 1rem;
  }

  svg {
    width: 1.65rem;
    height: 1.65rem;
  }

  &:hover {
    filter: brightness(0.96);
  }
`

const HangoutButton = styled(ButtonWithIcon)<{ accent: string }>`
  margin-top: 1.5rem;
  background: ${({ accent }) => accent};
`

const InfoPortal: React.FunctionComponent<Props> = ({ data, closePortal }) => {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, closePortal)

  return (
    <Wrapper>
      <Container ref={ref} onBlurCapture={() => console.log('blur')}>
        <Pictures accent={data.colors.accent}>
          {data.images.map((e) => (
            <img src={e} />
          ))}
        </Pictures>
        <Information light={data.colors.light}>
          <Title accent={data.colors.accent}> {data.name} </Title>

          <Writing>{data.writing}</Writing>

          <HangoutButton
            accent={data.colors.accent}
            href={data.meet}
            target="_blank"
          >
            <span> join our conferance</span> <SiGooglehangoutsmeet />
          </HangoutButton>
          <ButtonWithIcon
            href="https://forms.gle/iAFmkvrt4rw6e1Tx5"
            target="_blank"
          >
            <span> join our family , fill the form ! </span> <RiFileTextFill />
          </ButtonWithIcon>
        </Information>
      </Container>
    </Wrapper>
  )
}

export default InfoPortal
