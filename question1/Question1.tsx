import React, { useState, useCallback, FC } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type {
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from "react-beautiful-dnd";
import { Box, Button, Image, Stack } from "@chakra-ui/react";
import { Question1Haishi } from "./Question1Haishi";

export const Question1Dnd = () => {
  const [state, setState] = useState(Question1Haishi);
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
                      boxSize={{ base: 9, md: 51.5, lg: "auto" }}
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
  );
};
