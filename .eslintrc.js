// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
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
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "never",

        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": "off",
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  globals: {
    React: true,
    NodeJS: true,
    setTimeout: true,
    clearTimeout: true,
  },
};