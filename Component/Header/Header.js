import React from "react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

import { Box, Flex, Grid, Text } from "atoms";
import HeadingText from "CommonComponents/HeadingText/HeadingText";

const Header = () => {
  return (
    <>
      <Formik initialValues={{ searchTerm: "" }}>
        {({ values }) => {
          console.log("value", values);
          return (
            <>
              <Form>
                <Box display={{ xs: "none", lg: "block" }}>
                  <Flex
                    alignItems="center"
                    height="100px"
                    width="100%"
                    pl="72px"
                    pr="75px"
                    py="1.9rem"
                    boxShadow="0px 4px 11px rgba(0, 0, 0, 0.14)"
                  >
                    <Box>
                      <Image
                        src="/images/skilly-tree-logo.svg"
                        alt="skilly-tree-logo"
                        width={240}
                        height={62}
                      />
                    </Box>
                    <Box ml="auto">
                      <Flex
                        border="2px solid"
                        borderColor="rgba(167, 167, 167, 0.56)"
                        borderRadius="54px"
                        alignItems="center"
                        height="55px"
                        width="325px"
                        px="25px"
                      >
                        <Field
                          type="text"
                          id="searchTerm"
                          name="searchTerm"
                          placeholder="SEARCH A SKILL"
                          className="search-input"
                        />
                        <Flex alignItems="center">
                          <Image
                            src="/images/search-icon.svg"
                            alt="search-icon"
                            width={24}
                            height={24}
                          />
                        </Flex>
                      </Flex>
                    </Box>
                    <Flex alignItems="center" ml="55px">
                      <Image
                        src="/images/menu-icon.svg"
                        alt="menu-icon"
                        width={44}
                        height={44}
                      />
                    </Flex>
                    <Flex alignItems="center" ml="60px">
                      <Text
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="22px"
                        color="#1F1F1F"
                        textTransform="capitalize"
                      >
                        Log In
                      </Text>
                    </Flex>
                    <Flex
                      ml="37px"
                      alignItems="center"
                      justifyContent="center"
                      width="148px"
                      height="56px"
                      background="linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)"
                      borderRadius="61px"
                    >
                      <Text
                        fontFamily="Poppins"
                        fontWeight="700"
                        fontSize="22"
                        color="#FFFFFF"
                        textAlign="center"
                      >
                        Sign In
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Form>
              {/* mobile responsive */}
              <Box
                display={{ xs: "block", lg: "none" }}
                background="#FFFDFD"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.08)"
                width="100%"
              >
                <Grid
                  gridAutoFlow="column"
                  px="41px"
                  justifyContent="space-between"
                  alignItems="center"
                  height="44px"
                >
                  <Text
                    fontFamily="Poppins"
                    fontWeight="500"
                    fontSize="15px"
                    color="#1A1A1A"
                  >
                    9:41
                  </Text>
                  <Image
                    src="/images/status-bar.svg"
                    alt="status-bar"
                    width={63}
                    height={11}
                  />
                </Grid>
                <Grid
                  gridAutoFlow="column"
                  px="26px"
                  justifyContent="space-between"
                  alignItems="center"
                  height="68px"
                >
                  <Image
                    src="/images/menu-icon-mobile.svg"
                    alt="menu-icon-mobile"
                    width={30}
                    height={19}
                  />

                  <Image
                    src="/images/skilly-icon-mobile.svg"
                    alt="skilly-icon-mobile"
                    width={134}
                    height={34}
                  />
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    width="72px"
                    height="28px"
                    background="linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)"
                    borderRadius="61px"
                  >
                    <Text
                      fontFamily="Poppins"
                      fontWeight="500"
                      fontSize="13px"
                      color="#FFFFFF"
                      textAlign="center"
                    >
                      Sign In
                    </Text>
                  </Flex>
                </Grid>
              </Box>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Header;
