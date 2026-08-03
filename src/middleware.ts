import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    const url = new URL(context.request.url);

    // Bypass i18n logic completely for admin routes
    if (url.pathname.startsWith("/admin")) {
        return next();
    }

    return next();
});