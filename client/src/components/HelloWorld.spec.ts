import { describe, expect, it } from "vitest";
import HelloWorld from "./HelloWorld.vue";

describe("Hello world", () => {
  it("Mounts properly", async () => {
    expect(HelloWorld).toBeTruthy();
  });
});
