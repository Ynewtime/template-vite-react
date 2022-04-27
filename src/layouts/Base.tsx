import { ThemeProvider } from '@/modules/dark'
import * as React from 'react'

export default React.memo(function Layout({ children }: { children: JSX.Element }) {
  return <ThemeProvider>{children}</ThemeProvider>
})
