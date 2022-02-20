import { Box, Flex, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { FC } from "react";

import dynamic from "next/dynamic";
import { Question2AnswerButton } from "./Question2AnswerButton";

const Q2Layout = dynamic<{}>(
  () => import("./Question2").then((module) => module.Question2Dnd),
  { ssr: false }
);

export const Question2Layout = () => {
  return (
    <>
      <Text fontSize={"2xl"} mt={10} mb={5}>
        Q2
      </Text>
      <Stack spacing={10}>
        <Q2Layout />
        <Box>
          <Question2AnswerButton />
        </Box>
      </Stack>
    </>
  );
};
