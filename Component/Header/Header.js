import React from "react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

import styles from "styles/Header.module.css";
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
                <div className={styles.container}>
                  <Image
                    src="/images/skilly-tree-logo.svg"
                    alt="skilly-tree-logo"
                    width={240}
                    height={62}
                  />
                  <div className={styles.searchBox}>
                    <Field
                      type="text"
                      id="searchTerm"
                      name="searchTerm"
                      placeholder="SEARCH A SKILL"
                      className={styles.inputField}
                    />
                    <Image
                      src="/images/search-icon.svg"
                      alt="search-icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className={styles.menu}>
                    <Image
                      src="/images/menu-icon.svg"
                      alt="menu-icon"
                      width={44}
                      height={44}
                    />
                  </div>
                  <HeadingText text="Log In" color="#1F1F1F" fontWeight={600} />
                  <div className={styles.signInButton}>
                    <HeadingText
                      text="Sign In"
                      color="#FFFFFF"
                      fontWeight={700}
                    />
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Header;
