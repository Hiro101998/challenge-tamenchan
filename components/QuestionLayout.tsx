import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { QuestionAnswerButton } from "./QuestionAnswerButton";

//牌姿の配列をインポート
import { Question1Haishi } from "./questionList/Question1Haishi";
import { Question2Haishi } from "./questionList/Question2Haishi";

//答えの配列をインポート
import { Question1Answer } from "../question1/Question1Answer";

//react-beautifu-dndの影響でSSRを回避するためにdinamicImportする。
import dynamic from "next/dynamic";
const CreateQuestion = dynamic(() => import("./CreateQuestion"), {
  ssr: false,
});

export const QuestionLayout = () => {
  return (
    <>
      <Stack spacing={10}>
        {/* propsに牌姿の配列と何問目かの値を渡すことで、問題を作成できる */}
        <CreateQuestion
          haishi={Question1Haishi}
          number={1}
          title={"スーパーノベタン"}
        />
        <Box>
          {/* propsに答えの配列を渡すことで答えを作成できる。 */}
          <QuestionAnswerButton answer={Question1Answer} />
        </Box>
        <CreateQuestion haishi={Question2Haishi} number={2} />
      </Stack>
    </>
  );
};
