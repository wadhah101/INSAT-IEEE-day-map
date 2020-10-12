import { NextPage } from 'next'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Portal } from 'react-portal'
import InfoWindow from '../components/InfoWindow'
import { chapters } from '../data/chapters.static'
const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 95%;
  padding: 0 1rem;
`

const index: NextPage = () => {
  const [portalOpen, setPortalOpen] = useState(false)

  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod
      expedita ex sunt consequuntur ducimus, reprehenderit perferendis hic
      quidem a blanditiis inventore labore nemo est! Dolore cumque
      necessitatibus dolorum recusandae? <br />
      <button onClick={() => setPortalOpen(true)}> open portal </button>
      {portalOpen && (
        <Portal>
          <InfoWindow
            closePortal={() => setPortalOpen(false)}
            data={chapters.cs}
          />
        </Portal>
      )}
    </Container>
  )
}

export default index
