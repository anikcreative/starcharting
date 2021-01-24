import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("Main client application should...", () => {
    it("render without crashing", async () => {
      const { findByText } = render(<App />);

      const comingSoonMessage = "Coming soon!";
      const element = await findByText(comingSoonMessage);
      expect(element).toBeDefined();
    });
  });
});
