import {
  setPersistentItem,
  getPersistentItem,
  removePersistentItem,
  clearPersistenceStore,
} from "../../../common/persistenceStore";

describe("Test persistent store functionaility", () => {
  it("Stores a value", () => {
    setPersistentItem("testName", "testValue");

    const result = getPersistentItem("testName");

    expect(result).toBe("testValue");
  });

  it("Removes a value", () => {
    setPersistentItem("testName", "testValue");
    removePersistentItem("testName");

    const result = getPersistentItem();

    expect(result).toBeNull();
  });

  it("Replaces a value", () => {
    setPersistentItem("testName", "testValue");

    const result = getPersistentItem("testName");

    expect(result).toBe("testValue");

    setPersistentItem("testName", "anotherOne");

    const second = getPersistentItem("testName");

    expect(second).toBe("anotherOne");
  });

  it("Stores multiple values", () => {
    setPersistentItem("testName", "testValue");

    const result = getPersistentItem("testName");

    expect(result).toBe("testValue");

    setPersistentItem("second", "anotherOne");

    const second = getPersistentItem("second");

    expect(second).toBe("anotherOne");
  });

  it("Clears all values", () => {
    setPersistentItem("testName", "testValue");
    setPersistentItem("testName", "anotherOne");

    clearPersistenceStore();

    const result = getPersistentItem("testName");

    expect(result).toBeNull();

    const second = getPersistentItem("testName");

    expect(second).toBeNull();
  });
});
