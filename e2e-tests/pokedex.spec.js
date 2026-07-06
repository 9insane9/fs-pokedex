const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' }) //does not work without waitUntil
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })

  test('page for specific pokemon can be opened', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' }) //does not work without waitUntil
    await page.getByText('ivysaur').click({ force: true }) //weird but ok?

    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
