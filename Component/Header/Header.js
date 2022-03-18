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
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Header;
