import React from 'react';
import {useNavigation} from '@react-navigation/native';

import IPersonageDTO from '../../dtos/IPersonageDTO';

import {Container, Name, BoxInfoDetails, Description} from './styles';

interface IBoxInfoProps {
  screenName: string;
  values: IPersonageDTO;
}

const BoxInfoPersonages: React.FC<IBoxInfoProps> = ({screenName, values}) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        navigation.navigate(screenName, {
          value: values,
        });
      }}>
      <Name>{values.name}</Name>
      <BoxInfoDetails>
        <Description>Altura: {values.height}cm</Description>
        <Description>Peso: {values.mass}Kg</Description>
        <Description>Nascimento: {values.birth_year}</Description>
      </BoxInfoDetails>
    </Container>
  );
};

export default BoxInfoPersonages;
