import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

import { Box, Flex, Text, Grid } from "atoms";
import PaymentTitle from "CommonComponents/PaymentTitle/PaymentTitle";
import CardDetails from "Component/CardDetails/CardDetails";
import OrderSummarySection from "Component/OrderSummarySection/OrderSummarySection";
import SaveCardSection from "Component/SaveCardSection/SaveCardSection";

const data = [
  { id: "0", text: "Credit/Debit Card" },
  { id: "2", text: "Net Banking" },
  { id: "3", text: "UPI" },
];

const PaymentSection = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Grid gridTemplateColumns={{xs:"1fr", lg:"2.3fr 1fr"}}>
        <Box pl="111px" pr="204px" pt="46px" pb="62px">
          <Flex flex flexDirection="row" mb="10px">
            <Box onClick={() => setSelected(true)}>
              <PaymentTitle text="Personal Details" color="#848484" />
            </Box>
            <Flex alignItems="center" ml="178px" mr="17px">
              <Flex
                width="6px"
                height="6px"
                borderRadius="50%"
                background="#FC4D6D"
              />
            </Flex>
            <Box onClick={() => setSelected(true)}>
              <PaymentTitle text="Payment Section" color="#848484" />
            </Box>
          </Flex>
          <Box
            borderBottom="2px solid"
            borderColor="#848484"
            width="448px"
            mb="31px"
          />
          <Text
            fontFamily="Poppins"
            fontWeight="600"
            fontSize="18px"
            color="#665F60"
            textTransform="uppercase"
            mb="12px"
          >
            Payment Section
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight="600"
            fontSize="14px"
            color="#A9A9A9"
            textTransform="uppercase"
            mb="12px"
          >
            Saved Cards{" "}
            <span
              style={{
                textAlign: "center",
                fontSize: "9px",
                fontFamily: "Poppins",
                fontWeight: "500",
                color: "#4863ED",
              }}
            >
              Edit
            </span>
          </Text>
          {/* cards image section  */}
          <SaveCardSection />
          <Box>
            <Text
              fontFamily="Poppins"
              fontWeight="600"
              fontSize="14px"
              color=" #A9A9A9"
              mb="25px"
            >
              Other Payent Methods
            </Text>

            <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="34px" mb="38px">
              {data.map((item) => {
                return (
                  <>
                    <Flex
                      key={item.id}
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      height="42px"
                      border="2px solid"
                      borderColor="#BCBCBC"
                      borderRadius="13px"
                    >
                      <Text
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="14px"
                        color="#383838"
                      >
                        {item.text}
                      </Text>
                    </Flex>
                  </>
                );
              })}
            </Grid>
            {/* CardDetails */}
            <Box mb="97px">
              <CardDetails />
            </Box>

            <Box
              borderBottom="1px solid"
              borderColor="rgba(172, 172, 172, 0.5)"
              width="100%"
            />
          </Box>
          <Flex alignItems="center" pt="23px">
            <Box>
              <Flex>
                <Image
                  src="/images/arrow-left.png"
                  alt="arrow-left"
                  width={25}
                  height={9}
                />
                <Text
                  fontFamily="Poppins"
                  fontWeight="600"
                  fontSize="14px"
                  color="#3A59F3"
                  ml="10px"
                >
                  Back To Personal Details
                </Text>
              </Flex>
            </Box>
            <Flex
              ml="auto"
              width="173px"
              height="42px"
              background="linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)"
              borderRadius="61px"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontFamily="Poppins"
                fontWeight="700"
                fontSize=""
                color="#FFFFFF"
                textTransform="capitalize"
                textAlign="center"
              >
                MAKE PAYMENT
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box gridColumn={{xs:1, lg:"unset"}} gridRow={{xs:1, lg:"unset"}}>
          <OrderSummarySection />
        </Box>
      </Grid>
    </>
  );
};
export default PaymentSection;
