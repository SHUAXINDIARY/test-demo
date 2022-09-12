import { useEffect, useState } from "react";

export const PAGE_MODE = {
  DEFAULT: 0,
  PAGE_ONE: 1,
  PAGE_TWO: 2,
};

const parseUrlParams = (url: string) => {
  if (!url || typeof url !== "string") {
    console.error("url must be a string");
  }
  const paramsUrl = url.split("?")[1];
  const paramsArr = paramsUrl.split("&").reduce((total, item) => {
    const key = item.split("=")?.[0];
    const val = item.split("=")?.[1];
    total[key] = val;
    return total;
  }, {} as Record<string, any>);
  return paramsArr;
};

const usePage = (url = window.location.href) => {
  const [pageModel, setPageMode] = useState(PAGE_MODE.DEFAULT);
  useEffect(() => {
    const { page_id } = parseUrlParams(url);
    const _pageId = Number(page_id);
    switch (_pageId) {
      case PAGE_MODE.PAGE_ONE:
        setPageMode(PAGE_MODE.PAGE_ONE);
        break;
      case PAGE_MODE.PAGE_TWO:
        setPageMode(PAGE_MODE.PAGE_TWO);
        break;
      case PAGE_MODE.DEFAULT:
      default:
        setPageMode(PAGE_MODE.DEFAULT);
        break;
    }
  }, []);
  return {
    pageModel,
  };
};

export default usePage;
