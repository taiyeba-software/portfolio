import type { Metadata } from 'next'
import { Inter, M_PLUS_Code_Latin, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

const mPlusCodeLatin = M_PLUS_Code_Latin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-m-plus-code-latin',
})

export const metadata: Metadata = {
  title: 'Portfolio | Developer & Engineer',
  description: 'Developer portfolio showcasing projects, skills, and experience.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${sora.variable} ${mPlusCodeLatin.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
