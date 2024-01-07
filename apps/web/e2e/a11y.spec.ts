import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('should not have any automatically detectable WCAG AA violations', async ({
  page
}, testInfo) => {
  await page.goto('http://localhost:3000')

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2aa', 'wcag21aa'])
    .analyze()

  expect(accessibilityScanResults.violations).toEqual([])
})
