// @ts-nocheck
import "./Query.css";
import React, { useState } from "react";
import {
  Button,
  Textarea,
  InputContainer,
  Utility,
  Label,
  Surface,
  InputMessage,
} from "@visa/nova-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  keywordComponentMap,
  keywordAliases,
} from "../../logic/SuggestionMapping";

function Query() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const navigate = useNavigate();

  const shakeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.5 },
    },
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() !== "") {
      setError(false);
      setErrMsg("");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (query.trim() === "") {
      setError(true);
      setErrMsg("Query cannot be empty");
    }
  };

  const resetQuery = () => {
    setQuery("");
    setError(false);
    setErrMsg("");
    setTouched(false);
  };

  const submitQuery = () => {
    if (query.trim() === "") {
      setError(true);
      setErrMsg("Query cannot be empty");
      return;
    }
    const input = query.toLowerCase().trim();
    let componentSet = new Set();
    const keyWord = new Set();
    Object.entries(keywordAliases).forEach(([alias, keyword]) => {
      if (input.includes(alias)) {
        keyWord.add(keyword);
        keywordComponentMap[keyword].forEach((component) => {
          componentSet.add(component);
        });
      }
    });

    if (componentSet.size === 0) {
      setError(true);
      setErrMsg("No components found for the given query");
      return;
    }
    setError(false);
    setErrMsg("");
    navigate(`/result`, {
      state: {
        mode: "query",
        query: query,
        keyWord: keyWord,
        componentSet: componentSet,
      },
    });
  };

  return (
    <>
      <Utility
        vFlex
        vFlexCol
        vAlignItems="center"
        vJustifyContent="center"
        style={{ height: "100vh" }}
      >
        <Utility vMarginBottom={48} vFlex vFlexWrap>
          <span className="title">Component Suggestion</span>
        </Utility>
        <Utility
          vFlex
          vFlexCol
          vAlignItems="center"
          vGap={4}
          vElevation="xlarge"
          vPadding={24}
          vMarginTop={24}
          style={{
            width: "60%",
            borderRadius: "12px",
            border: "1px solid #D9D9D970",
          }}
        >
          <Label htmlFor={"query"} className="v-sr">
            Query
          </Label>
          <InputContainer>
            <Textarea
              aria-invalid={error}
              value={query}
              onChange={(e) => handleChange(e)}
              onBlur={() => handleBlur()}
              aria-required="true"
              aria-describedby={error ? "query-error" : undefined}
              fixed
              id={"query"}
              name={"query"}
              style={{
                blockSize: "20vh",
                fontSize: "16px",
              }}
              placeholder="Enter your query here"
            ></Textarea>
          </InputContainer>
          {error && (
            <motion.div
              variants={prefersReducedMotion ? {} : shakeVariants}
              initial="hidden"
              animate="visible"
              animate="visible"
            >
              <InputMessage
                id="query-error"
                aria-atomic="true"
                aria-live="assertive"
                role="alert"
                style={{ color: "#d65151" }}
              >
                {errMsg}
              </InputMessage>
            </motion.div>
          )}

          <Utility
            vFlex
            vMarginTop={16}
            className="button-container"
            style={{ width: "60%" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Submit your query"
              className="v-button"
              style={{ width: "100%", height: "48px", fontSize: "16px" }}
              onClick={() => submitQuery()}
            >
              Submit
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Reset the query"
              className="v-button v-button-secondary"
              style={{ width: "100%", height: "48px", fontSize: "16px" }}
              onClick={() => resetQuery()}
              colorscheme="secondary"
              type="button"
            >
              Reset
            </motion.button>
          </Utility>
        </Utility>
      </Utility>
    </>
  );
}

export default Query;

//   const snippet = `
//   function greet(name) {
//     return 'Hello, ' + name;
// }
//   `;

{
  /* <SyntaxHighlighter
        language="javascript"
        style={darcula}
        showLineNumbers
        wrapLongLines
      >
        {snippet.trim()}
      </SyntaxHighlighter> */
}
