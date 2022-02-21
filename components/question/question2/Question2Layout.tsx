import { Box, Flex, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { FC } from "react";

import dynamic from "next/dynamic";
import { Question2AnswerButton } from "./Question2AnswerButton";
import Question2Dnd from "./Question2";
import { Question2Haishi } from "./Question2Haishi";

const Q2Layout = dynamic(() => import("./Question2"), { ssr: false });

export const Question2Layout = () => {
  return (
    <>
      <Text fontSize={"2xl"} mt={10} mb={5}>
        Q2
      </Text>
      <Stack spacing={10}>
        {/* ここでマップ関数を回してデータだけ渡す */}
        <Q2Layout haishi={Question2Haishi} />
        <Box>
          <Question2AnswerButton />
        </Box>
      </Stack>
    </>
  );
};
