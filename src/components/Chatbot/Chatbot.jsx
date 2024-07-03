import React from "react";
import "./Chatbot.css";
import "../Header/Header.css";
import Header from "../Header/Header";
import Footer from "../Footer";

import {
  WebChatContainer,
  setEnableDebug,
} from "@ibm-watson/assistant-web-chat-react";

const webChatOptions = {
  integrationID: "d7e973e3-72b8-4fe4-b691-07dd5fee5ba9",
  region: "us-south",
  serviceInstanceID: "9a6c00a3-ea9f-4c03-ad9e-4e8ad79534ca",
};

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

function Chatbot() {
  return (
    <div>
      <Header />
      <div className="chatbot-container"> Click the button below!</div>
      <WebChatContainer className="h" config={webChatOptions} />
      <Footer />
    </div>
  );
}

export default Chatbot;
