import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { QuestionAnswerButton } from "./QuestionAnswerButton";

//牌姿の配列をインポート
import { Question1Haishi } from "./questionList/Question1Haishi";
import { Question2Haishi } from "./questionList/Question2Haishi";
import { Question3Haishi } from "./questionList/Question3Haishi";

//答えの配列をインポート
import { Question1Answer } from "./questionList/Question1Answer";
import { Question2Answer } from "./questionList/Question2Answer";
import { Question3Answer } from "./questionList/Question3Answer";

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
        <CreateQuestion
          haishi={Question2Haishi}
          number={2}
          title={"両面ノベタン"}
        />
        <Box>
          <QuestionAnswerButton answer={Question2Answer} />
        </Box>
        <CreateQuestion
          haishi={Question3Haishi}
          number={3}
          title={"両面シャボ"}
        />
        <Box>
          <QuestionAnswerButton answer={Question3Answer} />
        </Box>
      </Stack>
    </>
  );
};
