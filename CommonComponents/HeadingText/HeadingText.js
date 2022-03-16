import React from "react";

import styles from "styles/Header.module.css";

const HeadingText = ({ text, fontWeight, color }) => {
  return (
    <>
      <p
        style={{
          fontFamily: "Montserrat",
          fontWeight: { fontWeight },
          fontSize: "22px",
          color: { color },
        }}
      >
        {text}
      </p>
    </>
  );
};

export default HeadingText;
