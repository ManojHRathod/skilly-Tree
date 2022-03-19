import React from "react";

import { Box } from "atoms";

const BorderBottom = ({ display }) => {
  return (
    <Box
      display={display}
      width="100%"
      borderBottom="2px solid"
      borderColor="#DDDDDD"
    />
  );
};

export default BorderBottom;
