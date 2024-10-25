import './globals.css'

export const metadata = {
  title: 'Items*',
  description: 'Beautiful Subway Cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='-z-10 bg-neutral-950 min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>{children}</body>
    </html>
  )
}
