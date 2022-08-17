import React from 'react'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'

import {Button} from '../../components/Button'
import {InputForm} from '../../components/InputForm'

import {Container, Title, Footer, Content, Form} from './styles'
import {KeyboardScroll} from '../../components/KeyboardsScroll'

interface FormData {
  name: string
  address: string
  zipCode: string
  city: string
  state: string
  phone: string
  email: string
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  address: Yup.string().required('Endereço é obrigatório'),
  neighborhood: Yup.string().required('Bairro é obrigatório'),
  city: Yup.string().required('Cidade é obrigatório'),
  state: Yup.string().required('Estado é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  email: Yup.string().required('Email é obrigatório'),
  zipCode: Yup.string().required('CEP é obrigatório'),
})

export function RegistrationScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  function handleRegister(data: FormData) {
    console.log(data)
  }

  return (
    <KeyboardScroll>
      <Title>Registration Screen</Title>
      <Content>
        <Form>
          <InputForm
            control={control}
            name="name"
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />

          <InputForm
            control={control}
            name="phone"
            placeholder="Telefone"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.phone && errors.phone.message}
          />

          <InputForm
            control={control}
            name="email"
            placeholder="E-mail"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.email && errors.email.message}
          />

          <InputForm
            control={control}
            name="address"
            placeholder="Endereço"
            autoCorrect={false}
            error={errors.address && errors.address.message}
          />

          <InputForm
            control={control}
            name="city"
            placeholder="Cidade"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.city && errors.city.message}
          />

          <InputForm
            control={control}
            name="neighborhood"
            placeholder="Bairro"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.neighborhood && errors.neighborhood.message}
          />

          <InputForm
            control={control}
            name="state"
            placeholder="Estado"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.state && errors.state.message}
          />

          <InputForm
            control={control}
            name="zipCode"
            placeholder="CEP"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.zipCode && errors.zipCode.message}
          />
        </Form>
      </Content>

      <Footer>
        <Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
      </Footer>
    </KeyboardScroll>
  )
}
