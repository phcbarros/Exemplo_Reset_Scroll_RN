import React from 'react'
import {KeyboardAwareScrollViewProps} from 'react-native-keyboard-aware-scroll-view'

import * as S from './styles'

type Props = KeyboardAwareScrollViewProps & {
  children: React.ReactNode
}

export function KeyboardScroll({children, ...rest}: Props) {
  return <S.Scroll {...rest}>{children}</S.Scroll>
}
