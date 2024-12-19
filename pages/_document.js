import { Html, Head, Main, NextScript } from "next/document";
import { DOMAIN } from "@/config";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="icon" href={`${DOMAIN}/favicon.ico`} sizes="any" />
        {/* <meta name="msvalidate.01" content="A3B68AC93CC71F3C517A1D5F3CC7DDD1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script async crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1721485376950080" />
        <script async data-ad-client="ca-pub-1721485376950080" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" ></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
