import React from 'react';
import {
  Center,
  Text,
  Box,
  Input,
  Button,
  Flex,
  Divider,
  Pressable,
} from 'native-base';

const HomeHeader = ({ navigation }) => {
  return (
    <Flex justify="space-between" direction="row" padding="5">
      <Pressable onPress={() => navigation.push('LoginScreen')}>
        <Text fontSize="xl" bold italic color="primary.100">
          Simple Notes
        </Text>
      </Pressable>
      <Button
        size="sm"
        variant="outline"
        backgroundColor="primary.100"
        onPress={() => navigation.push('CreateNote')}
      >
        <Text color="primary.500" bold paddingX="1">
          +
        </Text>
      </Button>
    </Flex>
  );
};

export default HomeHeader;
