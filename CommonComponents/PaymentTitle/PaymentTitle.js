import React from "react";

import { Text } from "atoms";

const PaymentTitle = ({ text, color }) => {
  return (
    <>
      <Text fontFamily="Poppins" fontWeight="600" fontSize="14px" color={color}>
        {text}
      </Text>
    </>
  );
};

export default PaymentTitle;
