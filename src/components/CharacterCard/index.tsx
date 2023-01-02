import React from 'react'

import { Results } from '../../DTOs/api-data'
import { 
  Container,
  ContainerInfo,
  Image,
  Name,
  PrimaryInfo,
  SecondaryDescription,
  SecondaryInfo,
} from './styles'

export type CharacterCardProps = Results

export function CharacterCard({
  image,
  name,
  status,
  species,
  origin,
  location
}: CharacterCardProps) {
  return (
    <Container>
      <Image source={{ 
        uri: image
      }}/>
      <ContainerInfo>
        <Name>{name}</Name>
        <PrimaryInfo>{status} - {species}</PrimaryInfo>
        <SecondaryDescription>Origin:</SecondaryDescription>
        <SecondaryInfo>{origin.name}</SecondaryInfo>
        <SecondaryDescription>Location:</SecondaryDescription>
        <SecondaryInfo>{location.name}</SecondaryInfo>
      </ContainerInfo>
    </Container>
  )
}