import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { Page, Button } from "openap-inventory-manager-react";

export default function Login(): JSX.Element {
  const router = useRouter();
  const showMessage = router.query.msg;

  const login = useCallback(() => console.log("Not implemented"), []);

  return (
    <Page centered>
      {showMessage === "expired" && (
        <p>Your session has expired. Please login again</p>
      )}
      <Button onClick={login}>Log in</Button>
    </Page>
  );
}
