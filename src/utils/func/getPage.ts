export const getPage = (url: string | undefined | null): number | null => {
  if (!url) return null;
  const match = url.match(/page=(\d+)/);
  return match ? Number.parseInt(match[1], 10) : null;
};
