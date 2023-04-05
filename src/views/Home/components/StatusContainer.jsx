import React from 'react'
import styled from 'styled-components'
import { StyledStatusContainer } from './styles'

const StyledStatusArea = styled.div`
  margin: 0px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledStatusTitle = styled.div`
  color: #ffff00;
  font-size: 30px;
`

const StyledDeatilArea = styled.div`
  font-size: 20px;
`

const StyledDetailTitle = styled.div`
  color: #ffff00;
`

const StyledValue = styled.div`
  font-size: 24px; 
`

const StatusContainer = ({...props}) => {
  const title = props.title

  return (
    <StyledStatusContainer>
      <StyledStatusArea>
        <StyledStatusTitle>{title}</StyledStatusTitle>
        <StyledDeatilArea>
          <StyledValue>0.000 $VIBEZ</StyledValue>
        </StyledDeatilArea>
      </StyledStatusArea>
    </StyledStatusContainer>
  );
}

export default StatusContainer
