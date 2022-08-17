import React from 'react'
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'

import * as S from './styles'

type Props = KeyboardAwareScrollViewProps & {
  children: React.ReactNode
  ref: React.MutableRefObject<KeyboardAwareScrollView>
}

export function KeyboardScroll({children, ref, ...rest}: Props) {
  return (
    <S.Scroll ref={ref} {...rest}>
      {children}
    </S.Scroll>
  )
}

type PropsCorrect = KeyboardAwareScrollViewProps & {
  children: React.ReactNode
}

export const KeyboardScrollCorrect = React.forwardRef(
  ({children, ...rest}: PropsCorrect, ref) => {
    return (
      <S.Scroll ref={ref as React.Ref<KeyboardAwareScrollView>} {...rest}>
        {children}
      </S.Scroll>
    )
  },
)
