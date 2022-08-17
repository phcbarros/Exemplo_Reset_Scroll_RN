import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;

  padding: 0 24px;
`

export const Content = styled.View`
  flex: 1;
`

export const Footer = styled.View`
  width: 100%;
  margin-top: 24px;
`
