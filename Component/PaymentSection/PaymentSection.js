import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

import { Box, Flex, Text, Grid } from "atoms";
import PaymentTitle from "CommonComponents/PaymentTitle/PaymentTitle";
import CardDetails from "Component/CardDetails/CardDetails";
import OrderSummarySection from "Component/OrderSummarySection/OrderSummarySection";
import SaveCardSection from "Component/SaveCardSection/SaveCardSection";
import BorderBottom from "CommonComponents/BorderBottom/BorderBottom";

const data = [
  { id: "0", text: "Credit/Debit Card" },
  { id: "1", text: "Net Banking" },
  { id: "2", text: "UPI" },
];

const color = ["#848484", "#FC4D6D"];

const PaymentSection = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const [card, setCard] = useState(0);
  return (
    <>
      <Grid gridTemplateColumns={{ xs: "1fr", lg: "2.3fr 1fr" }}>
        <Box
          boxShadow={{ xs: "-3px 4px 11px rgba(0, 0, 0, 0.18)", lg: "unset" }}
          borderRadius={{ xs: "18px", lg: "unset" }}
          mx={{ xs: "10px", lg: "unset" }}
          my={{ xs: "31px", lg: "unset" }}
        >
          <Box
            pl={{ lg: "111px" }}
            pr={{ lg: "204px" }}
            pt={{ xs: "25px", lg: "46px" }}
            pb={{ xs: "28px", lg: "62px" }}
          >
            <Box display={{ xs: "none", lg: "block" }}>
              <Flex flex flexDirection="row" mb="10px">
                <Box onClick={() => handleSelect(1)}>
                  <Text
                    fontFamily="Poppins"
                    fontWeight="600"
                    fontSize="14px"
                    color={selected === 1 ? "#FC4D6D" : "#848484"}
                    cursor="pointer"
                  >
                    Personal Details
                  </Text>
                </Box>
                {selected === 1 && (
                  <Box
                    borderBottom="2px solid"
                    borderColor="#FC4D6D"
                    width="183px"
                    mb="31px"
                    position="absolute"
                    bottom={0}
                    top={31}
                    left={0}
                    zIndex={1}
                  />
                )}
                <Flex alignItems="center" ml="178px" mr="17px">
                  <Flex
                    width="6px"
                    height="6px"
                    borderRadius="50%"
                    background="#FC4D6D"
                  />
                </Flex>
                <Box onClick={() => handleSelect(2)}>
                  <Text
                    fontFamily="Poppins"
                    fontWeight="600"
                    fontSize="14px"
                    color={selected === 2 ? "#FC4D6D" : "#848484"}
                    cursor="pointer"
                  >
                    Payment Section
                  </Text>
                </Box>
                {selected === 2 && (
                  <Box
                    borderBottom="2px solid"
                    borderColor="#FC4D6D"
                    width="183px"
                    mb="31px"
                    position="absolute"
                    bottom={0}
                    top={31}
                    right={296}
                    zIndex={1}
                  />
                )}
              </Flex>
              <Box
                borderBottom="2px solid"
                borderColor="#848484"
                width="448px"
                mb="31px"
              />
            </Box>
            <Box px={{ xs: "9px", lg: "unset" }}>
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
            </Box>
            <Box display={{ xs: "block", lg: "none" }} mb="19px">
              <BorderBottom />
            </Box>
            <Text
              fontFamily="Poppins"
              fontWeight="600"
              fontSize="14px"
              color="#A9A9A9"
              textTransform="uppercase"
              mb={{ xs: "24px", lg: "12px" }}
              px={{ xs: "24px", lg: "unset" }}
            >
              Saved Cards{" "}
              <span
                style={{
                  textAlign: "center",
                  fontSize: "9px",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  color: "#4863ED",
                  cursor:"pointer"
                }}
              >
                Edit
              </span>
            </Text>
            {/* cards image section  */}
            <Box px={{ xs: "0px", lg: "unset" }}>
              <SaveCardSection />
            </Box>
            <Box>
              <Text
                fontFamily="Poppins"
                fontWeight="600"
                fontSize="14px"
                color=" #A9A9A9"
                mb={{ xs: "18px", lg: "25px" }}
                px={{ xs: "19px", lg: "unset" }}
              >
                Other Payent Methods
              </Text>

              <Grid
                gridTemplateColumns={{
                  xs: "repeat(3, auto)",
                  lg: "repeat(3, 1fr)",
                }}
                gridGap={{ xs: "7px", lg: "34px" }}
                mb={{ xs: "29px", lg: "38px" }}
                px={{ xs: "19px", lg: "unset" }}
              >
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
                        borderColor={card === item.id ? "#FC4D6D" : "#BCBCBC"}
                        borderRadius="13px"
                        onClick={() => setCard(item.id)}
                        cursor="pointer"
                      >
                        <Text
                          fontFamily="Poppins"
                          fontWeight="600"
                          fontSize={{ xs: "13px", lg: "14px" }}
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
              <Box mb={{ xs: "", lg: "97px" }} px={{ xs: "23px", lg: "unset" }}>
                <CardDetails />
              </Box>

              <Box
                display={{ xs: "none", lg: "block" }}
                borderBottom="1px solid"
                borderColor="rgba(172, 172, 172, 0.5)"
                width="100%"
              />
            </Box>
            <Flex
              alignItems="center"
              pt={{ xs: "46px", lg: "23px" }}
              justifyContent={{ xs: "center", lg: "unset" }}
            >
              <Box display={{ xs: "none", lg: "block" }}>
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
                ml={{ lg: "auto" }}
                width="173px"
                height="42px"
                background="linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)"
                borderRadius="61px"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
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
        </Box>
        <Box
          gridColumn={{ xs: 1, lg: "unset" }}
          gridRow={{ xs: 1, lg: "unset" }}
        >
          <OrderSummarySection />
        </Box>
      </Grid>
    </>
  );
};
export default PaymentSection;
