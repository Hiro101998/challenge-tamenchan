import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Question2Answer } from "./Question2Answer";

export const Question2AnswerButton = () => {
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
        {Question2Answer.map((item) => {
          if (answerFlg) {
            return (
              <Image
                key={item.id}
                src={item.src}
                alt={item.name}
                boxSize={{ base: 9, md: 51.5, lg: "auto" }}
              />
            );
          }
        })}
      </Stack>
    </>
  );
};
