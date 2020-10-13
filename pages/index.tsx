import { NextPage } from 'next'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Portal } from 'react-portal'
import InfoPortal from '../components/InfoPortal'
import { Chapter, chapters } from '../data/chapters.static'
import MainMap from '../components/MainMap'
import PortraitWarning from '../components/PortraitWarning'

const Wrapper = styled.div`
  background: #794c32;
  display: flex;
  align-items: center;
  justify-content: center;
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
      <PortraitWarning />
    </Wrapper>
  )
}

export default index
