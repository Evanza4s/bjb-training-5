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
    >
      <Box>
        <Stack w={"75vh"}>
          <FormControl>
            <FormLabel>Item 1</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Item 2</FormLabel>
            <Input />
          </FormControl>
          <Button>Submit</Button>
        </Stack>
      </Box>
    </Flex>
  );
}
