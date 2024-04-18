/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

// Hack to get around eslint's inability to share nested plugin dependencies
// See https://github.com/eslint/eslint/issues/3458

require('@rushstack/eslint-patch/modern-module-resolution');
const path = require('path');

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['plugin:@liferay/portal'],
	globals: {
		MODULE_PATH: true,
		configuration: true,
		fragmentElement: true,
		fragmentNamespace: true,
		layoutMode: true,
	},
	plugins: ['@liferay'],
	rules: {
		'@liferay/empty-line-between-elements': 'off',
		'@liferay/import-extensions': 'off',
		'@liferay/portal/deprecation': 'off',
		'@liferay/portal/no-document-cookie': 'off',
		'@liferay/portal/no-explicit-extend': 'off',
		'@liferay/portal/no-global-fetch': 'off',
		'@liferay/portal/no-global-storage': 'off',
		'@liferay/portal/no-loader-import-specifier': 'off',
		'@liferay/portal/no-localhost-reference': 'off',
		'@liferay/portal/no-react-dom-create-portal': 'off',
		'@liferay/portal/no-react-dom-render': 'off',
		'@liferay/portal/no-side-navigation': 'off',
		'@liferay/portal/unexecuted-ismounted': 'off',
		'no-empty': ['error', {allowEmptyCatch: true}],
		'notice/notice': [
			'error',
			{
				nonMatchingTolerance: 0.7,
				onNonMatchingHeader: 'replace',
				templateFile: path.join(__dirname, 'copyright.js'),
			},
		],
	},
};
