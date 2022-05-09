import { isDarkAtom, themeAtom } from '@/modules/theme'
import { classNames } from '@/modules/utils'
import { useAtomValue, useSetAtom } from 'jotai'
import * as React from 'react'

export default React.memo(function ToggleDarkModeBtn({ className = '' }: { className?: string }) {
  const isDark = useAtomValue(isDarkAtom)
  const setTheme = useSetAtom(themeAtom)
  const handleSetTheme = () => setTheme((v) => (v !== 'dark' ? 'dark' : 'light'))

  return (
    <div
      onClick={handleSetTheme}
      className={classNames(
        'cursor-pointer h-5 w-5 color-base',
        isDark ? 'i-heroicons-outline:moon' : 'i-heroicons-outline:sun',
        className,
      )}
    />
  )
})
