import * as React from 'react'
import { useRef } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { Chapter, chapters, studentBranch } from '../data/chapters.static'
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside'
import {
  ButtonWithIcon,
  HangoutButton,
  PortalContainer,
  PortalTitle,
  PortalWrapper,
  Sameline,
} from './InfoPortal'
import { FiExternalLink } from 'react-icons/fi'
import { RiFileTextFill } from 'react-icons/ri'

interface Props {
  closePortal: () => void
  openPortal: (chapter: Chapter) => void
}

const Container = styled(PortalContainer)`
  background: ${studentBranch.colors.light};
  display: flex;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
`

const Title = styled(PortalTitle)`
  text-align: center;
  font-weight: 600;
  font-size: 2.5rem;
  ${up('lg')} {
    font-size: 3.5rem;
  }
`

const Writing = styled.p`
  text-align: center;
`

const ChapterWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const ChapterButton = styled(HangoutButton)`
  margin-right: 0.5rem;
  font-size: 0.875rem;
  margin-top: 1rem;
  svg {
    width: 1rem;
    height: 1rem;
  }
`

const Other = styled(Writing)`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`

const SbPortal: React.FunctionComponent<Props> = ({
  closePortal,
  openPortal,
}) => {
  const ref = useRef(null)
  useOnClickOutside(ref, closePortal)
  return (
    <PortalWrapper>
      <Container ref={ref}>
        <Title accent={studentBranch.colors.accent}>
          IEEE DAY <br /> INSAT STUDENT BRANCH
        </Title>
        <Writing> {studentBranch.writing} </Writing>

        <ButtonWithIcon
          href="https://forms.gle/iAFmkvrt4rw6e1Tx5"
          target="_blank"
        >
          <span>
            join our family , fill <Sameline>the form !</Sameline>
          </span>
          <RiFileTextFill />
        </ButtonWithIcon>
        <Other>And don't forget to check our chapters </Other>
        <ChapterWrapper>
          {Object.values(chapters).map((e) => (
            <ChapterButton
              as="button"
              key={e.acronym}
              onClick={() => {
                openPortal(e)
              }}
              accent={e.colors.accent}
            >
              <span>{e.name}</span> <FiExternalLink />
            </ChapterButton>
          ))}
        </ChapterWrapper>
      </Container>
    </PortalWrapper>
  )
}

export default SbPortal
