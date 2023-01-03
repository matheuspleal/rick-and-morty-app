import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { Alert, Linking, ListRenderItem, ListRenderItemInfo } from 'react-native'

import { CharacterCard, CharacterCardProps } from '../../components/CharacterCard'
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
  IllustrationSvg,
  ItemSeparator
} from './styles'

export function Dashboard() {
  const initialApiData = {
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: ''
    },
    results: [] as Results[]
  }

  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false)
  const [data, setData] = useState<ApiData>(initialApiData)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filterCharactersByName, setFilterCharactersByName] = useState<string>('')

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

  function searchCharacterByName(characterName: string) {
    setFilterCharactersByName(characterName)
  }

  const handleSearchCharacterByName = debounce(searchCharacterByName, 300)

  function handleOpenApiLink() {
    Linking.openURL('https://rickandmortyapi.com/')
  }

  function handleFetchMoreData() {
    if(data.info.next) {
      setCurrentPage(currentPage + 1)
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
        <IllustrationSvg
          height="220"
          preserveAspectRatio="xMinYMin slice" 
          width="222" 
          viewBox="0 0 222 220"
        />
        <HeaderTitle title={`The Rick\nand Morty\nApp`} />
      </HeaderContainer>
      <ContentContainer>
        <TextInput
          placeholder="Type a name for search"
          autoCorrect={false}
          autoFocus={false}
          onChangeText={handleSearchCharacterByName}
          onFocus={() => setInputIsFocused(true)}
          onBlur={() => setInputIsFocused(false)}
          isFocused={inputIsFocused}
        />
        <CharacterList
          data={data.results}
          keyExtractor={(item: CharacterCardProps) => item.id.toString()}
          renderItem={characterListItem}
          onEndReachedThreshold={0.2}
          onEndReached={handleFetchMoreData}
          ItemSeparatorComponent={ItemSeparator}
        />
        <InfoText
          onPress={handleOpenApiLink}
        >
          Click here to visit the <BoldText>Rick and Morty API</BoldText> website
        </InfoText>
      </ContentContainer>
    </Container>
  )
}