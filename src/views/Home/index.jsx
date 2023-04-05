import React from 'react'
import styled from 'styled-components'
import ActionContainer from './components/ActionContainer'
import StatusContainer from './components/StatusContainer'

const StyledWrapper = styled.div`
  margin-bottom: 40px;
`

const StyledTitle = styled.div`
  font-family: Shining Night;
  font-size: 170px;
  color: white;
  text-shadow: 5px 5px 20px;
`

const StyledSubTitle = styled.div`
  font-family: partystd;
  font-size: 60px;
`

const StyledContainers = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const Home = () => {

  return (
    <StyledWrapper>
      <StyledTitle>Main Stage</StyledTitle>
      <StyledSubTitle>DeadPoets Society</StyledSubTitle>
      <StyledContainers>
        <StatusContainer title="Balance" />
        <StatusContainer title="Earned" />
      </StyledContainers>
      <StyledContainers>
        <ActionContainer type="stake" />
        <ActionContainer type="unstake" />
      </StyledContainers>
    </StyledWrapper>
  );
}

export default Home;
