module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },

    settings: {
        react: {
            version: 'detect',
        },
    },
};