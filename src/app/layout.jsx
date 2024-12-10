"use client";

import 'bootstrap/dist/css/bootstrap.css';
import {ReactNode} from 'react';
import "../styles/index.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return children;
}
