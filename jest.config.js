module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/polyfills/',
    '<rootDir>/public/'
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css|jpg|jpeg|png|svg)$': 'identity-obj-proxy',
    '^_components(.*)$': '<rootDir>/src/components$1',
    '_components': '<rootDir>/src/components/index.tsx',
    '_helpers': '<rootDir>/src/helpers/index.ts',
    '_views': '<rootDir>/src/views/index.tsx',
    '_svg': '<rootDir>/src/svg/index.tsx',
    '^_assets(.*)$': '<rootDir>/./public/assets$1'
  },
  testEnvironment: 'jsdom',
}
