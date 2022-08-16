import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ChakraProvider,
  Container,
  extendTheme,
  theme as base,
} from "@chakra-ui/react";
import { AuthContextProvider } from "./store/auth-context";
import { FirestoreContextProvider } from "./store/firestore-context";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5fee5",
      100: "#e1fbb2",
      200: "#cdf781",
      300: "#b8ee56",
      400: "#a2e032",
      500: "#8ac919",
      600: "#71ab09",
      700: "#578602",
      800: "#3c5e00",
      900: "#203300",
    },
  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirestoreContextProvider>
    <AuthContextProvider>
      <ChakraProvider>
        <Container maxHeight="100vh" maxWidth="100vw" theme={theme}>
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
