import '@/styles/globals.css'
import Navbar from '@/components/layouts/navbar'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/AppShell'

//main file for the app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  )
}
