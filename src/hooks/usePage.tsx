import { useEffect, useState } from "react";
import { parseUrlParams } from "../utils";

export const PAGE_MODE = {
  DEFAULT: 0,
  PAGE_ONE: 1,
  PAGE_TWO: 2,
};


const usePage = (url = window.location.href) => {
  const [pageModel, setPageMode] = useState(PAGE_MODE.DEFAULT);
  const { page_id } = parseUrlParams(url);
  useEffect(() => {
    console.log(page_id);
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
  }, [page_id]);
  return {
    pageModel,
  };
};

export default usePage;
