"use client";
import { SessionProvider } from "../../node_modules/next-auth/react";

import React from "react";

const SessionWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
