import i18n from 'i18next'
import type { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const locales = import.meta.globEager('../locales/*.json')
const matcher = /\.\.\/locales\/(.*)\.json$/
const reducer = (acc: Resource, elem: string) => {
  const matched = elem.match(matcher)
  if (matched?.length) {
    const [, name] = matched
    return {
      ...acc,
      [name]: {
        translation: locales[elem],
      },
    }
  }
  return acc
}
const resources = Object.keys(locales).reduce(reducer, {})

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-CN',
    debug: !import.meta.env.PROD,
    interpolation: { escapeValue: false },
  })
