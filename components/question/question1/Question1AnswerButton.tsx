import { Box, Button, color, Image, Stack, Text } from "@chakra-ui/react";
import { builtinModules } from "module";
import React, { useState } from "react";
import { Question1Answer } from "./Question1Answer";

export const Question1AnswerButton = () => {
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
      <Button onClick={onClickAnswer} _hover={{ bg: "blue.300" }} mb={10}>
        答えを確認する。
      </Button>
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
