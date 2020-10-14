import { NextPage } from 'next'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { studentBranch } from '../data/chapters.static'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

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
  font-size: 3rem;
  line-height: 120%;
  ${up('lg')} {
    font-size: 5rem;
  }
  color: ${studentBranch.colors.accent};
`
const Subtitle = styled.h2`
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  ${up('lg')} {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    width: 60%;
  }
`
const Logos = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  font-size: 2rem;

  ${up('lg')} {
    font-size: 2.5rem;
  }
  svg {
    transition: all ease 0.3s;
    margin-right: 0.75rem;
    color: #242424;
  }

  svg:hover {
    color: ${studentBranch.colors.accent};
  }
`

const end: NextPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Sorry but the event have reached an end.</Title>
        <Subtitle>
          Our conferences are all concluded but our door stays always open ,
          come visit us on
        </Subtitle>
        <Logos>
          <a
            href="https://www.facebook.com/IeeeInsatStudentBranch/"
            target="_blank"
          >
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/ieee.insat.sb/" target="_blank">
            <AiFillInstagram />
          </a>
        </Logos>

        <Subtitle>And stay tuned for more content yet to come.</Subtitle>
      </Container>
    </Wrapper>
  )
}

export default end
