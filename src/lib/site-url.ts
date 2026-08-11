const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stavyasrinath.vercel.app";

export const siteUrl = rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`;
