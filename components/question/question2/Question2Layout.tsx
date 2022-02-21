import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

import dynamic from "next/dynamic";
import { Question2AnswerButton } from "./Question2AnswerButton";
//ここで牌姿の配列をインポートする。
import { Question2Haishi } from "./Question2Haishi";
import { Question2Answer } from "./Question2Answer";

const Q2Layout = dynamic(() => import("./Question2"), { ssr: false });

export const Question2Layout = () => {
  return (
    <>
      <Stack spacing={10}>
        {/* propsに牌姿の配列と何問目かの値を渡すことで、問題を作成できる */}
        <Q2Layout haishi={Question2Haishi} number={1} />
        <Box>
          {/* propsに答えの配列を渡すことで答えを作成できる。 */}
          <Question2AnswerButton answer={Question2Answer} />
        </Box>
      </Stack>
    </>
  );
};
