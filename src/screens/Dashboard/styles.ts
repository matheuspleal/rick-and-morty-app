import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import illustrationSvg from '../../assets/illustrationSvg.svg'

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

export const List = styled.FlatList.attrs({
  
})`
  margin-top: ${RFValue(36)}px;
  border-radius: 8px;
  gap: 8px
`;
