import { test, expect, describe } from "vitest";
import { parseUrlParams } from "../../src/utils/index";

describe("utils - paramsUrl", () => {
  test("should return objest", () => {
    expect(parseUrlParams("")).toStrictEqual({});
  });

  test("should return page_id", () => {
    expect(parseUrlParams("http://www.baidu.com?page_id=1")).toStrictEqual({
      page_id: "1",
    });
  });

  test("should return page_id is 0", () => {
    expect(parseUrlParams("http://www.baidu.com?page_id=0")).toStrictEqual({
      page_id: '0',
    });
  });
});
