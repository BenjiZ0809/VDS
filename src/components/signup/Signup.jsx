import {
  Button,
  Input,
  InputContainer,
  Label,
  Utility,
} from "@visa/nova-react";
import React from "react";

function Signup() {
  return (
    <>
      <Utility
        vFlex
        vFlexCol
        vElevation="xlarge"
        vPadding={16}
        style={{
          height: "330px",
          width: "350px",
          borderRadius: "12px",
          border: "1px solid #D9D9D970",
        }}
      >
        <Utility vFlex vFlexCol vGap={8} vMarginBottom={16}>
          <Label htmlFor="username">Username</Label>
          <InputContainer>
            <Input aria-required="true" id="username" type="text"></Input>
          </InputContainer>
          <Label htmlFor="password">Password</Label>
          <InputContainer>
            <Input aria-required="true" id="password" type="password"></Input>
          </InputContainer>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <InputContainer>
            <Input
              aria-required="true"
              id="confirmPassword"
              type="password"
            ></Input>
          </InputContainer>
        </Utility>

        <Utility
          vFlex
          vFlexRow
          vAlignItems="center"
          vJustifyContent="center"
          vMarginTop={32}
        >
          <Button style={{ width: "100%" }}>Register</Button>
        </Utility>
      </Utility>
    </>
  );
}

export default Signup;
