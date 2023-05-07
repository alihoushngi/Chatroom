import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../../public/static/fontawesome/pro/css/all.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
