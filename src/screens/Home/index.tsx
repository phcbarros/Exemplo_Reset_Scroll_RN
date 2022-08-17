import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {SafeAreaView} from 'react-native'

import {Button} from '../../components/Button'
import {Title} from '../../components/Title'

import {Container, ButtonContainer, Content} from './styles'

export function HomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Title>Home Screen</Title>

        <Content>
          <ButtonContainer>
            <Button
              title="Exemplo 1 (reset de scroll não funcionando)"
              onPress={() => navigation.navigate('Registration')}
            />
          </ButtonContainer>

          <ButtonContainer>
            <Button
              title="Exemplo 2 (reset de scroll funcionando)"
              onPress={() => navigation.navigate('RegistrationWorking')}
            />
          </ButtonContainer>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
