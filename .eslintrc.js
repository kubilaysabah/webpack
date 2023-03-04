module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				endOfLine: 'auto',
			},
		],
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/react-in-jsx-scope': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-else-return': 1,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
