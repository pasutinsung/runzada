import { StoreProvider } from "@/utils/Stores";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
