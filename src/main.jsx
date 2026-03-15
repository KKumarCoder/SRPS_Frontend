import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

import { ContactProvider } from "./contexts/ContactContext.jsx";
import ContactModal from "./components/ContactModal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactProvider>
      <App />
      <ContactModal />
    </ContactProvider>
  </StrictMode>,
);
