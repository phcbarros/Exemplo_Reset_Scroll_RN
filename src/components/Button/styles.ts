import styled from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 5px;

  padding: 18px 16px;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({theme}) => theme.colors.shape};
`
