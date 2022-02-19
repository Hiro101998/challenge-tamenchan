import { Box, Flex, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { TehaiSample1 } from "./TehaiSample1";
import { TehaiSample2 } from "./TehaiSample2";
import { Sample1 } from "./TehaiSample1";

export const Layout: FC = () => {
  return (
    <Box>
      {/* {Sample1.map((item) => {
        return (
          <Stack direction="row" key={item.id}>
            <Image src={item.src} alt={item.name} width={30} height={30} />
          </Stack>
        );
      })} */}
      <Stack spacing={100}>
        <TehaiSample1 />
        <TehaiSample2 />
      </Stack>
    </Box>
  );
};
