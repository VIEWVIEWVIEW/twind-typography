# twind-typography

> A plugin to add support for the `prose` class from tailwind in twind

## Usage

In your twind config

```ts
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
