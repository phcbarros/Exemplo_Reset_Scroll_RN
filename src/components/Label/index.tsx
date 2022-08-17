import {Container, Label as LabelText, Value} from './styles'

type Props = {
  label: string
  value: string
}

export function Label({label, value}: Props) {
  return (
    <Container>
      <LabelText>{label}</LabelText>
      <Value>{value}</Value>
    </Container>
  )
}
