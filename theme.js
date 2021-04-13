const palette = {
  black: 'hsl(35, 10%, 15%)',
  gray: 'hsl(35, 10%, 55%)',
  lightGray: 'hsl(35, 10%, 75%)',
  white: 'hsl(35, 10%, 95%)',
  orange: 'hsl(35, 90%, 50%)',
  red: 'hsl(5, 90%, 70%)',
  ice: 'hsl(185, 85%, 75%)',
  blue: 'hsl(215, 85%, 75%)',
  olive: 'hsl(125, 90%, 75%)',
  gold: 'hsl(65, 40%, 60%)',
  lavender: 'hsl(275, 90%, 80%)',

  warning: 'hsl(5, 90%, 50%)',
}

const theme = {
  plain: {
    backgroundColor: palette.black,
    color: palette.white,
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    tabSize: '2',
    hyphens: 'none',
    overflow: 'auto',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: palette.gray,
        fontStyle: 'italic',
      },
    },
    {
      types: ['atrule', 'punctuation'],
      style: {
        color: palette.lightGray,
      },
    },
    {
      types: ['operator'],
      style: {
        color: palette.gold,
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.8,
      },
    },
    {
      types: ['keyword'],
      style: {
        color: palette.red,
      },
    },
    {
      types: ['class-name'],
      style: {
        color: palette.lightGray,
      },
    },
    {
      types: ['class-name'], // `class-name` overrules `tag` in JSX
      languages: ['jsx', 'tsx'],
      style: {
        color: palette.blue,
      },
    },
    {
      types: ['tag'],
      style: {
        color: palette.blue,
      },
    },
    {
      types: ['number'],
      style: {
        color: palette.ice,
      },
    },
    {
      types: ['attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: palette.red,
      },
    },
    {
      types: ['string'],
      languages: ['css', 'sass', 'scss', 'less'],
      style: {
        color: palette.olive,
      },
    },
    {
      types: ['variable'],
      style: {
        color: palette.lavender,
      },
    },
    {
      types: ['entity'],
      style: {
        color: palette.gold,
      },
    },
    {
      types: ['selector', 'attr-value'],
      style: {
        color: palette.orange,
      },
    },
    {
      types: ['function'],
      style: {
        color: palette.lavender,
      },
    },
    {
      types: ['regex'],
      style: {
        color: palette.red,
      },
    },
    {
      types: ['important'],
      style: {
        color: palette.warning,
        fontWeight: '700',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: '700',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
  ],
}

export default theme
