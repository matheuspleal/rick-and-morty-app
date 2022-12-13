import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(40)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark_900};
`;

