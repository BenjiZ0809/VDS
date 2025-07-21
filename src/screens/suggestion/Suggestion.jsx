import React from "react";
import {
  Typography,
  Utility,
  ContentCard,
  ContentCardBody,
  ContentCardSubtitle,
  ContentCardTitle,
  Link,
} from "@visa/nova-react";
import { motion } from "framer-motion";
import { componentInfoMap } from "../../logic/suggestionMapping";
import { VisaMaximizeTiny } from "@visa/nova-icons-react";

function Suggestion({ componentSet }) {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Utility
      role="region"
      aria-label="Component Suggestions Panel"
      vFlex
      vFlexCol
      vElevation="xlarge"
      vPadding={16}
      style={{
        height: "80vh",
        width: "100%",
        border: "1px solid #D9D9D970",
        borderRadius: "12px",
        overflow: "auto",
      }}
    >
      <Utility vFlex vFlexRow vPadding={16}>
        <Typography variant="headline-1">
          Here are suggested components
        </Typography>
      </Utility>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={listVariants}
        aria-labelledby="suggestion-heading"
        style={{ listStyle: "none", padding: 0 }}
      >
        {componentSet.size > 0 ? (
          Array.from(componentSet).map((component, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              role="listitem"
              style={{
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <ContentCard>
                <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
                  <ContentCardTitle variant="headline-4">
                    {componentInfoMap[component]?.name || "Placeholder Name"}
                  </ContentCardTitle>
                  <Typography className="v-pt-4">
                    {componentInfoMap[component]?.description ||
                      "Placeholder Description"}
                  </Typography>
                  <Utility
                    vAlignItems="center"
                    vFlex
                    vFlexWrap
                    vGap={16}
                    vPaddingTop={12}
                  >
                    <Link
                      target="_blank"
                      href={componentInfoMap[component].link || "#"}
                      noUnderline
                      aria-label={`Open documentation for ${componentInfoMap[component].name} in a new tab`}
                    >
                      Link to Documentation
                      <VisaMaximizeTiny />
                    </Link>
                  </Utility>
                </Utility>
              </ContentCard>
            </motion.div>
          ))
        ) : (
          <Typography>No components found for the given query.</Typography>
        )}
      </motion.div>
    </Utility>
  );
}
export default Suggestion;
