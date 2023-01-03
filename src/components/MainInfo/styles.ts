import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface StatusProps {
  status: 'Alive' | 'Dead' | 'unknown';
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Circle = styled.View.attrs({
  borderRadius: 50
})<StatusProps>`
  height: 8px;
  width: 8px;
  background-color: ${({ theme, status }) =>
    status === 'Alive'
      ? theme.colors.green_500
      : status === 'Dead'
      ? theme.colors.red_500
      : theme.colors.gray_500};
`;

export const Description = styled.Text`
  margin-left: ${RFValue(4)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;
