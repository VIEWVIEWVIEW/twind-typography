import type { Context, CSSRules } from 'twind'

const round = (number: number): string =>
  number
    .toFixed(7)
    .replace(/(\.\d+?)0+$/, '$1')
    .replace(/\.0$/, '')

const rem = (px: number): string => `${round(px / 16)}rem`

const em = (px: number, base: number): string => `${round(px / base)}em`

export const styles = ({
  theme,
  tag
}: Context): Record<string, { css: CSSRules[] }> => ({
  DEFAULT: {
    css: [
      {
      }
    ]
  }
})
