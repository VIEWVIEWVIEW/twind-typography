import type { CSSRules, Plugin, ThemeSection } from 'twind'

import { styles } from './styles'

export interface Options {
  className?: string
}

declare module 'twind' {
  interface Theme {
    typography?: ThemeSection<{ css?: CSSRules }>
  }
}

const typography = ({ className = 'prose' }: Options = {}): Record<
  string,
  Plugin
> => ({
  lead: (_, { tag }) => tag('lead'),

  [className]: (parameters, context) => {
    const config = styles(context)
    const size = parameters[0] || 'DEFAULT'
    const { css } = config[size] || {}
    const overwriteCss = context.theme('typography')[size] || {}

    const rules: CSSRules = {}

    css.forEach((css) =>
      Object.entries(css).forEach(([property, value]) => {
        const key =
          value != null && typeof value === 'object' && !Array.isArray(value)
            ? `& ${property}`
            : property

        const existingRules = rules[key]
        if (typeof existingRules === 'object' && typeof value === 'object') {
          rules[key] = { ...existingRules, ...value }
        } else {
          rules[key] = value
        }
      })
    )

    if (overwriteCss.css) {
      Object.entries(overwriteCss.css).forEach(([property, value]) => {
        const key =
          value != null && typeof value === 'object' && !Array.isArray(value)
            ? `& ${property}`
            : property

        const existingRules = rules[key]
        if (typeof existingRules === 'object' && typeof value === 'object') {
          rules[key] = { ...existingRules, ...value }
        } else {
          rules[key] = value
        }
      })
    }

    return rules
  }
})

export default typography
