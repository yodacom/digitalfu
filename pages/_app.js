import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { useProvider, UserProvider } from '@auth0/nextjs-auth0'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}