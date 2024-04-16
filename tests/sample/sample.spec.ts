/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {expect, test} from '@playwright/test';

test('title starts with Digital Experience', async ({page}) => {
	await page.goto('/');

	await expect(page).toHaveTitle('Digital Experience Software Tailored to Your Needs - Liferay');
});
