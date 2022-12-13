import React from 'react'
import { 
  Container,
  ContainerInfo,
  Image,
  Name,
  PrimaryInfo,
  SecondaryDescription,
  SecondaryInfo,

} from './styles'

interface Props {
  image: string,
  name: string,
  status: string,
  species: string,
  origin: string,
  location: string
}

export function CharacterCard({
  image, 
  name,
  status,
  species,
  origin,
  location
}: Props) {
  return (
    <Container>
      <Image source={{ 
        uri: image
      }}/>
      <ContainerInfo>
        <Name>{name}</Name>
        <PrimaryInfo>{status} - {species}</PrimaryInfo>
        <SecondaryDescription>Origin:</SecondaryDescription>
        <SecondaryInfo>{origin}</SecondaryInfo>
        <SecondaryDescription>Location:</SecondaryDescription>
        <SecondaryInfo>{location}</SecondaryInfo>
      </ContainerInfo>
    </Container>
  )
}