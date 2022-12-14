import React from 'react'
import {TextInputProps} from 'react-native'
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
} from 'react-hook-form'

import {Input} from '../Input'

import {Container, Error} from './styles'

interface Props extends TextInputProps {
  control: Control
  name: string
  error: FieldError | string | undefined | FieldErrorsImpl<FieldValues>
}

export function InputForm({control, name, error, ...rest}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}
