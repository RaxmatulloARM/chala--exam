import React from "react";
import AuthenticatedApp from "../src/components/Page/log_in/AuthenticatedApp"
import UnauthenticatedApp from "../src/components/Page/log_in/UnauthenticatedApp"
import "./App.scss";

import useToken from "../src/components/Hooks/useToken";

function App() {

  const [setIsLoggedIn] = useToken()

  if (setIsLoggedIn) {
    return <AuthenticatedApp />
  } else {
    return <UnauthenticatedApp />
  }
}

export default App;