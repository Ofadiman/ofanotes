import styled from 'styled-components'

export const StyledMain = styled.main`
  margin: 40px auto 120px;
  max-width: 1000px;
  width: 90%;

  #gatsby-focus-wrapper {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
  }
`

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 64px 1fr 150px;
  height: 100vh;
  overflow-y: auto;
`
