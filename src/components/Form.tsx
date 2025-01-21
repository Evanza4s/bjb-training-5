"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

export default function Form() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      gap="2"
    >
      <Stack w={"full"} spacing={4}>
        <Box display={"flex"} gap={2}>
          <FormControl>
            <FormLabel>Item 1</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Item 2</FormLabel>
            <Input />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>Item 3</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Item 4</FormLabel>
          <Input />
        </FormControl>
        <Button>Submit</Button>
      </Stack>
    </Flex>
  );
}
