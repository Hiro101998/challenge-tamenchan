import React, { FC } from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
// import Image from "next/image";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Sample1 = [
  {
    id: "man1-1",
    name: "一萬",
    src: "/pai-images/man1.png",
  },
  {
    id: "man2-1",
    name: "一萬",
    src: "/pai-images/man2.png",
  },
  {
    id: "man3-1",
    name: "三萬",
    src: "/pai-images/man3.png",
  },
  {
    id: "man4-1",
    name: "四萬",
    src: "/pai-images/man4.png",
  },
  {
    id: "man5-1",
    name: "五萬",
    src: "/pai-images/man5.png",
  },
  {
    id: "man6-1",
    name: "六萬",
    src: "/pai-images/man6.png",
  },
  {
    id: "man7-1",
    name: "七萬",
    src: "/pai-images/man7.png",
  },
  {
    id: "man8-1",
    name: "八萬",
    src: "/pai-images/man8.png",
  },
  {
    id: "man9-1",
    name: "九萬",
    src: "/pai-images/man9.png",
  },
  {
    id: "pin2-1",
    name: "2ピン",
    src: "/pai-images/pin2.png",
  },
  {
    id: "pin3-1",
    name: "3ピン",
    src: "/pai-images/pin3.png",
  },
  {
    id: "pin3-2",
    name: "3ピン",
    src: "/pai-images/pin3.png",
  },
  {
    id: "pin3-3",
    name: "3ピン",
    src: "/pai-images/pin3.png",
  },
];

export const TehaiSample1: FC = () => {
  return (
    <>
      <Text>練習問題１</Text>
      <Stack direction={"row"}>
        {Sample1.map((item) => {
          return <Image key={item.id} src={item.src} alt={item.name} />;
        })}
      </Stack>
    </>
  );
};
