export const parseUrlParams = (url: string) => {
  if (!url || typeof url !== "string") {
    console.error("url must be a string");
  }
  const paramsUrl = url.split("?")?.[1] || "";
  if (!paramsUrl) {
    return {};
  }
  const paramsArr = paramsUrl.split("&").reduce((total, item) => {
    const key = item.split("=")?.[0];
    const val = item.split("=")?.[1];
    total[key] = val;
    return total;
  }, {} as Record<string, any>);
  return paramsArr;
};
