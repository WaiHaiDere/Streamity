import { isAllowedNumericInput } from "../../../common/helpers";

describe("Test helper class functionaility", () => {
  it("returns true as input is number", () => {
    const isNum = isAllowedNumericInput(5);

    expect(isNum).toBeTruthy();
  });

  it("returns false as input is not number", () => {
    const isNum = isAllowedNumericInput("A");

    expect(isNum).toBeFalsy();
  });
});
