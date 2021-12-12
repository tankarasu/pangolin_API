/* eslint-disable no-undef */

// Internal requirements
import { deletePangolins } from "../../../src/controller/controller";

test("true", () => {
  expect(deletePangolins()).toBe(true);
});

