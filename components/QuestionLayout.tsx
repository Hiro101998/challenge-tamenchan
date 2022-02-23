import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

//牌姿の配列をインポート
import { Question1Haishi } from "./questionList/Question1Haishi";
import { Question2Haishi } from "./questionList/Question2Haishi";
import { Question3Haishi } from "./questionList/Question3Haishi";
import { Question4Haishi } from "./questionList/Question4Haishi";
import { Question5Haishi } from "./questionList/Question5Haishi";
import { Question6Haishi } from "./questionList/Question6Haishi";
import { Question7Haishi } from "./questionList/Question7Haishi";
import { Question8Haishi } from "./questionList/Question8Haishi";
import { Question9Haishi } from "./questionList/Question9Haishi";
import { Question10Haishi } from "./questionList/Question10Haishi";
import { Question11Haishi } from "./questionList/Question11Haishi";
import { Question12Haishi } from "./questionList/Question12Haishi";
import { Question13Haishi } from "./questionList/Question13Haishi";
import { Question14Haishi } from "./questionList/Question14Haishi";
import { Question15Haishi } from "./questionList/Question15Haishi";
import { Question16Haishi } from "./questionList/Question16Haishi";
import { Question17Haishi } from "./questionList/Question17Haishi";
import { Question18Haishi } from "./questionList/Question18Haishi";
import { Question19Haishi } from "./questionList/Question19Haishi";
import { Question20Haishi } from "./questionList/Question20Haishi";
import { Question21Haishi } from "./questionList/Question21Haishi";
import { Question22Haishi } from "./questionList/Question22Haishi";

//答えの配列をインポート
import { Question1Answer } from "./questionList/Question1Answer";
import { Question2Answer } from "./questionList/Question2Answer";
import { Question3Answer } from "./questionList/Question3Answer";
import { Question4Answer } from "./questionList/Question4Answer ";
import { Question5Answer } from "./questionList/Question5Answer";
import { Question6Answer } from "./questionList/Question6Answer";
import { Question7Answer } from "./questionList/Question7Answer";
import { Question8Answer } from "./questionList/Question8Answer";
import { Question9Answer } from "./questionList/Question9Answer";
import { Question10Answer } from "./questionList/Question10Answer";
import { Question11Answer } from "./questionList/Question11Answer";
import { Question12Answer } from "./questionList/Question12Answer";
import { Question13Answer } from "./questionList/Question13Answer";
import { Question14Answer } from "./questionList/Question14Answer";
import { Question15Answer } from "./questionList/Question15Answer";
import { Question16Answer } from "./questionList/Question16Answer";
import { Question17Answer } from "./questionList/Question17Answer";
import { Question18Answer } from "./questionList/Question18Answer";
import { Question19Answer } from "./questionList/Question19Answer";
import { Question20Answer } from "./questionList/Question20Answer";
import { Question21Answer } from "./questionList/Question21Answer";
import { Question22Answer } from "./questionList/Question22Answer";

import { QuestionAnswerButton } from "./QuestionAnswerButton";

//react-beautifu-dndの影響でSSRを回避するためにdinamicImportする。
import dynamic from "next/dynamic";

const CreateQuestion = dynamic(() => import("./CreateQuestion"), {
  ssr: false,
});

export const QuestionLayout = () => {
  return (
    <>
      <Stack spacing={10} ml={{ base: 2, md: 5, lg: 20 }}>
        <Text fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }} mt={10}>
          覚えておくべき基本多面構成
        </Text>
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
        <CreateQuestion haishi={Question4Haishi} number={4} title={"最強4面"} />
        <Box>
          <QuestionAnswerButton answer={Question4Answer} />
        </Box>
        <CreateQuestion haishi={Question5Haishi} number={5} title={"秀才4面"} />
        <Box>
          <QuestionAnswerButton answer={Question5Answer} />
        </Box>
        <CreateQuestion
          haishi={Question6Haishi}
          number={6}
          title={"子持ち3面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question6Answer} />
        </Box>
        <CreateQuestion
          haishi={Question7Haishi}
          number={7}
          title={"シャボの皮を被った4面(略してシャボ皮)"}
        />
        <Box>
          <QuestionAnswerButton answer={Question7Answer} />
        </Box>
        <CreateQuestion
          haishi={Question8Haishi}
          number={8}
          title={"意識高い系3面待ち"}
        />
        <Box>
          <QuestionAnswerButton answer={Question8Answer} />
        </Box>
        <CreateQuestion
          haishi={Question9Haishi}
          number={9}
          title={"ヘラクレス5面待ち"}
        />
        <Box>
          <QuestionAnswerButton answer={Question9Answer} />
        </Box>
        <CreateQuestion
          haishi={Question10Haishi}
          number={10}
          title={"津軽海峡2面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question10Answer} />
        </Box>
        <CreateQuestion
          haishi={Question11Haishi}
          number={11}
          title={"鳴門海峡3面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question11Answer} />
        </Box>
        <CreateQuestion
          haishi={Question12Haishi}
          number={12}
          title={"対馬海峡3面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question12Answer} />
        </Box>
        <CreateQuestion
          haishi={Question13Haishi}
          number={13}
          title={"幸せのサンドイッチ5面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question13Answer} />
        </Box>
        <CreateQuestion
          haishi={Question14Haishi}
          number={14}
          title={"幸せのハンバーガー3面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question14Answer} />
        </Box>
        <CreateQuestion
          haishi={Question15Haishi}
          number={15}
          title={"満員電車4面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question15Answer} />
        </Box>
        <CreateQuestion
          haishi={Question16Haishi}
          number={16}
          title={"問題児3面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question16Answer} />
        </Box>
        <CreateQuestion
          haishi={Question17Haishi}
          number={17}
          title={"問題児4面亜子"}
        />
        <Box>
          <QuestionAnswerButton answer={Question17Answer} />
        </Box>
        <CreateQuestion
          haishi={Question18Haishi}
          number={18}
          title={"問題児4面延雄"}
        />
        <Box>
          <QuestionAnswerButton answer={Question18Answer} />
        </Box>
        <CreateQuestion
          haishi={Question19Haishi}
          number={19}
          title={"意識高い4面(意識高い系3面が進化)"}
        />
        <Box>
          <QuestionAnswerButton answer={Question19Answer} />
        </Box>
        <CreateQuestion
          haishi={Question20Haishi}
          number={20}
          title={"万能5面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question20Answer} />
        </Box>
        <CreateQuestion
          haishi={Question21Haishi}
          number={21}
          title={"奇行種3面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question21Answer} />
        </Box>
        <CreateQuestion
          haishi={Question22Haishi}
          number={22}
          title={"彼方の両面シャボ4面"}
        />
        <Box>
          <QuestionAnswerButton answer={Question22Answer} />
        </Box>
      </Stack>
    </>
  );
};
