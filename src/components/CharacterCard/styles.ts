import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Platform } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${RFValue(100)}px;
  max-width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark_500};
`;

export const Image = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ContainerInfo = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: ${RFValue(12)}px;
  padding: ${RFValue(12)}px 0;
  width: 100%;
  height: ${RFValue(100)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extra_bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const SecondaryDescription = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? RFValue(8) : RFValue(2)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const SecondaryInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;