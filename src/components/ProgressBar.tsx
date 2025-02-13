"use client";

import React from "react";
import { AppProgressBar as ProgressBarComponent } from "next-nprogress-bar";

export const ProgressBar = () => (
  <ProgressBarComponent
    height="4px"
    color="#623ECA"
    options={{ showSpinner: false }}
    shallowRouting
  />
);
