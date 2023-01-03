import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextInputProps } from 'react-native';

interface ContainerProps {
  isFocused: boolean
}

interface IconProps {
  isFocused: boolean
}

interface InputProps extends TextInputProps {
  isFocused: boolean
 }

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${RFValue(10)}px ${RFValue(12)}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark_500};
  border: 2px solid ${({ theme, isFocused }) => 
    isFocused ? theme.colors.gray_500: theme.colors.dark_500
  };
`;

export const Icon = styled(Feather)<IconProps>`
  color: ${({ theme, isFocused }) => 
    isFocused ? theme.colors.gray_500 : theme.colors.gray_900
  };
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;
`;

export const Input = styled.TextInput.attrs<InputProps>({
  placeholderTextColor: '#6D6E71'
})<InputProps>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  height: ${RFValue(24)}px;
  color: ${({ theme, isFocused }) => 
    isFocused ? theme.colors.gray_500 : theme.colors.gray_900
  };
`;

