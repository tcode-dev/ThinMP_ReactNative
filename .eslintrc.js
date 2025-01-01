// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['/dist/*'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  "globals": {
    "React": true,
  }
};