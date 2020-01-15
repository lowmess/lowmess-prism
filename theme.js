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
      style: {
        color: '#938776',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#a89e90',
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#f2f99d',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.8,
      },
    },
    {
      types: ['property', 'keyword', 'tag'],
      style: {
        color: '#f2930d',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#f2f99d',
        textDecoration: 'underline',
      },
    },
    {
      types: ['boolean', 'constant'],
      style: {
        color: '#adfada',
      },
    },
    {
      types: ['symbol', 'deleted'],
      style: {
        color: '#db0bc9',
      },
    },
    {
      types: ['number'],
      style: {
        color: '#bb68f6',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#f67468',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#85b4f8',
      },
    },
    {
      types: ['entity'],
      style: {
        color: '#f2f99d',
      },
    },
    {
      types: ['url'],
      style: {
        color: '#f20ddf',
      },
    },
    {
      types: ['atrule', 'attr-value'],
      style: {
        color: '#adfada',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#85b4f8',
      },
    },
    {
      types: ['regex'],
      style: {
        color: '#f67468',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#f2200d',
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
    {
      types: ['string'],
      languages: ['css', 'sass', 'scss', 'less'],
      style: {
        color: '#0df293',
      },
    },
  ],
}

export default theme
