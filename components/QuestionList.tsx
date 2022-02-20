import { Box } from "@chakra-ui/react";
import React from "react";
import { Question1Layout } from "./question/question1/Question1Layout";
import { Question2Layout } from "./question/question2/Question2Layout";

const QuestionList = () => {
  return (
    <Box>
      <Question1Layout />
      <Question2Layout />
    </Box>
  );
};

export default QuestionList;
