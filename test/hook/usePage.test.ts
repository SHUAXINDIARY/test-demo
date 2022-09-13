import { test, expect, describe } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import usePage from "../../src/hooks/usePage";

describe("usepage ", () => {
  test("should usePage", () => {
    const { result } = renderHook(() =>
      usePage("http://localhost:5173/?page_id=1")
    );
    expect(result.current.pageModel).toBe(1);
  });

  test("should usePage", () => {
    const { result } = renderHook(() =>
      usePage("http://localhost:5173/?page_id=2")
    );
    expect(result.current.pageModel).toBe(2);
  });

  test("should usePage", () => {
    const { result } = renderHook(() =>
      usePage("http://localhost:5173/?page_id=0")
    );
    expect(result.current.pageModel).toBe(0);
  });

  test("should usePage", () => {
    const { result } = renderHook(() =>
      usePage("http://localhost:5173/?page_id=0123123")
    );
    expect(result.current.pageModel).toBe(0);
  });
});
