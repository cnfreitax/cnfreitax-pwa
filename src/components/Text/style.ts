import styled from 'styled-components'
import { TextProps } from '.'

export const TextContent = styled.h1<TextProps>`
  font-size: ${({ size }) => (size ? `var(--${size})` : 'var(--large)')};
  font-weight: ${({ weight }) => weight || 'normal'};
`
