import React from "react";

import { Text } from "atoms";

const SubHeading = ({ text, fontSize, color, mb, fontWeight }) => {
  return (
    <Text fontFamily="Poppins" fontWeight={fontWeight} fontSize={fontSize} color={color} mb={mb}>
      {text}
    </Text>
  );
};

export default SubHeading;
