import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { Sample1 } from "./sample1";

type Sample1 = {
  id: string;
  name: string;
  src: string;
};
export const Haishi: FC = () => {
  return (
    <>
      {Sample1.map((item) => {
        return (
          <Image
            src={item.src}
            key={item.id}
            alt={item.name}
            width={100}
            height={100}
          />
        );
      })}
    </>
  );
};
