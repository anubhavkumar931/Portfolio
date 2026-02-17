import Script from "next/script";

export function AnalyticsPlaceholder() {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "true") {
    return null;
  }

  return (
    <Script id="analytics-placeholder" strategy="afterInteractive">
      {`console.info("Analytics placeholder enabled. Add your script in src/components/system/analytics-placeholder.tsx.");`}
    </Script>
  );
}

