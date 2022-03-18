import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Image from "next/image";

import { Box, Flex, Text, Grid } from "atoms";
import InputLabel from "CommonComponents/InputLabel/InputLabel";

const CardDetails = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Formik
        initialValues={{ cardNumber: "", cardName: "", cvv: "", date: "" }}
      >
        {({ values }) => {
          return (
            <>
              <Form>
                <Grid gridTemplateColumns="1fr 1fr" gridGap="42px" mb="25px">
                  <Box>
                    <InputLabel text="Card Number" />
                    <Flex>
                      <Field
                        type="tel"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="xxxx xxxx xxxx xxxx"
                        maxlength="16"
                        className="inputField"
                        onClick={() => setSelected(true)}
                      />
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
                        selected === !false
                          ? "rgba(83, 109, 238, 1)"
                          : "#6A6A6A"
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
                      onClick={() => setSelected(true)}
                    />
                    <Box
                      borderBottom="2px solid"
                      borderColor={
                        selected === !false
                          ? "rgba(83, 109, 238, 1)"
                          : "#6A6A6A"
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
                          onClick={() => setSelected(true)}
                        />
                        <Box
                          borderBottom="2px solid"
                          borderColor={
                            selected === !false
                              ? "rgba(83, 109, 238, 1)"
                              : "#6A6A6A"
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
                            onClick={() => setSelected(true)}
                          />
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
                            selected === !false
                              ? "rgba(83, 109, 238, 1)"
                              : "#6A6A6A"
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
