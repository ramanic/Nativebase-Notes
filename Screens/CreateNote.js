import {
  Center,
  Text,
  Box,
  Input,
  Button,
  Divider,
  Flex,
  Pressable,
} from 'native-base';

import React, { useState } from 'react';

import { createNotes } from '../utils/notes';
const CreateNote = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onCreate = () => {
    createNotes(title, body);
    navigation.push('HomeScreen');
  };
  return (
    <Box safeAreaTop="10" height="100%" bgColor="primary.400">
      <Flex justify="space-between" direction="row" padding="5">
        <Pressable onPress={() => navigation.push('LoginScreen')}>
          <Text fontSize="3xl" bold italic color="primary.100">
            Simple Notes
          </Text>
        </Pressable>
        <Button
          size="xs"
          variant="outline"
          backgroundColor="primary.100"
          onPress={onCreate}
        >
          <Text color="primary.500" bold paddingX="1">
            ADD
          </Text>
        </Button>
      </Flex>

      <Input
        size="2xl"
        variant="unstyled"
        placeholder="Title"
        padding="5"
        marginTop="5"
        multiline={true}
        value={title}
        onChangeText={(text) => setTitle(text)}
        bold
      />
      <Input
        size="lg"
        variant="unstyled"
        placeholder="Here is your note..."
        padding="5"
        value={body}
        onChangeText={(text) => setBody(text)}
        multiline={true}
        height="100%"
        bold
      />
    </Box>
  );
};

export default CreateNote;
