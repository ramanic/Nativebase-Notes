import React, { useState } from 'react';

import { Center, Text, Box, Input, Button, Pressable } from 'native-base';

const SignUpScreen = ({ navigation }) => {
  return (
    <Box bg="primary.400" safeAreaTop="10" height="100%">
      <Center height="80%">
        <Text fontSize="3xl" marginBottom="10" bold italic color="primary.100">
          Simple Notes
        </Text>

        <Box
          width="350"
          rounded="lg"
          overflow="hidden"
          borderColor="primary.400"
          borderWidth="1"
          backgroundColor="primary.300"
          padding="5"
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
        >
          <Input
            mx="3"
            placeholder="Email"
            variant="underlined"
            marginBottom={5}
          />
          <Input
            mx="3"
            type="password"
            placeholder="Password"
            variant="underlined"
            marginBottom={5}
          />
          <Input
            mx="3"
            type="password"
            placeholder="Confirm Password"
            variant="underlined"
            marginBottom={5}
          />
          <Button
            bordered
            isLoadingText="Signing Up"
            isLoading={false}
            onPress={() => navigation.push('HomeScreen')}
          >
            <Text>Sign Up</Text>
          </Button>
        </Box>
        <Text marginTop="2">
          Already have an account ?{' '}
          <Pressable nPress={() => navigation.push('LoginScreen')}>
            <Text color="primary.100">Log In.</Text>
          </Pressable>
        </Text>
      </Center>
    </Box>
  );
};

export default SignUpScreen;
