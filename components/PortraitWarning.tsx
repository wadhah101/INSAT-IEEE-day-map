import * as React from 'react'
import styled from 'styled-components'
import { IoIosPhoneLandscape } from 'react-icons/io'

const Container = styled.div`
  @media (orientation: landscape) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  text-align: center;
  letter-spacing: 0.1rem;
`

const Icon = styled(IoIosPhoneLandscape)`
  width: 6rem;
  height: 6rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`

const PortraitWarning: React.FunctionComponent = () => {
  return (
    <Container>
      <Title> IEEE DAY INSAT Map. </Title>
      <p>Please rotate your phone and use landscape mode</p>
      <Icon />
    </Container>
  )
}

export default PortraitWarning
