import { NextPage } from 'next'
import styled from 'styled-components'
import React from 'react'
import { Portal } from 'react-portal'
import InfoPortal from '../components/InfoPortal'
import { chapters } from '../data/chapters.static'
import MainMap from '../components/MainMap'
import PortraitWarning from '../components/PortraitWarning'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  background: #794c32;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const index: NextPage = () => {
  const router = useRouter()

  const routeAcronym = router.query.chapter

  const current = Object.values(chapters).find(
    ({ acronym }) => acronym === routeAcronym
  )

  return (
    <Wrapper>
      <MainMap
        openPortal={({ acronym }) => {
          router.push({ path: '/', query: { chapter: acronym } })
        }}
      />
      {current && (
        <Portal>
          <InfoPortal
            closePortal={() => router.push({ path: '/' })}
            data={current}
          />
        </Portal>
      )}
      <PortraitWarning />
    </Wrapper>
  )
}

export default index
