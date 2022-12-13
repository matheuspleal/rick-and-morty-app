import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { CharacterCard } from '../../components/CharacterCard';
import { HeaderTitle } from '../../components/HeaderTitle'
import { TextInput } from '../../components/TextInput'

import { ApiData, Results } from '../../DTOs/api-data';
import { 
  Container, 
  HeaderContainer,
  ContentContainer,
  List
} from './styles'

export function Dashboard() {

  const [characters, setCharacters] = useState<Results[]>();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch(() => Alert.alert('Error', 'Error when trying to get API data'))
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle title={`The Rick\nand Morty\nApp`}/>
      </HeaderContainer>
      <ContentContainer>
        <TextInput placeholder="Type a name for search"/>
        <List
          data={characters}
          keyExtractor={item => item.id}
          renderItem={({ item }: any) => (
            <CharacterCard 
              image={item.image}
              name={item.name}
              status={item.status}
              species={item.species}
              origin={item.origin.name}
              location={item.location.name}        
            />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </ContentContainer> 
    </Container>
  )
}