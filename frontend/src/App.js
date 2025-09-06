import React from "react";
import "react-toastify/dist/ReactToastify.css";

// import { Button } from "semantic-ui-react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigation } from "./routes";
import { ScrollTop } from "./components";

export default function App() {
  return (
    <div>
      <ScrollTop></ScrollTop>
      <Navigation />
      <ToastContainer
        position="top-center"
        transition={Zoom}
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}
