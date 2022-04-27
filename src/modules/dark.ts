import { getPrefersDark, toggleDarkClass } from '@/modules/utils'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useAtomValue } from 'jotai'
import React from 'react'

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const theme = useAtomValue(themeAtom)
  React.useEffect(() => void handleSetTheme(theme), [theme])
  return children
}

export const themeAtom = atomWithStorage('theme', getPrefersDark() ? 'dark' : 'light')

export const isDarkAtom = atom((get) => get(themeAtom) === 'dark')

const handleSetTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme)
  toggleDarkClass(theme === 'dark')
}
