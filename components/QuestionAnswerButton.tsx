import { Button, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

type AnswerData = {
  id: string;
  name: string;
  src: string;
};

type Props = {
  answer: Array<AnswerData>;
};
export const QuestionAnswerButton = (props: Props) => {
  const { answer } = props;
  const [answerFlg, setAnswerFlg] = useState(false);
  const onClickAnswer = () => {
    if (answerFlg === false) {
      setAnswerFlg(true);
    } else {
      setAnswerFlg(false);
    }
  };
  return (
    <>
      <Button onClick={onClickAnswer} mb={10} _hover={{ bg: "blue.300" }}>
        答えを確認する。
      </Button>
      <Stack direction={"row"}>
        {answer.map((item: AnswerData) => {
          if (answerFlg) {
            return (
              <Image
                key={item.id}
                src={item.src}
                alt={item.name}
                boxSize={{ base: 16, md: 51.5, lg: "auto" }}
              />
            );
          }
        })}
      </Stack>
    </>
  );
};
