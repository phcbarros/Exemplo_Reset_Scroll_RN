import {useRoute} from '@react-navigation/native'
import React from 'react'

import {Button} from '../../components/Button'
import {Label} from '../../components/Label'
import {RegisterForm} from '../../types/RegisterForm'

import {Container, Title, Footer, Content} from './styles'

const labels = {
  name: 'Nome',
  address: 'Endereço',
  zipCode: 'CEP',
  city: 'Cidade',
  state: 'Estado',
  phone: 'Telefone',
  email: 'Email',
}

export function ReviewScreen() {
  const route = useRoute()
  const {data} = route.params as {data: RegisterForm}

  return (
    <Container>
      <Title>Review Screen</Title>
      <Content>
        {Object.entries(data).map(([key, value]) => (
          <Label
            key={key}
            label={labels[key as keyof typeof labels]}
            value={value}
          />
        ))}
      </Content>

      <Footer>
        <Button title="Salvar" onPress={() => {}} />
      </Footer>
    </Container>
  )
}
