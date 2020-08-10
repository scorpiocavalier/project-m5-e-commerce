import React from 'react'
import styled, { keyframes } from 'styled-components'
import { withBaseIcon, Icon } from 'react-icons-kit'
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3'
import { spinner } from 'react-icons-kit/fa'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinnerIconWrapper = styled(Icon)`
  animation: ${spin} 1s infinite alternate;
`

const ErrorIconWrapper = withBaseIcon({
  size: 70,
});

// Spinner
export const SpinnerIcon = () => <SpinnerIconWrapper size={50} icon={spinner} />

// Error
export const BombIcon = () => <ErrorIconWrapper icon={bomb} />

