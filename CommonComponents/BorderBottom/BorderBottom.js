import React from 'react';

import { Box} from "atoms";

const BorderBottom  = ({display, pl, pr}) => {
  return (
   <Box
   display={display}
   width="100%"
   borderBottom="2px solid"
   borderColor="#DDDDDD"
   pl={{xs:{pl}, lg:"unset"}}
   pr={{xs:{pr}, lg:"unset"}}
   />
  )
}

export default BorderBottom