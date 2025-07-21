import React from "react";
import {
  Utility,
  Label,
  InputContainer,
  Input,
  Button,
  Checkbox,
  Switch,
  SwitchLabel,
  Link,
  Typography,
} from "@visa/nova-react";

function Login() {
  return (
    <>
      <Utility
        vFlex
        vFlexCol
        vElevation="xlarge"
        vPadding={16}
        style={{
          height: "300px",
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
        </Utility>
        <Utility
          vFlex
          vFlexRow
          vAlignItems="center"
          vJustifyContent="between"
          vMarginBottom={16}
        >
          <Utility vFlex vFlexRow vGap={8}>
            <Switch htmlFor="rememberMe"></Switch>
            <SwitchLabel id="rememberMe">remember me</SwitchLabel>
          </Utility>
          <Link href="#" onClick={(e) => e.preventDefault()}>
            <Typography variant="body-3">Forgot Password</Typography>
          </Link>
        </Utility>
        <Utility
          vFlex
          vFlexRow
          vAlignItems="center"
          vJustifyContent="center"
          vMarginTop={32}
        >
          <Button style={{ width: "100%" }}>Login</Button>
        </Utility>
      </Utility>
    </>
  );
}

export default Login;
