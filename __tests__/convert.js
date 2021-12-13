const convert = require("../convert.js");



test("storage check", () => {
    expect(convert(1000, "kb")).toBe("1KB");
    expect(convert(24443, "mb")).not.toBe("24MB");
})