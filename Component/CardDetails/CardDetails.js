import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Image from "next/image";
import * as Yup from "yup";

import { Box, Flex, Text, Grid } from "atoms";
import InputLabel from "CommonComponents/InputLabel/InputLabel";

const CardDetails = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  };

  // form validation
  const validationSchema = Yup.object({
    cardName: Yup.string()
      .required("Card name is required")
      .max(40, "Max 40 characters allowed"),
    cardNumber: Yup.string()
      .required("Card Number is required")
      .matches(/^4[0-9]{12}(?:[0-9]{3})?$/, "Enter correct number"),
    date: Yup.string()
      .required("expiry date is required")
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Enter Correct Date"),
    cvv: Yup.string()
      .required("CVV is required")
      .matches(/^[0-9]{3}$/, "Enter correct CVV"),
  });

  return (
    <>
      <Formik
        initialValues={{ cardNumber: "", cardName: "", cvv: "", date: "" }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched }) => {
          console.log("values", values);
          return (
            <>
              <Form>
                <Grid
                  gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr" }}
                  gridGap={{ xs: "23px", lg: "42px" }}
                  mb={{ xs: "", lg: "25px" }}
                >
                  <Box>
                    <InputLabel text="Card Number" />
                    <Flex>
                      <Field
                        type="tel"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="xxxx xxxx xxxx xxxx"
                        maxlength="19"
                        className="inputField"
                        onClick={() => handleSelect(1)}
                      />
                      {errors.cardNumber && touched.cardNumber && (
                        <Box position="absolute" top={4} left={0}>
                          <Text
                            fontFamily="Poppins"
                            fontWeight="500"
                            fontSize="12px"
                            color="#fa1d05"
                          >
                            {errors.cardNumber}
                          </Text>
                        </Box>
                      )}
                      <Box ml="auto">
                        <Image
                          src="/images/card-logo.svg"
                          alt="card-logo"
                          width={21}
                          height={14}
                        />
                      </Box>
                    </Flex>
                    <Box
                      borderBottom="2px solid"
                      borderColor={
                        selected === 1 ? "rgba(83, 109, 238, 1)" : "#6A6A6A"
                      }
                      width="100%"
                      mt="6px"
                    />
                  </Box>

                  <Box>
                    <InputLabel text="Card Name" />
                    <Field
                      type="text"
                      id="cardName"
                      name="cardName"
                      placeholder="ENTER YOUR NAME"
                      className="inputField"
                      onClick={() => handleSelect(2)}
                    />
                    {errors.cardName && touched.cardName && (
                      <Box position="absolute" top="55px" left={0}>
                        <Text
                          fontFamily="Poppins"
                          fontWeight="500"
                          fontSize="12px"
                          color="#fa1d05"
                        >
                          {errors.cardName}
                        </Text>
                      </Box>
                    )}
                    <Box
                      borderBottom="2px solid"
                      borderColor={
                        selected === 2 ? "rgba(83, 109, 238, 1)" : "#6A6A6A"
                      }
                      width="100%"
                      mt="6px"
                    />
                  </Box>

                  <Box>
                    <Grid gridTemplateColumns="1fr 1fr" gridGap="23px">
                      <Box>
                        <InputLabel text="Expiry Date" />
                        <Field
                          type="text"
                          id="date"
                          name="date"
                          placeholder="MM/YY"
                          className="date-field"
                          onClick={() => handleSelect(3)}
                        />
                        {errors.date && touched.date && (
                          <Box position="absolute" top="55px" left={0}>
                            <Text
                              fontFamily="Poppins"
                              fontWeight="500"
                              fontSize="12px"
                              color="#fa1d05"
                            >
                              {errors.date}
                            </Text>
                          </Box>
                        )}
                        <Box
                          borderBottom="2px solid"
                          borderColor={
                            selected === 3 ? "rgba(83, 109, 238, 1)" : "#6A6A6A"
                          }
                          width="100%"
                          mt="6px"
                        />
                      </Box>
                      <Box>
                        <InputLabel text="CVV" />
                        <Flex>
                          <Field
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="---"
                            className="cvv-field"
                            onClick={() => handleSelect(4)}
                          />
                          {errors.cvv && touched.cvv && (
                            <Box position="absolute" top={4} left={0}>
                              <Text
                                fontFamily="Poppins"
                                fontWeight="500"
                                fontSize="12px"
                                color="#fa1d05"
                              >
                                {errors.cvv}
                              </Text>
                            </Box>
                          )}
                          <Box ml="auto">
                            <Image
                              src="/images/alert-circle.svg"
                              alt="alert-circle"
                              width={16}
                              height={16}
                            />
                          </Box>
                        </Flex>
                        <Box
                          borderBottom="2px solid"
                          borderColor={
                            selected === 4 ? "rgba(83, 109, 238, 1)" : "#6A6A6A"
                          }
                          width="100%"
                          mt="6px"
                        />
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default CardDetails;
