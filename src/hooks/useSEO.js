import { useEffect } from "react";

const SITE_NAME = "Core Disability Care";
const SITE_URL = "https://www.coredisabilitycare.com.au";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Sets per-page <title>, meta description, canonical URL, Open Graph/Twitter
 * tags and optional JSON-LD structured data. Runs client-side on route change —
 * fine for crawlers that execute JS (Googlebot), but doesn't help crawlers
 * that don't, so this is not a substitute for SSR/prerendering if that ever
 * becomes a priority.
 */
export function useSEO({ title, description, path = "/", image, jsonLd, noindex = false } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setLink("canonical", `${SITE_URL}${path}`);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${SITE_URL}${path}`);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", image || DEFAULT_IMAGE);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image || DEFAULT_IMAGE);

    setJsonLd("cdc-jsonld", jsonLd || null);
  }, [title, description, path, image, jsonLd, noindex]);
}

export { SITE_NAME, SITE_URL };
