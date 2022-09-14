# twind-typography

> A plugin to add support for the `prose` class from tailwind in twind

**This project is forked from [pathetic geek's repo](https://github.com/patheticGeek/twind-typography) and comes with default tailwind prose (instead of dark mode).**

## Usage

1. Import

```typescript
import typography from "https://esm.sh/@viewviewview/twind-typography" 
```

2. In your twind config

```ts
import { setup } from 'twind'
import typography from 'twind-typography'

setup({
  plugins: {
    ...typography({ className: 'prose' })
  }
})
```

### Available variants

`prose`, `prose-sm`, `prose-md`, `prose-lg`, `prose-xl`, `prose-2xl`

By default, the theme is dark, to use light theme see below on how to extend

### Extending the theme

To extend the theme, you can pass in theme.extend.typography

```ts
import typography from 'twind-typography'

setup({
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          a: { color: '#696969' }
          // ... other overrides
        },
        lg: {
          a: { fontSize: 420 }
          // ... other overrides
        }
        // ... other overrides for sm, md, lg, xl, 2xl
      }
    }
  },
  plugins: {
    ...typography({ className: 'prose' })
  }
})
```

## Credits

Most of the styles are from https://github.com/tw-in-js/typography. That package has a problem with overwriting the existing styles which this package fixed
