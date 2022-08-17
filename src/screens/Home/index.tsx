import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {SafeAreaView} from 'react-native'

import {Button} from '../../components/Button'

import {Container, Title, ButtonContainer, Content} from './styles'

export function HomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Title>Home Screen</Title>

        <Content>
          <ButtonContainer>
            <Button
              title="Exemplo 1"
              onPress={() => navigation.navigate('Registration')}
            />
          </ButtonContainer>

          <ButtonContainer>
            <Button title="Exemplo 2" onPress={() => {}} />
          </ButtonContainer>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
