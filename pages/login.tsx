import React, { useCallback } from "react";
import { Page, Button } from "@viacomcbs/openap-inventory-manager-react";

export default function Login(): JSX.Element {
  const login = useCallback(() => console.log("Not implemented"), []);

  return (
    <Page centered>
      <p>Not implemented</p>
      <Button onClick={login}>Log in</Button>
    </Page>
  );
}
