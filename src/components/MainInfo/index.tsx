import { 
  Container,
  Circle,
  Description
} from './styles'

interface Props {
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
}

export function MainInfo({ status, species }: Props) {
  return (
    <Container>
      <Circle 
        status={status}
      />
      <Description>{status} - {species}</Description>
    </Container>
  )
}