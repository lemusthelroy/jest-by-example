export const getIdFromUrl = (url: string) => {
  return url.match(/([^\/]*)\/*$/)![1];
};
