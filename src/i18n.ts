import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }: any) => {

    if (!locales.includes(locale as any)) notFound()

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
        locale: locale as string
    };
})