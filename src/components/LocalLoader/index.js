/* import React from 'react'
import { Lottie } from '@crello/react-lottie'
import styled from 'styled-components'
import beeAnimation from '../../assets/lotties/bee-animation.json'

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.fill ? "100vh" : "180px")};
  width: 100%;
`

const LocalLoader = ({ fill }) => {
  return (
    <Wrapper fill={fill}>
      <Lottie
        config={{
          animationData: beeAnimation,
          loop: true,
        }}
        height={fill ? 100 : 84}
        width={fill ? 100 : 84}
      />
    </Wrapper>
  )
}

export default LocalLoader*/
import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const pulse = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.fill && !props.height
      ? css`
          height: 100vh;
        `
      : css`
          height: 180px;
        `}
`

const AnimatedImg = styled.div`
  animation: ${pulse} 800ms linear infinite;
  & > * {
    width: 72px;
  }
`

const LocalLoader = ({ fill }) => {

  return (
    <Wrapper fill={fill}>
      <AnimatedImg>
        <img src={require('../../assets/metroswap-logo.svg')} alt="loading-icon" />
      </AnimatedImg>
    </Wrapper>
  )
}

export default LocalLoader

