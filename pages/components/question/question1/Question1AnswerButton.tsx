import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Question1Answer } from "./Question1Answer";

export const Question1AnswerButton = () => {
  const [answerFlg, setAnswerFlg] = useState(false);
  const onClickAnswer = () => {
    setAnswerFlg(true);
  };
  return (
    <>
      <Button onClick={onClickAnswer}>答えを確認する。</Button>
      <Stack direction={"row"}>
        {Question1Answer.map((item) => {
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
