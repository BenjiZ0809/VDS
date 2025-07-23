import { Button, Utility, ScreenReader } from "@visa/nova-react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Suggestion from "../../screens/suggestion/Suggestion.jsx";
import CodeDisplay from "../../screens/codeDisplay/CodeDisplay.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useSavedQueries } from "../../context/SavedQueriesContext.jsx";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const mode = location.state?.mode;
  const componentSet = location.state?.componentSet;

  const keyWord = location.state?.keyWord || new Set();
  const kw =
    mode === "query" ? Array.from(keyWord)[0] : location.state?.keyWord;
  const query = location.state?.query || "";
  /** @type {React.RefObject<HTMLElement | null>} */
  const pageInitRef = useRef(null);

  const [showCode, setShowCode] = useState(false);
  const [savedData, setSavedData] = useState([]);
  const { savedQueries, setSavedQueries } = useSavedQueries();

  useEffect(() => {
    if (pageInitRef.current) {
      pageInitRef.current.focus();
    }
    setShowCode(false);
  }, [query]);

  const onSave = () => {
    const savedQueries = JSON.parse(
      localStorage.getItem("savedQueries") || "[]"
    );
    const newEntry = {
      query: query,
      components: Array.from(componentSet),
      keyWord: kw,
      timestamp: new Date().toISOString(),
    };
    const exist = savedQueries.some((entry) => entry.query === query);
    const updated = exist ? savedQueries : [newEntry, ...savedQueries];
    // @ts-ignore
    setSavedQueries(updated);
    localStorage.setItem("savedQueries", JSON.stringify(updated));
    if (exist) {
      alert("Query already exists.");
    } else {
      alert("Query saved");
    }
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
        {showCode && mode === "query" && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="show code"
            className="v-button"
            onClick={() => onSave()}
            style={{ width: "128px" }}
          >
            Save Result
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
          Back to Home
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
            top: "4%",
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
                top: "4%",
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
