import { AnchorHTMLAttributes } from 'react'
import * as S from './style'

type HeadingTypes = AnchorHTMLAttributes<HTMLAnchorElement>

export type TextProps = {
  children?: React.ReactNode
  weight?: 'bold'
  color?: 'primary' | 'gray' | 'lightGray'
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'huge'
  as?: React.ElementType
} & HeadingTypes

export const Text = ({ children, size, weight, ...props }: TextProps) => {
  return (
    <S.TextContent as={props.as} size={size} weight={weight}>
      {children}
    </S.TextContent>
  )
}
