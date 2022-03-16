import React from "react";

import { Box, Flex, Text, Grid } from "atoms";

const InputLabel = ({text}) => {
  return (
    <Text
      fontFamily="Poppins"
      fontWeight="500"
      fontSize="12px"
      color="#8B8B8B"
      mb="5px"
    >
      {text}
    </Text>
  );
};

export default InputLabel;
