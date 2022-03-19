import React from "react";

import { Text } from "atoms";

const PaymentTitle = ({ text, color, selected }) => {
  return (
    <>
      <Text fontFamily="Poppins" fontWeight="600" fontSize="14px" color={selected === 1 || 2 ? color[1] : color[0]}>
        {text}
      </Text>
    </>
  );
};

export default PaymentTitle;
