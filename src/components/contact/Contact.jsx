import React from "react";
import {
  Utility,
  Label,
  InputContainer,
  Input,
  Textarea,
  Button,
} from "@visa/nova-react";

export default function Contact() {
  return (
    <>
      <Utility
        vFlex
        vFlexCol
        vElevation="xlarge"
        vPadding={16}
        style={{
          height: "385px",
          width: "550px",
          borderRadius: "12px",
          border: "1px solid #D9D9D970",
        }}
      >
        <Utility
          vFlex
          vFlexRow
          vJustifyContent="between"
          vAlignItems="center"
          vPaddingHorizontal={16}
          vGap={32}
          vMarginBottom={16}
        >
          <Utility vFlex vFlexCol vGap={8} style={{ width: "45%" }}>
            <Label htmlFor="firstName">First name</Label>
            <InputContainer>
              <Input aria-required="true" id="firstName" type="text"></Input>
            </InputContainer>
          </Utility>
          <Utility
            vFlex
            vFlexCol
            vGap={8}
            vPaddingLeft={16}
            style={{ width: "48%" }}
          >
            <Label htmlFor="lastName">Last name</Label>
            <InputContainer>
              <Input aria-required="true" id="lastName" type="text"></Input>
            </InputContainer>
          </Utility>
        </Utility>
        <Utility
          vFlex
          vFlexRow
          vJustifyContent="between"
          vAlignItems="center"
          vPaddingHorizontal={16}
          vGap={32}
        >
          <Utility vFlex vFlexCol vGap={8} style={{ width: "45%" }}>
            <Label htmlFor="phone">Contact number</Label>
            <InputContainer>
              <Input aria-required="true" id="phone" type="text"></Input>
            </InputContainer>
          </Utility>
          <Utility
            vFlex
            vFlexCol
            vGap={8}
            vPaddingLeft={16}
            style={{ width: "48%" }}
          >
            <Label htmlFor="email">Email</Label>
            <InputContainer>
              <Input aria-required="true" id="email" type="text"></Input>
            </InputContainer>
          </Utility>
        </Utility>
        <Utility
          vFlex
          vFlexCol
          vGap={8}
          vPaddingHorizontal={16}
          vMarginTop={16}
        >
          <Label htmlFor="message">Message</Label>
          <InputContainer>
            <Textarea
              aria-required="true"
              fixed
              id="message"
              style={{ blockSize: "100px" }}
              placeholder="Enter your message here, someone will contact you as soon as possible."
            ></Textarea>
          </InputContainer>
        </Utility>
        <Utility
          vFlex
          vFlexRow
          vPaddingHorizontal={16}
          vMarginTop={16}
          vJustifyContent="end"
          vAlignItems="center"
        >
          <Button aria-label="submit" style={{ width: "100px" }}>
            Submit
          </Button>
        </Utility>
      </Utility>
    </>
  );
}
