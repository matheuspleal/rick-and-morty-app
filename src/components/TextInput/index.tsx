import React from 'react'
import { TextInputProps } from 'react-native';
import { 
  Container,
  Icon,
  Input
 } from './styles'

export function TextInput({ placeholder, onChangeText }: TextInputProps) {
  return (
    <Container>
      <Icon name="search"/>
      <Input 
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </Container>
  )
}