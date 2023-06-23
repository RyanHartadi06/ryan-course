import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <>
          <link
            rel="canonical"
            href="https://https://demo.themesberg.com/landwind/"
          />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Landwind - Tailwind CSS Landing Page Demo</title>
          {/* Meta SEO */}
          <meta name="title" content="Landwind - Tailwind CSS Landing Page" />
          <meta
            name="description"
            content="Get started with a free and open-source landing page built with Tailwind CSS and the Flowbite component library."
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Themesberg" />
          {/* Social media share */}
          <meta
            property="og:title"
            content="Landwind - Tailwind CSS Landing Page"
          />
          <meta property="og:site_name" content="Themesberg" />
          <meta
            property="og:url"
            content="https://https://demo.themesberg.com/landwind/"
          />
          <meta
            property="og:description"
            content="Get started with a free and open-source landing page for Tailwind CSS built with the Flowbite component library featuring dark mode, hero sections, pricing cards, and more."
          />
          <meta property="og:type" content="" />
          <meta
            property="og:image"
            content="https://themesberg.s3.us-east-2.amazonaws.com/public/github/landwind/og-image.png"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@themesberg" />
          <meta name="twitter:creator" content="@themesberg" />
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script
        src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"
        defer
      ></script>
    </Html>
  );
}
