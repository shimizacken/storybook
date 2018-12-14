const jestConfig = {
    verbose: true,
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/file-mock.js',
      '^.+\\.s?css$': 'identity-obj-proxy',//for CSS modules
      '^.+\\.isvg$': '<rootDir>/__mocks__/svg-mock.tsx'
    },
    testPathIgnorePatterns: ['/node_modules/', '/generators/'],
    setupFiles: ['./jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx', 'json'],
    globals: {
      __DEV__: true,
      PRODUCTION: true,
      DEVELOPMENT: false
    }
   };
   
   module.exports = jestConfig;