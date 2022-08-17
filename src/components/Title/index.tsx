import {ReactNode} from 'react'
import {TextProps} from 'react-native'

import {Title as Text} from './styles'

type Props = TextProps & {
  children: ReactNode
}

export function Title({children, ...rest}: Props) {
  return <Text {...rest}>{children}</Text>
}
