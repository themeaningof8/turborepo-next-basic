import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({
    page
  }) => {
    await page.goto('https://www.kazkiueda.com/')
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })
})
