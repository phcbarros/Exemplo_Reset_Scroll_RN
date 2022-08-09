import React from 'react'
import {Button} from '../../components/Button'

import {Container, Title, ButtonContainer, Content} from './styles'

export function HomeScreen() {
  return (
    <Container>
      <Title>Home Screen</Title>

      <Content>
        <ButtonContainer>
          <Button title="Exemplo 1" onPress={() => {}} />
        </ButtonContainer>

        <ButtonContainer>
          <Button title="Exemplo 2" onPress={() => {}} />
        </ButtonContainer>
      </Content>
    </Container>
  )
}
