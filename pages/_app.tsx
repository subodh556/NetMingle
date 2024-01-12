import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import LoginModal from '@/components/Modals/LoginModal'
import RegisterModal from '@/components/Modals/RegisterModal'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import EditModal from '@/components/Modals/EditModal'
import PostModal from '@/components/Modals/PostModal'

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <EditModal/>
      <RegisterModal/>
      <LoginModal/>
      <PostModal/>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
