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
      <Text>Q1</Text>
      <Q1Layout />
      <Question1AnswerButton />
    </>
  );
};
