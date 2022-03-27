import React, { useState } from 'react';

import { Center, Text, Box, Input, Button, Pressable } from 'native-base';

const LoginScreen = ({ navigation }) => {
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
            type="email"
            mx="3"
            placeholder="Email"
            variant="underlined"
            marginBottom={5}
          />
          <Input
            type="password"
            mx="3"
            placeholder="Password"
            variant="underlined"
            marginBottom={5}
          />
          <Button
            bordered
            isLoadingText="Logging In"
            isLoading={false}
            onPress={() => navigation.push('HomeScreen')}
          >
            <Text>Login</Text>
          </Button>
        </Box>
        <Text marginTop="2">
          Don't have an account ?{' '}
          <Pressable onPress={() => navigation.push('SignUpScreen')}>
            <Text color="primary.100">Sign Up.</Text>
          </Pressable>
        </Text>
      </Center>
    </Box>
  );
};

export default LoginScreen;
