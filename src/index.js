import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { AuthContextProvider } from "./store/auth-context";
import { FirestoreContextProvider } from "./store/firestore-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirestoreContextProvider>
    <AuthContextProvider>
      <ChakraProvider>
        <Container maxHeight="100vh" maxWidth="100vw">
          <App />
        </Container>
      </ChakraProvider>
    </AuthContextProvider>
  </FirestoreContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
