import "../styles/globals.css";
import type { AppProps } from "next/app";

const test = (a: string, b: number): string => a;

function MyApp({ Component, pageProps }: AppProps) {
  const test1 = test(2, 3);
  return <Component {...pageProps} />;
}

export default MyApp;
