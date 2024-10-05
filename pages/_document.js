import { Html, Head, Main, NextScript } from "next/document";
import { DOMAIN } from "@/config";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="icon" href={`${DOMAIN}/favicon.ico`} sizes="any" />
        <meta name="msvalidate.01" content="A3B68AC93CC71F3C517A1D5F3CC7DDD1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
