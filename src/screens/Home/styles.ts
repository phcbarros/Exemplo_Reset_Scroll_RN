import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.bold};

  margin-top: 24px;
  text-align: center;
`

export const Content = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 24px;
`
