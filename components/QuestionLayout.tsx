import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

import dynamic from "next/dynamic";

//ここで牌姿の配列をインポートする。
import { Question2Answer } from "./questionList/Question2Answer";
import { QuestionAnswerButton } from "./QuestionAnswerButton";
import { Question2Haishi } from "./questionList/Question2Haishi";

const CreateQuestion = dynamic(() => import("./CreateQuestion"), {
  ssr: false,
});

export const QuestionLayout = () => {
  return (
    <>
      <Stack spacing={10}>
        {/* propsに牌姿の配列と何問目かの値を渡すことで、問題を作成できる */}
        <CreateQuestion haishi={Question2Haishi} number={1} />
        <Box>
          {/* propsに答えの配列を渡すことで答えを作成できる。 */}
          <QuestionAnswerButton answer={Question2Answer} />
        </Box>
      </Stack>
    </>
  );
};
