import React, { useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type {
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from "react-beautiful-dnd";
import { Sample1 } from "./sample1";
import { Box, Image, Stack } from "@chakra-ui/react";

function BeautifulDndExample() {
  const [state, setState] = useState(Sample1);
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
            style={{ listStyleType: "none" }}
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
}

export const Example = () => {
  return <BeautifulDndExample />;
};
