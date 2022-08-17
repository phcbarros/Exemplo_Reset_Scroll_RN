import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'

export const Scroll = styled(
  KeyboardAwareScrollView,
).attrs<KeyboardAwareScrollViewProps>({
  contentContainerStyle: {
    paddingBottom: 120,
  },
  extraScrollHeight: 50,
  enableOnAndroid: true,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary.white};

  margin: 24px;
`
