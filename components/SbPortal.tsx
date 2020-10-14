import * as React from 'react'
import { useRef } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { Chapter, chapters, studentBranch } from '../data/chapters.static'
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside'
import {
  HangoutButton,
  PortalContainer,
  PortalTitle,
  PortalWrapper,
} from './InfoPortal'
import { SiGooglehangoutsmeet } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

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

const Writing = styled.p``

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
        <HangoutButton
          href={studentBranch.meet}
          target="_blank"
          accent={studentBranch.colors.accent}
        >
          <span> join the main conferance</span> <SiGooglehangoutsmeet />
        </HangoutButton>
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
