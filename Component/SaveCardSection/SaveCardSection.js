import React from "react";
import Image from "next/image";

import { Box, Flex, Text, Grid } from "atoms";

const SaveCardSection = () => {
  return (
    <>
      <Grid justifyContent={{ xs: "center", lg: "unset" }}>
        <Grid
          gridTemplateColumns={{ xs: "180px 180px", lg: "215px 215px" }}
          gridGap={{ xs: "10px", lg: "23px" }}
          height={{ lg: "108px" }}
          mb={{ xs: "16px", lg: "30px" }}
          px={{ xs: "0px", lg: "unset" }}
        >
          <Box>
            <Box
              backgroundImage="url(/images/card-circle-one.svg)"
              backgroundRepeat="no-repeat"
              width="77px"
              height="77px"
              position="absolute"
              right={0}
              top={0}
            />
            <Box
              backgroundImage="url(/images/grid-one-circle.svg)"
              backgroundRepeat="no-repeat"
              width="88px"
              height="88px"
              position="absolute"
              left={0}
              bottom={0}
            />
            <Flex pl="8px" pr="3px" pt="3px" pb="5px">
              <Flex
                borderRadius="10px"
                border="1px solid"
                borderColor="#FFFFFF"
                width="215px"
                height="105px"
                className="blur-effect"
                boxShadow="-4px -4px 11px rgba(95, 95, 95, 0.25), 4px 4px 7px rgba(62, 62, 62, 0.17)"
                alignItems="center"
                px="14px"
              >
                <Grid
                  gridTemplateColumns="repeat(3, auto)"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                >
                  <Image
                    src="/images/white-logo.svg"
                    alt="white-logo"
                    width={18}
                    height={18}
                  />

                  <Image
                    src="/images/number-image.svg"
                    alt="number-image"
                    width={89}
                    height={8}
                  />

                  <Image
                    src="/images/visa.svg"
                    alt="number-image"
                    width={29}
                    height={9}
                  />
                </Grid>
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Box>
              <Box
                backgroundImage="url(/images/card-circle-one.svg)"
                backgroundRepeat="no-repeat"
                width="77px"
                height="77px"
                position="absolute"
                right={0}
              />
              <Box
                backgroundImage="url(/images/small-circle.svg)"
                backgroundRepeat="no-repeat"
                width="77px"
                height="77px"
                position="absolute"
                left={0}
                bottom={0}
              />
              <Flex pl="0" pr="3px" pt="3px" pb="5px">
                <Flex
                  borderRadius="10px"
                  border="1px solid"
                  borderColor="#FFFFFF"
                  width="215px"
                  height="105px"
                  className="blur-effect"
                  boxShadow="-4px -4px 11px rgba(95, 95, 95, 0.25), 4px 4px 7px rgba(62, 62, 62, 0.17)"
                  alignItems="center"
                  px="14px"
                >
                  <Grid
                    gridTemplateColumns="repeat(3, auto)"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                  >
                    <Image
                      src="/images/white-logo.svg"
                      alt="white-logo"
                      width={18}
                      height={18}
                    />

                    <Image
                      src="/images/number-image.svg"
                      alt="number-image"
                      width={89}
                      height={8}
                    />

                    <Image
                      src="/images/card-logo.svg"
                      alt="card-logo"
                      width={21}
                      height={14}
                    />
                  </Grid>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SaveCardSection;
