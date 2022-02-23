import React, { useState, useCallback, memo } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type {
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from "react-beautiful-dnd";
import { Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  id: string;
  name: string;
  src: string;
  number: number;
  title: string;
};

const CreateQuestion = (props: any) => {
  //↑をany以外にする方法を思いつけば修正
  //porpsで牌姿と何問目かを受け取る
  const { haishi, number, title } = props;
  const [state, setState] = useState<Array<Props>>(haishi);
  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const newState = [...state];

      const [removed] = newState.splice(result.source.index, 1);
      newState.splice(result.destination.index, 0, removed);
      setState(newState);
    },
    [state]
  );

  return (
    <>
      <Text fontSize={"2xl"} mt={10} mb={5} width={"100vh"}>
        {number}.{title}
      </Text>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="items" direction="horizontal">
          {(provided: DroppableProvided) => (
            <Stack
              direction={"row"}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.map(({ id, name, src }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided: DraggableProvided) => (
                      <Image
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        src={src}
                        alt={name}
                        boxSize={{ base: 20, md: "auto", lg: "auto" }}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Stack>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
export default memo(CreateQuestion);
