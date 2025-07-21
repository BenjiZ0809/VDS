import React, { useEffect, useRef } from "react";
import { Utility, Button } from "@visa/nova-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Login from "../../components/login/Login";
import loginDemo from "../../components/login/Login.jsx?raw";
import Signup from "../../components/signup/Signup";
import signupDemo from "../../components/signup/Signup.jsx?raw";
import { VisaCopyLow } from "@visa/nova-icons-react";
import Modal from "../../components/modal/modal";
import modalDemo from "../../components/modal/modal.jsx?raw";

function CodeDisplay({ keyWord }) {
  const codeMap = {
    login: loginDemo,
    signup: signupDemo,
    modal: modalDemo,
  };
  const snippet = codeMap[keyWord] || "No code provided";

  /** @type {React.RefObject<HTMLElement | null>} */
  const codeRef = useRef(null);

  useEffect(() => {
    console.log(keyWord);

    if (codeRef.current) {
      codeRef.current.focus();
    }
  });

  return (
    <Utility
      vFlex
      vFlexCol
      vElevation="medium"
      vPadding={16}
      aria-label="Code Display Panel"
      style={{
        height: "80vh",
        width: "100%",
        border: "1px solid #D9D9D970",
        borderRadius: "12px",
        overflow: "auto",
      }}
    >
      <Utility
        vFlex
        vFlexRow
        vPadding={16}
        vAlignItems="center"
        vJustifyContent="center"
        role="region"
        aria-label="Code Display Panel"
        aria-labelledby="code-display-heading"
        ref={codeRef}
        style={{ width: "100%" }}
      >
        {keyWord === "login" && <Login></Login>}
        {keyWord === "signup" && <Signup></Signup>}
        {keyWord === "modal" && <Modal></Modal>}
      </Utility>

      <Utility
        vMarginTop={16}
        role="region"
        aria-label="Code snippet showing how the Login component is implemented"
        style={{ position: "relative" }}
      >
        <Button
          iconButton
          aria-label="Copy code to clipboard"
          colorScheme="secondary"
          onClick={() => navigator.clipboard.writeText(snippet)}
          style={{
            marginTop: "20px",
            position: "absolute",
            right: "12px",
          }}
        >
          <VisaCopyLow></VisaCopyLow>
        </Button>
        <SyntaxHighlighter
          language="javascript"
          style={darcula}
          showLineNumbers
          wrapLongLines
        >
          {snippet.trim()}
        </SyntaxHighlighter>
      </Utility>
    </Utility>
  );
}
CodeDisplay.defaultProps = {
  code: "No code provided",
};
export default CodeDisplay;
