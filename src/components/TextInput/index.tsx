import React from 'react'
import { TextInputProps } from 'react-native';
import { 
  Container,
  Icon,
  Input
 } from './styles'

interface Props extends TextInputProps {
 isFocused: boolean
}

export function TextInput({ placeholder, onChangeText, isFocused }: Props) {
  return (
    <Container
      isFocused={isFocused}  
    >
      <Icon 
        name="search"
        isFocused={isFocused}
      />
      <Input 
        placeholder={placeholder}
        onChangeText={onChangeText}
        isFocused={isFocused}
      />
    </Container>
  )
}