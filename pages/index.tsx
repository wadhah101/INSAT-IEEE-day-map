import { NextPage } from 'next'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Portal } from 'react-portal'
import InfoPortal from '../components/InfoPortal'
import { Chapter, chapters } from '../data/chapters.static'
import MainMap from '../components/MainMap'

const Wrapper = styled.div`
  background: #794c32;
  min-height: 100vh;
`

const index: NextPage = () => {
  const [portalOpen, setPortalOpen] = useState(false)
  const [currentData, setCurrentData] = useState(chapters.cs)

  const openPortal = (chapter: Chapter) => {
    setCurrentData(chapter)
    setPortalOpen(true)
  }

  return (
    <Wrapper>
      <MainMap openPortal={openPortal} />
      {portalOpen && (
        <Portal>
          <InfoPortal
            closePortal={() => setPortalOpen(false)}
            data={currentData}
          />
        </Portal>
      )}
    </Wrapper>
  )
}

export default index
