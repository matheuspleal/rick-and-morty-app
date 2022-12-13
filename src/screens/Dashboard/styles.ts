import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  padding: ${RFValue(94)}px 0 ${RFValue(42)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${RFValue(34)}px ${RFValue(18)}px ${RFValue(42)}px ${RFValue(18)}px;
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.dark_900};
`;

export const List = styled.FlatList`
  margin-top: ${RFValue(24)}px;
  border-radius: 8px;
`;

export const InfoText = styled.Text`
  margin-top: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;
