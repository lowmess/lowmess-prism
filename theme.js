const theme = {
  plain: {
    backgroundColor: '#39342d',
    color: '#f9f9f8',
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
      styles: {
        color: '#938776',
      },
    },
    {
      types: ['punctuation'],
      styles: {
        color: '#a89e90',
      },
    },
    {
      types: ['operator'],
      styles: {
        color: '#f2f99d',
      },
    },
    {
      types: ['namespace'],
      styles: {
        opacity: 0.8,
      },
    },
    {
      types: ['property', 'keyword', 'tag'],
      styles: {
        color: '#f2930d',
      },
    },
    {
      types: ['class-name'],
      styles: {
        color: '#f2f99d',
        textDecoration: 'underline',
      },
    },
    {
      types: ['boolean', 'constant'],
      styles: {
        color: '#adfada',
      },
    },
    {
      types: ['symbol', 'deleted'],
      styles: {
        color: '#db0bc9',
      },
    },
    {
      types: ['number'],
      styles: {
        color: '#bb68f6',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      styles: {
        color: '#f67468',
      },
    },
    {
      types: ['variable'],
      styles: {
        color: '#85b4f8',
      },
    },
    {
      types: ['entity'],
      styles: {
        color: '#f2f99d',
      },
    },
    {
      types: ['url'],
      styles: {
        color: '#f20ddf',
      },
    },
    {
      types: ['atrule', 'attr-value'],
      styles: {
        color: '#adfada',
      },
    },
    {
      types: ['function'],
      styles: {
        color: '#85b4f8',
      },
    },
    {
      types: ['regex'],
      styles: {
        color: '#f67468',
      },
    },
    {
      types: ['important'],
      styles: {
        color: '#f2200d',
        fontWeight: 700,
      },
    },
    {
      types: ['bold'],
      styles: {
        fontWeight: 700,
      },
    },
    {
      types: ['italic'],
      styles: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      styles: {
        cursor: 'help',
      },
    },
    {
      types: ['string'],
      languages: ['css', 'sass', 'scss', 'less'],
      styles: {
        color: '#0df293',
      },
    },
  ],
}

export default theme
