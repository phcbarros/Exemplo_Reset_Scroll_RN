import {RFValue} from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.colors.text};
  padding: 10px;
  margin-top: 10px;
`

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text};
  text-transform: uppercase;
`

export const Value = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textDark};
  margin-top: 8px;
`
