import React, { useEffect, useState } from 'react'
import { Alert, Linking, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { CharacterCard } from '../../components/CharacterCard';
import { HeaderTitle } from '../../components/HeaderTitle'
import { TextInput } from '../../components/TextInput'

import IllustrationSvg from '../../assets/illustration.svg'

import {
  ApiData,
  Results
} from '../../DTOs/api-data'

import {
  Container,
  HeaderContainer,
  ContentContainer,
  List,
  InfoText,
  BoldText
} from './styles'

type ResultsInfo = Pick<Results, "image" | "name" | "status" | "species" | "origin" | "location">

export function Dashboard() {
  const [characters, setCharacters] = useState<ApiData>({
    info: {
      count: 0,
      pages: 0,
      next: "",
      prev: ""
    },
    results: []
  });

  const Item = ({
    image,
    name,
    status,
    species,
    origin,
    location
  }: ResultsInfo) => (
    <CharacterCard
      image={image}
      name={name}
      status={status}
      species={species}
      origin={origin.name}
      location={location.name}
    />
  )

  const characterListItem: ListRenderItem<any> = ({
    item 
  }: ListRenderItemInfo<ResultsInfo>) => (
    <Item 
      image={item.image}
      name={item.name} 
      status={item.status}
      species={item.species}
      origin={item.origin}
      location={item.location}
    />
  )
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((response) => setCharacters(response))
      .catch(() => Alert.alert('Error', 'Error when trying to get API data'))
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <IllustrationSvg
          style={{
            position: 'absolute',
            bottom: 0,
            left: 100,
          }}
        />
        <HeaderTitle title={`The Rick\nand Morty\nApp`} />
      </HeaderContainer>
      <ContentContainer>
        <TextInput placeholder="Type a name for search" />
        <List
          data={characters.results}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={characterListItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        <InfoText
          onPress={() => {
            Linking.openURL('https://rickandmortyapi.com/')
          }}
        >
          Click here to visit the <BoldText>Rick and Morty API</BoldText> website
        </InfoText>
      </ContentContainer>
    </Container>
  )
}