import './globals.css'

export const metadata = {
  title: 'RSC vs RCC Zustand in Next.js 13 App dir',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
