import React, { useEffect } from "react";
import "./App.css";
// import AccessibilityScript from './AccessibilityScript '

declare global {
  interface Window {
    interdeal: any;
  }
}


function App() {
  useEffect(() => {

        window.interdeal = {
          sitekey: "4b2f3cfa90b07248ac5141e99a47cbd0",
          Position: "Left",
          Menulang: "EN",
          domains: {
            js: "https://cdn.equalweb.com/",
            acc: "https://access.equalweb.com/",
          },
          btnStyle: {
            vPosition: ["80%", null],
            scale: ["0.8", "0.8"],
            color: {
              main: "#0a51f2",
              second: "",
            },
            icon: {
              type: 7,
              shape: "semicircle",
              outline: false,
            },
          },
        };

        const script = document.createElement("script");
        script.src = "https://cdn.equalweb.com/core/4.4.1/accessibility.js";
        script.defer = true;
        script.integrity =
          "sha512-tq2wb4PBHqpUqBTfTG32Sl7oexERId9xGHX2O3yF91IYLII2OwM1gJVBXGbEPaLmfSQrIE+uAOzNOuEUZHHM+g==";
        script.crossOrigin = "anonymous";
        script.setAttribute("data-cfasync", "true");
        document.body.appendChild(script);

  }, []);

  return (
    <div className="App">
      {/* <AccessibilityScript/> */}
      <h1>Vite + React</h1>
    </div>
  );


}

export default App;
