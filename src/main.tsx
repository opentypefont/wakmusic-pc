import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootOverlay from "@components/RootOverlay";
import GNB from "@components/gnb/GNB";
import Header from "@components/header/Header";
import Player from "@components/player/Player";

import firebaseConfig from "@constants/firebaseConfig";

import Index from "@pages/index/Index";
import Playground from "@pages/playground/Playground";
import User from "@pages/user/user";

import "@utils/loadIpcRenderer";

import "./index.css";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <RootOverlay>
        <GNB />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/user/*" element={<User />} />
        </Routes>
        <Player />
      </RootOverlay>
    </BrowserRouter>
  </StrictMode>
);
