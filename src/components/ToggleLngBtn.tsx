import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default React.memo(function ToggleLngBtn() {
  const { i18n } = useTranslation()
  const setLng = () => i18n.changeLanguage(i18n.language === 'zh-CN' ? 'en' : 'zh-CN')

  return (
    <span onClick={setLng} className="cursor-pointer font-semibold w-16 h-stack base-color">
      {i18n.language === 'zh-CN' ? 'English' : <span className="tracking-widest">中文</span>}
    </span>
  )
})
