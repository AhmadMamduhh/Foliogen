/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nbz-web-example/blob/main/docs/about-linters.md
 */

module.exports = {
	root: true,
	extends: [
		// Extend the monorepo default configuration
		'../eslint-config-custom/index',
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
	},
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
};
