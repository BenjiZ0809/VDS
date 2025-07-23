import React, { useEffect, useRef, useState } from "react";
import { Utility, Button, Tooltip } from "@visa/nova-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  offset,
  safePolygon,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Login from "../../components/login/Login";
import loginDemo from "../../components/login/Login.jsx?raw";
import Signup from "../../components/signup/Signup";
import signupDemo from "../../components/signup/Signup.jsx?raw";
import Contact from "../../components/contact/Contact";
import contactDemo from "../../components/contact/Contact.jsx?raw";
import Modal from "../../components/modal/Modal.jsx";
import modalDemo from "../../components/modal/Modal.jsx?raw";
import Chart from "../../components/chart/Chart";
import chartDemo from "../../components/chart/Chart.jsx?raw";
import { VisaCopyLow } from "@visa/nova-icons-react";

function CodeDisplay({ keyWord }) {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    middleware: [offset(2)],
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "left",
  });

  const dismiss = useDismiss(context);
  const focus = useFocus(context);
  const hover = useHover(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    focus,
    hover,
    role,
  ]);

  const codeMap = {
    login: loginDemo,
    signup: signupDemo,
    modal: modalDemo,
    contact: contactDemo,
    table: chartDemo,
  };
  const snippet = codeMap[keyWord] || "No code provided";

  /** @type {React.RefObject<HTMLElement | null>} */
  const codeRef = useRef(null);

  useEffect(() => {
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
        {keyWord === "contact" && <Contact></Contact>}
        {keyWord === "table" && <Chart></Chart>}
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
          ref={refs.setReference}
          {...getReferenceProps()}
          onClick={() => navigator.clipboard.writeText(snippet)}
          style={{
            marginTop: "20px",
            position: "absolute",
            right: "12px",
          }}
        >
          <VisaCopyLow></VisaCopyLow>
        </Button>
        {isOpen && (
          <Tooltip
            ref={refs.setFloating}
            style={{
              left: x,
              position: strategy,
              top: y,
              width: "fit-content",
            }}
            {...getFloatingProps()}
          >
            Copy Code
          </Tooltip>
        )}
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
