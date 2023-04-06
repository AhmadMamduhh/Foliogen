/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/gng-web-example/blob/main/docs/about-linters.md
 */

module.exports = {
	root: true,
	ignorePatterns: ['dist', '*.config.ts'],
	extends: [
		// Extend the monorepo default configuration
		'../../packages/eslint-config-custom/index',
		// Add specific rules for react
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	rules: {
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'react/no-unescaped-entities': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
	},
	overrides: [
		{
			// For performance run jest/recommended on test files, not regular code
			files: ['**/*.test.{ts,tsx}'],
			extends: ['plugin:testing-library/react'],
		},
	],
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
};
