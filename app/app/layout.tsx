export const metadata = {
  title: 'Stuck - Decision Unblocker',
  description: 'Break decision paralysis with structured thinking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  )
}
