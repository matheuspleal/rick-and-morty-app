import React from 'react'

import { Results } from '../../DTOs/api-data'
import { MainInfo } from '../MainInfo'
import { 
  Container,
  ContainerInfo,
  Image,
  Name,
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
        <MainInfo status={status} species={species}/>
        <SecondaryDescription>Origin:</SecondaryDescription>
        <SecondaryInfo>{origin.name}</SecondaryInfo>
        <SecondaryDescription>Location:</SecondaryDescription>
        <SecondaryInfo>{location.name}</SecondaryInfo>
      </ContainerInfo>
    </Container>
  )
}