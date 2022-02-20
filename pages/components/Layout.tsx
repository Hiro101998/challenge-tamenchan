import { Box, Flex, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { FC } from "react";

import dynamic from "next/dynamic";

export const Layout: FC = () => {
  return (
    <Box>
      {/* {Sample1.map((item) => {
        return (
          <Stack direction="row" key={item.id}>
            <Image src={item.src} alt={item.name} width={30} height={30} />
          </Stack>
        );
      })}
      <Stack spacing={10}>
        <TehaiSample1 />
        <TehaiSample2 />
      </Stack> */}
    </Box>
  );
};
