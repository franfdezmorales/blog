export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `quality=${quality ?? 75}`, "format=auto"];
  return `https://imagedelivery.net/${
    process.env.NEXT_PUBLIC_CLOUDFARE_ACCOUNT_HASH
  }/${src}/${params.join(",")}`;
}
