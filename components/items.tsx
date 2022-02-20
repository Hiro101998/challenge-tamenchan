interface draggableCardProps {
  children: string;
}

export function DraggableCard({ children }: draggableCardProps) {
  return (
    <div
      style={{
        borderRadius: 4,
        width: "100px",
        height: "100px",
        border: "1px solid black",
        margin: "4px",
      }}
    >
      {children}
    </div>
  );
}

export const items = [
  {
    id: "1",
    content: <DraggableCard>item 1</DraggableCard>,
  },
  {
    id: "2",
    content: <DraggableCard>item 2</DraggableCard>,
  },
  {
    id: "3",
    content: <DraggableCard>item 3</DraggableCard>,
  },
];
