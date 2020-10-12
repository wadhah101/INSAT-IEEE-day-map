import { env } from 'process'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 90vh;
  position: relative;
`

const r = env.NEXT_PUBLIC_EMBS_LINK

const MainMap: React.FunctionComponent = () => {
  React.useEffect(() => {
    console.log(r)
  }, [])

  return <Container> map {r} </Container>
}

export default MainMap
