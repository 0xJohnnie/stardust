module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  plugins: [require.resolve('prettier-plugin-organize-imports')],
  //organizeImportsSkipDestructiveCodeActions: true,

  /*
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^(next/(.*)$)|^(next$)', // Imports by next
    '^(mantine/(.*)$)|^(mantine$)', // Imports by "mantine"
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',

    'next-seo.config',
    '^components/(.*)$',
    '^utils/(.*)$',

    '^assets/(.*)$',
    '^@fontsource/(.*)$',
    '^[./]', // Other imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  */
};
