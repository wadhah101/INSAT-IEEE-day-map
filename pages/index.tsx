import { NextPage } from 'next'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Portal } from 'react-portal'
import InfoPortal from '../components/InfoPortal'
import { chapters } from '../data/chapters.static'
const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 95%;
  padding: 0 1rem;
`

const index: NextPage = () => {
  const [portalOpen, setPortalOpen] = useState(false)
  const [currentData, setCurrentData] = useState(chapters.cs)

  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod
      expedita ex sunt consequuntur ducimus, reprehenderit perferendis hic
      quidem a blanditiis inventore labore nemo est! Dolore cumque
      necessitatibus dolorum recusandae? <br />
      <button onClick={() => setPortalOpen(true)}> open portal </button>
      {portalOpen && (
        <Portal>
          <InfoPortal
            closePortal={() => setPortalOpen(false)}
            data={currentData}
          />
        </Portal>
      )}
    </Container>
  )
}

export default index
