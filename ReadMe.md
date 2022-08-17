# Usando createRef e forwardRef para resetar o scroll de uma tela em React Native

## Stack

- React Native
- Styled Components
- Typescript

## Problema

Voltar o scroll a sua posição inicial quando a tela receber foco.

## Cenário atual

Temos uma formulário com muitos campos e um botão _Continuar_ que navega para uma tela de revisão dos dados antes de enviar os dados para o servidor.

```ts
export function RegistrationScreen() {
  const navigation = useNavigation()

  function handleRegister(data: FieldValues) {
    navigation.navigate('Review', {data})
  }

  return (
    <KeyboardScroll>
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
```

Nossa tela está sendo envolvida por um componente chamado _KeyboardScroll_ que nos auxilia a não deixar o teclado em cima dos nossos campos. Esse componente pode ser usado em várias telas e por isso foi componentizado usando o styled-components. Esse componente foi feito usando o _KeyboardAwareScrollView_ do _react-native-keyboard-aware-scroll-view_ como base.

```ts
// componente KeyboardScroll
import React from 'react'
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'

import * as S from './styles'

type Props = KeyboardAwareScrollViewProps & {
  children: React.ReactNode
  ref: React.MutableRefObject<KeyboardAwareScrollView>
}

export function KeyboardScroll({children, ref, ...rest}: Props) {
  return (
    <S.Scroll ref={ref} {...rest}>
      {children}
    </S.Scroll>
  )
}
```

## Como fazer o scroll voltar a sua posição inicial?

Para fazer isso eu pensei em usar o hook _useRef_ do React para criar uma referência que não muda a cada render da tela e passar ela para o meu componente _KeyboardScroll_. E quando a tela receber o foco vou executar o método _scrollToPosition_.

```ts
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import {KeyboardScroll} from '../../components/KeyboardsScroll'

export function RegistrationScreen() {
  const keyboardScrollRef = React.useRef<KeyboardAwareScrollView>(null)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      keyboardScrollRef.current?.scrollToPosition(0, 0, false)
    }
  }, [isFocused])

  return (
    <KeyboardScroll ref={keyboardScrollRef}>
      /* componentes da tela */
    </KeyboardScroll>
  )
}
```

Porém quando fui testar a implementação obtive a seguinte mensagem de aviso:

```cmd
Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
```

Eu não estava entendendo o porque estava tendo esse aviso, sendo já que eu tinha feito isso em outro projeto, porém existe uma grande diferença entre o que fiz agora e o que tinha feito. No outro projeto eu não usava o styled-components e nem tinha pensado em componentizar o _KeyboardAwareScrollView_ e a minha tela era dessa forma:

```ts
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import {Footer, Content, Form, FormGroup, FormLabel} from './styles'

export function RegistrationScreen() {
  const keyboardScrollRef = React.useRef<KeyboardAwareScrollView>(null)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      keyboardScrollRef.current?.scrollToPosition(0, 0, false)
    }
  }, [isFocused])

  return (
    <KeyboardAwareScrollView ref={keyboardScrollRef}>
      /* componentes da tela */
    </KeyboardAwareScrollView>
  )
}
```

## Solução

Lendo a doc do React vi que para o meu componente funcionar eu teria que usar o método _createRef_ e criar o meu componente de KeyboardScroll usando a função _forwardRef_, então fiz as alterações deixando eles assim:

```ts
type PropsCorrect = KeyboardAwareScrollViewProps & {
  children: React.ReactNode
}

export const KeyboardScrollCorrect = React.forwardRef(
  ({children, ...rest}: PropsCorrect, ref) => {
    return (
      <S.Scroll ref={ref as React.Ref<KeyboardAwareScrollView>} {...rest}>
        {children}
      </S.Scroll>
    )
  },
)
```

Com essas alterações consegui resetar o scroll da tela.

Segue abaixo a explicação da doc do React de como e por isso funciona:

1. Nós criamos uma React ref ao chamar React.createRef e atribuí-la a uma variável ref.
2. Nós passamos nossa ref para <KeyboardScrollCorrect ref={keyboardScrollRef}> especificando-a como um atributo JSX.
3. O React passa a ref como um segundo argumento para a função (props, ref) => ... dentro de fowardRef.
   4.Nós encaminhamos esse argumento ref para <S.Scroll ref={ref}> especificando-a como um atributo JSX.
4. Quando a ref estiver anexada, ref.current irá apontar para o nó <S.Scroll>

Referências:

1. https://pt-br.reactjs.org/docs/forwarding-refs.html
