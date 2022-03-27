import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Center,
  Divider,
} from 'native-base';
import React, { useState, useEffect } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { deleteNote, getNotes } from './../utils/notes';
const NoteList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    updateNotes();
  }, []);

  const updateNotes = () => {
    let notes = getNotes();
    setListData([...notes]);
  };

  const deleteRow = (rowMap, rowKey) => {
    console.log(rowMap);
    console.log(rowKey);
    const rowID = listData[rowKey].id;
    deleteNote(rowID);
    updateNotes();
  };

  const onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="1">
      <Pressable
        w="0"
        ml="auto"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.index)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800"></Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        bg="red.500"
        justifyContent="center"
        onPress={() => {
          deleteRow(rowMap, data.index);
        }}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );
  const renderItem = ({ item, index }) => (
    <Box bgColor="primary.400">
      <Pressable onPress={() => console.log('You touched me')} padding="5">
        <Box>
          <Text bold fontSize="xl">
            {item.title}
          </Text>
          <Text>{item.body}</Text>
        </Box>
      </Pressable>
      <Divider />
    </Box>
  );

  return (
    <Box bg="white" flex="1" bgColor="primary.500">
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        rightOpenValue={-100}
        previewRowKey={'0'}
        previewOpenValue={-40}
        renderHiddenItem={renderHiddenItem}
        previewOpenDelay={3000}
      />
    </Box>
  );
};

export default NoteList;
