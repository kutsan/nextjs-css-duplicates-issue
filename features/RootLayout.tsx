import type { ReactNode } from 'react'

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
