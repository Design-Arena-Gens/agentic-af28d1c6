export const metadata = {
  title: 'Virat Kohli Baby Boy Collection',
  description: 'Premium baby boy clothing inspired by cricket legend Virat Kohli',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
