import { NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'
import { up } from 'styled-breakpoints'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 100vh;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 5.5rem;
  line-height: 120%;
  ${up('lg')} {
    font-size: 7rem;
  }
`
const Subtitle = styled.h2`
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  ${up('lg')} {
    font-size: 2rem;
    letter-spacing: 0.3rem;
  }
`
const BackButton = styled.a`
  display: block;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background: black;

  ${up('lg')} {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }
`
const Custom404: NextPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>404</Title>
        <Subtitle>Thou have strayed too far</Subtitle>
        <Link href="/" passHref>
          <BackButton> Guide me back </BackButton>
        </Link>
      </Container>
    </Wrapper>
  )
}

export default Custom404
