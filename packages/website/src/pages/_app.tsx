import "../styles/globals.css";
import type { AppProps } from "next/app";

const test = (a: string, b: number): string => console.log(a);

function MyApp({ Component, pageProps }: AppProps) {
  const test1 = test(2, "test");
  return <Component {...pageProps} />;
}

export default MyApp;
