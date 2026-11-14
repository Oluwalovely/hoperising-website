/** Leave unset for local/review builds. Set to the confirmed public origin. */
export function parseSiteUrl(value: string | undefined): URL | undefined {
  if (!value?.trim()) return undefined;

  const url = new URL(value.trim());
  const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";

  if (
    (url.protocol !== "https:" && !(local && url.protocol === "http:")) ||
    url.username || url.password || url.pathname !== "/" || url.search || url.hash
  ) {
    throw new Error("SITE_URL must be a public HTTPS origin without a path, credentials, query or fragment. HTTP is allowed for localhost testing.");
  }

  return url;
}

export const siteUrl = parseSiteUrl(process.env.SITE_URL);
