import { Box, Flex, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { FC } from "react";

import dynamic from "next/dynamic";
import { Question1AnswerButton } from "./Question1AnswerButton";

const Q1Layout = dynamic<{}>(
  () => import("./Question1").then((module) => module.Question1Dnd),
  { ssr: false }
);

export const Question1Layout = () => {
  return (
    <>
      <Text fontSize={"2xl"} mt={10} mb={5}>
        Q1
      </Text>
      <Stack spacing={10}>
        <Q1Layout />
        <Box>
          <Question1AnswerButton />
        </Box>
      </Stack>
    </>
  );
};
