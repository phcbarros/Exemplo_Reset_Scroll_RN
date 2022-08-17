import styled from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.bold};

  margin-top: 24px;
  text-align: center;
`

export const Content = styled.View`
  flex: 1;
`

export const Form = styled.View`
  margin-top: 24px;
`

export const FormGroup = styled.View`
  width: 100%;

  margin-bottom: 8px;
`

export const FormLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`

export const Footer = styled.View`
  width: 100%;
  margin-top: 24px;
`
