import React from "react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

import { Box, Flex, Text, Grid } from "atoms";
import BorderBottom from "CommonComponents/BorderBottom/BorderBottom";
import SubHeading from "CommonComponents/SubHeading/SubHeading";

const OrderSummarySection = () => {
  return (
    <>
      <Formik initialValues={{ coupon: "" }}>
        {({}) => {
          return (
            <>
              <Form>
                <Box
                  background={{ xs: "#ffffff", lg: "#E5E5E5" }}
                  mt={{ xs: "27px", lg: "unset" }}
                >
                  <Box
                    pl={{ xs: "10px", lg: "30px" }}
                    pr={{ xs: "10px", lg: "54px" }}
                    pt={{ xs: "unset", lg: "43px" }}
                    pb={{ xs: "", lg: "81px" }}
                  >
                    <Flex>
                      <Text
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="18px"
                        color="#665F60"
                        mb="0.8rem"
                        textTransform="uppercase"
                      >
                        Order Summary
                        <span
                          style={{
                            textAlign: "center",
                            fontSize: "9px",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            color: "#4863ED",
                            marginLeft: "11px",
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </span>
                      </Text>
                    </Flex>
                    <BorderBottom display={{ xs: "none", lg: "block" }} />
                    <Box
                      borderRadius={{ xs: "18px", lg: "unset" }}
                      boxShadow={{
                        xs: "-3px 4px 11px rgba(0, 0, 0, 0.18)",
                        lg: "unset",
                      }}
                    >
                      <Box
                        pt={{ xs: "18px", lg: "42px" }}
                        pb={{ xs: "20px", lg: "39px" }}
                        pl={{ xs: "17px", lg: "22px" }}
                        pr={{ xs: "29px", lg: "unset" }}
                      >
                        <Grid gridTemplateColumns="79px 1fr" gridGap="15px">
                          <Box
                            backgroundImage="url(/images/rectangle-border.svg)"
                            width="80px"
                            height="81px"
                            backgroundRepeat="no-repeat"
                          >
                            <Image
                              src="/images/person-image.svg"
                              alt="person-image"
                              width={79}
                              height={80}
                            />
                          </Box>
                          <Box>
                            <Flex mt="5px" mb="17px">
                              <Text
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="22px"
                                color="#665F60"
                                mr="15px"
                                textTransform="uppercase"
                              >
                                Ella . H
                              </Text>
                              <Flex mr="16px" alignItems="center" pt="1px">
                                <Image
                                  src="/images/tick.svg"
                                  alt="tick"
                                  width={21}
                                  height={21}
                                />
                                <Box
                                  zIndex={1}
                                  position="absolute"
                                  left="7px"
                                  bottom="6px"
                                >
                                  <Image
                                    src="/images/stroke.svg"
                                    alt="stroke"
                                    width={14}
                                    height={12}
                                  />
                                </Box>
                              </Flex>

                              <Image
                                src="/images/united-kingdom.svg"
                                alt="united-kingdom"
                                width={19}
                                height={21}
                              />
                            </Flex>
                            <Box>
                              <Flex alignItems="start">
                                <Box mr="15px">
                                  <Image
                                    src="/images/degree-cap.svg"
                                    alt="degree-cap"
                                    width={22}
                                    height={20}
                                  />
                                </Box>
                                <Text
                                  fontFamily="Poppins"
                                  fontSize="16px"
                                  color="#474747"
                                >
                                  English
                                </Text>
                              </Flex>
                            </Box>
                          </Box>
                        </Grid>
                      </Box>
                      <Box
                        pl={{ xs: "16px", lg: "unset" }}
                        pr={{ xs: "30px", lg: "unset" }}
                      >
                        <BorderBottom />
                      </Box>
                      <Box
                        pt={{ xs: "19px", lg: "33px" }}
                        pb={{ xs: "19px", lg: "36px" }}
                        pl={{ xs: "17px", lg: "22px" }}
                      >
                        <SubHeading
                          text="Date and Time"
                          fontSize="14px"
                          color="#8C8C8C"
                          mb="5px"
                        />
                        <SubHeading
                          text="Friday, February 4, 18:30"
                          fontSize="18px"
                          color="#5B5B5B"
                        />
                        <SubHeading
                          text="GMT +5:30"
                          fontSize="14px"
                          color="#8C8C8C"
                        />
                      </Box>
                      <Box
                        pl={{ xs: "16px", lg: "unset" }}
                        pr={{ xs: "30px", lg: "unset" }}
                      >
                        <BorderBottom />
                      </Box>
                      <Flex
                        py={{ xs: "15px", lg: "15px" }}
                        pl={{ xs: "38px", lg: "22px" }}
                        pr={{ xs: "49px", lg: "unset" }}
                      >
                        <SubHeading
                          text="Apply Coupon"
                          fontSize="13px"
                          color="#6B6B6B"
                        />
                        <Box
                          ml="auto"
                          borderRadius="6px"
                          background={{ xs: "#F5F5F5", lg: "#ffffff" }}
                        >
                          <Field
                            type="text"
                            id="coupon"
                            name="coupon"
                            className="coupon-input"
                          />
                        </Box>
                      </Flex>
                      <Box
                        pl={{ xs: "16px", lg: "unset" }}
                        pr={{ xs: "30px", lg: "unset" }}
                      >
                        <BorderBottom />
                      </Box>
                      <Box
                        py={{ xs: "39px", lg: "39px" }}
                        pl={{ xs: "38px", lg: "22px" }}
                        pr={{ xs: "42px", lg: "unset" }}
                      >
                        <Flex mb="10px">
                          <Box>
                            <SubHeading
                              text="Service details"
                              fontSize="13px"
                              color="#8C8C8C"
                              fontWeight="500"
                            />
                          </Box>
                          <Box ml="auto">
                            <SubHeading
                              text="Price per hour"
                              fontSize="13px"
                              color="#8C8C8C"
                              fontWeight="500"
                            />
                          </Box>
                        </Flex>
                        <Flex mb="4px">
                          <Box>
                            <SubHeading
                              text="1 hour lesson"
                              fontSize="14px"
                              color="#8C8C8C"
                              fontWeight="500"
                            />
                          </Box>
                          <Box ml="auto">
                            <SubHeading
                              text="???3,000.80"
                              fontSize="13px"
                              color="#6B6B6B"
                              fontWeight="600"
                            />
                          </Box>
                        </Flex>
                        <Flex mb="4px">
                          <Box>
                            <SubHeading
                              text="Transaction fee"
                              fontSize="14px"
                              color="#8C8C8C"
                              fontWeight="500"
                            />
                          </Box>
                          <Box ml="auto">
                            <SubHeading
                              text="???22.51"
                              fontSize="13px"
                              color="#6B6B6B"
                              fontWeight="600"
                            />
                          </Box>
                        </Flex>
                        <Flex>
                          <Box>
                            <SubHeading
                              text="Lesson cancellation"
                              fontSize="14px"
                              color="#8C8C8C"
                              fontWeight="500"
                            />
                          </Box>
                          <Box ml="auto">
                            <SubHeading
                              text="Free"
                              fontSize="13px"
                              color="#15C11C"
                            />
                          </Box>
                        </Flex>
                      </Box>
                      <Box
                        pl={{ xs: "16px", lg: "unset" }}
                        pr={{ xs: "30px", lg: "unset" }}
                      >
                        <BorderBottom />
                      </Box>
                      <Box
                        pt={{ xs: "12px", lg: "11px" }}
                        pl={{ xs: "38px", lg: "22px" }}
                        pr={{ xs: "36px", lg: "unset" }}
                        mb={{ xs: "31px", lg: "48px" }}
                      >
                        <Flex>
                          <Box>
                            <SubHeading
                              text="Total"
                              fontSize="13px"
                              color="#8C8C8C"
                            />
                          </Box>
                          <Box ml="auto">
                            <SubHeading
                              text="Rs: 3496.00"
                              fontSize="13px"
                              color="#6B6B6B"
                              fontWeight="600"
                            />
                          </Box>
                        </Flex>
                      </Box>

                      <Flex
                        pl={{ xs: "29px", lg: "22px" }}
                        pr={{ xs: "29px", lg: "unset" }}
                        pb={{ xs: "32px", lg: "unset" }}
                      >
                        <Box mr="17px" alignItems="start" mt="-4px">
                          <Image
                            src="/images/complete-icon.svg"
                            alt="complete-icon"
                            width={13.5}
                            height={13.5}
                          />
                        </Box>
                        <Text
                          fontFamily="Poppins"
                          fontWeight="400"
                          fontSize="13px"
                          color="#6B6B6B"
                        >
                          I want a{" "}
                          <span
                            style={{
                              fontSize: "13px",
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              color: "rgba(21, 193, 28, 1)",
                            }}
                          >
                            free lesson
                          </span>
                          or a refund if the tutor doesn???t meet my needs
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default OrderSummarySection;
