import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${RFValue(10)}px ${RFValue(12)}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark_500};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#6D6E71'
})`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  height: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;

