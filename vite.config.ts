import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    dir: 'src',
    setupFiles: ['node_modules/reflect-metadata/Reflect.js'],
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          dir: './src/services',
        },
      },
      {
        extends: true,
        test: {
          name: 'e2e',
          dir: './src/controllers',
          environment:
            './prisma/vitest-environment-prisma/prisma-test-envionroment.ts',
        },
      },
    ],
  },
})
