import { Center, Text, Box, Input, Button, Flex, Divider } from 'native-base';
import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader';
import NoteList from '../components/NoteList';

const HomeScreen = ({ navigation }) => {
  return (
    <Box bg="primary.400" safeAreaTop="10" height="100%" bgColor="primary.500">
      <HomeHeader navigation={navigation} />
      <Divider />
      <NoteList />
    </Box>
  );
};

export default HomeScreen;
