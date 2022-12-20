import React, { useEffect, useState } from 'react'
import { Alert, Linking, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { CharacterCard, CharacterCardProps } from '../../components/CharacterCard';
import { HeaderTitle } from '../../components/HeaderTitle'
import { TextInput } from '../../components/TextInput'

import {
  ApiData,
  Results
} from '../../DTOs/api-data'

import {
  Container,
  HeaderContainer,
  ContentContainer,
  CharacterList,
  InfoText,
  BoldText,
  IllustrationSvg
} from './styles'

export function Dashboard() {
  const initialApiData = {
    info: {
      count: 0,
      pages: 0,
      next: "",
      prev: ""
    },
    results: [] as Results[]
  }

  const [data, setData] = useState<ApiData>(initialApiData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterCharactersByName, setFilterCharactersByName] = useState<string>("");

  const Item = ({ id, image, name, status, species, origin, location }: CharacterCardProps) => (
    <CharacterCard
      id={id}
      image={image}
      name={name}
      status={status}
      species={species}
      origin={origin}
      location={location}
    />
  )

  const characterListItem: ListRenderItem<CharacterCardProps> = ({
    item
  }: ListRenderItemInfo<CharacterCardProps>) => (
    <Item
      id={item.id}
      image={item.image}
      name={item.name}
      status={item.status}
      species={item.species}
      origin={item.origin}
      location={item.location}
    />
  )

  function fetchMoreData() {
    if(data.info.next) {
      setCurrentPage(currentPage + 1);
    }
  }

  function getCharactersByPage() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response): Promise<ApiData> => response.json())
      .then((response) => {
        let updatedData
        if(currentPage !== 1) {
          updatedData = {
            info: response.info,
            results: [...data.results, ...response.results]
          }
        } else {
          updatedData = response
        }
        setData(updatedData)
      })
      .catch(() => Alert.alert('Error', 'Error when trying to get API data'))
  }

  function getCharactersByName() {
    fetch(`https://rickandmortyapi.com/api/character/?name=${filterCharactersByName}`)
      .then((response): Promise<ApiData> => response.json())
      .then((response: ApiData) => {
        setData(response)
      })
      .catch(() => Alert.alert('Error', 'Error when trying to get API data'))
  }

  useEffect(() => {
    if(!filterCharactersByName) {
      getCharactersByPage()
    } else {
      setCurrentPage(1)
      getCharactersByName()
    }
  }, [currentPage, filterCharactersByName])

  return (
    <Container>
      <HeaderContainer>
        <IllustrationSvg/>
        <HeaderTitle title={`The Rick\nand Morty\nApp`} />
      </HeaderContainer>
      <ContentContainer>
        <TextInput
          placeholder="Type a name for search"
          onChangeText={characterName => setFilterCharactersByName(characterName)}
        />
        <CharacterList
          data={data.results}
          keyExtractor={(item: CharacterCardProps) => item.id.toString()}
          renderItem={characterListItem}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
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