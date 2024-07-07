import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright' // 1
;[
  { testPage: 'localhost:3001' },
  { testPage: 'localhost:3001/about-me' },
  { testPage: 'localhost:3001/places' },
  { testPage: 'localhost:3001/places/blue-joanna' },
].forEach(({ testPage }) => {
  test(`${testPage} should not have any automatically detectable accessibility issues`, async ({
    page,
  }) => {
    await page.goto(testPage)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze() // 4

    expect(
      accessibilityScanResults.violations.filter(
        violation => violation.impact === 'critical' || violation.impact === 'serious',
      ),
    ).toEqual([])
  })
})
