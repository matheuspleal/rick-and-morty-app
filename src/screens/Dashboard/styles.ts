import styled from 'styled-components/native'
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'

import illustrationSvg from '../../assets/illustration.svg'
import { CharacterCardProps } from '../../components/CharacterCard';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  padding: ${getStatusBarHeight() + RFValue(56)}px 0 ${RFValue(36)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${RFValue(32)}px ${RFValue(18)}px ${getStatusBarHeight()}px ${RFValue(18)}px;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${({ theme }) => theme.colors.dark_900};
`;

export const CharacterList = (styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false
})`
  margin-top: ${RFValue(16)}px;
  border-radius: 8px;
` as unknown) as typeof FlatList<CharacterCardProps>;

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

export const IllustrationSvg = styled(illustrationSvg)`
  position: absolute;
  bottom: 0;
  left: ${RFValue(80)}px;
`
export const ItemSeparator = styled.View`
  height: ${RFValue(12)}px;
`

