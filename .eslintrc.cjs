module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json',
		createDefaultProgram: true
	},
	plugins: ['react-refresh'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'arrow-parens': ['error', 'always'],
		eqeqeq: ['error', 'always'],
		'max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreStrings: true
			}
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-filename-extension': 'off',
		'react/jsx-one-expression-per-line': 0,
		'react-hooks/exhaustive-deps': 'off',
		'import/no-unresolved': [
			'off',
			{
				caseSensitive: true
			}
		],
		'import/extensions': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
