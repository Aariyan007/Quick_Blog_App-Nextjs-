import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from './providers/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beyond UI',
  description: 'Revolutionary UI/UX Design Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}