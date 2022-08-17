import React, {useEffect} from 'react'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {FieldValues, useForm} from 'react-hook-form'
import {useIsFocused, useNavigation} from '@react-navigation/native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import {Button} from '../../components/Button'
import {InputForm} from '../../components/InputForm'
import {KeyboardScroll} from '../../components/KeyboardsScroll'
import {Title} from '../../components/Title'

import {Footer, Content, Form, FormGroup, FormLabel} from './styles'

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
  const keyboardScrollRef = React.useRef<KeyboardAwareScrollView>(null)
  const isFocused = useIsFocused()

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  })

  const navigation = useNavigation()

  function handleRegister(data: FieldValues) {
    navigation.navigate('Review', {data})
  }

  useEffect(() => {
    if (isFocused) {
      keyboardScrollRef.current?.scrollToPosition(0, 0, false)
    }
  }, [isFocused])

  return (
    <KeyboardScroll ref={keyboardScrollRef}>
      <Title>Registration Screen</Title>

      <Content>
        <Form>
          <FormGroup>
            <FormLabel>Nome</FormLabel>
            <InputForm
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Telefone</FormLabel>
            <InputForm
              control={control}
              name="phone"
              placeholder="Telefone"
              autoCapitalize="sentences"
              autoCorrect={false}
              keyboardType="numeric"
              error={errors.phone && errors.phone.message}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <InputForm
              control={control}
              name="email"
              placeholder="E-mail"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.email && errors.email.message}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Endereço</FormLabel>
            <InputForm
              control={control}
              name="address"
              placeholder="Endereço"
              autoCorrect={false}
              error={errors.address && errors.address.message}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Bairro</FormLabel>
            <InputForm
              control={control}
              name="neighborhood"
              placeholder="Bairro"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.neighborhood && errors.neighborhood.message}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Cidade</FormLabel>
            <InputForm
              control={control}
              name="city"
              placeholder="Cidade"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.city && errors.city.message}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Estado</FormLabel>
            <InputForm
              control={control}
              name="state"
              placeholder="Estado"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.state && errors.state.message}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>CEP</FormLabel>
            <InputForm
              control={control}
              name="zipCode"
              placeholder="CEP"
              autoCapitalize="sentences"
              autoCorrect={false}
              keyboardType="numeric"
              error={errors.zipCode && errors.zipCode.message}
            />
          </FormGroup>
        </Form>
      </Content>

      <Footer>
        <Button title="Continuar" onPress={handleSubmit(handleRegister)} />
      </Footer>
    </KeyboardScroll>
  )
}
