import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';

export default [
  {
    // Define os arquivos a serem lintados
    files: ['server/**/*.ts'],
    // Define quais arquivos ou pastas devem ser ignorados
    ignores: ['.config/', 'dist/', 'tsconfig.json'],
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          semi: false,
        },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
    },
  },
];
