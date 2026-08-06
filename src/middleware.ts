import { defineMiddleware } from "astro:middleware";

const SUPPORTED_LOCALES = ["es", "pt"];
export const onRequest = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);
    const pathname = context.url.pathname;
    const response = await next();

    // If Astro returned a 404 status code for an unmatched route
    if (response.status === 404) {
        const segments = context.url.pathname.split("/").filter(Boolean);
        const maybeLocale = segments[0];

        // If the first segment is a valid locale, render the localized 404
        if (SUPPORTED_LOCALES.includes(maybeLocale)) {
            return context.rewrite(`/${maybeLocale}/404`);
        }
    }
    // 1. Always bypass static assets and the 404 page
    if (pathname === "/404" || pathname.startsWith("/_astro")) {
        return next();
    }

    // Bypass i18n logic completely for admin routes
    if (url.pathname.startsWith("/admin")) {
        return next();
    }

    return next();
});