import { Button, Utility, ScreenReader } from "@visa/nova-react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Suggestion from "../../screens/suggestion/Suggestion.jsx";
import CodeDisplay from "../../screens/codeDisplay/CodeDisplay.jsx";
import { motion, AnimatePresence } from "framer-motion";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const componentSet = location.state?.componentSet || new Set();
  const keyWord = location.state?.keyWord || new Set();
  const kw = Array.from(keyWord)[0];
  const query = location.state?.query || "";
  /** @type {React.RefObject<HTMLElement | null>} */
  const pageInitRef = useRef(null);

  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (pageInitRef.current) {
      pageInitRef.current.focus();
    }
  }, []);

  const onSave = () => {
    const savedData = {};
    console.log("onsave");
    console.log(query);
    console.log(Array.from(keyWord)[0]);
  };

  return (
    <>
      <ScreenReader ref={pageInitRef}>Result Page</ScreenReader>
      <Utility
        vFlex
        vFlexRow
        vGap={16}
        vJustifyContent="center"
        vAlignItems="center"
        style={{ height: "10vh" }}
      >
        {!showCode && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="show code"
            className="v-button"
            onClick={() => setShowCode(!showCode)}
            style={{ width: "128px" }}
          >
            Show Code
          </motion.button>
        )}
        {showCode && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="show code"
            className="v-button"
            onClick={() => onSave()}
            style={{ width: "128px" }}
          >
            Save
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="v-button"
          aria-label="back to previous page"
          onClick={() => navigate("/")}
          style={{ width: "128px" }}
        >
          Back to Previous
        </motion.button>
      </Utility>

      <main
        role="main"
        style={{
          marginTop: "-3vh",
          display: "flex",
          position: "relative",
          justifyContent: showCode ? "space-evenly" : "center",
          height: "90vh",
        }}
      >
        <motion.div
          initial={false}
          animate={{
            left: showCode ? "7%" : "50%",
            transform: showCode ? "translateX(0%)" : "translateX(-50%)",
            width: showCode ? "40%" : "40%",
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: "5%",
            transform: "translateY(-50%)",
            width: "50%",
            zIndex: 2,
          }}
        >
          <Suggestion componentSet={componentSet} />
        </motion.div>
        <AnimatePresence>
          {showCode && (
            <motion.div
              key="code"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                right: "7%",
                top: "5%",
                width: "40%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <CodeDisplay keyWord={kw} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

export default Result;
