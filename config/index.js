import en from '../lang/en-US.js'
import sv from '../lang/sv-Sv.js'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'sv',
      iso: 'sv-Sv',
      name: 'Español'
    }
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, sv }
  }
}