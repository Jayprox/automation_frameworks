import {test} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { ProductsPage } from '../pages/ProductsPage'

// Update test case to be more dynamic
test('Test Case 8: Verify All Products and product detail page', async ({page}) => {
    const homePage = new HomePage(page)
    const productPage = new ProductsPage(page)

    // Navigate to Home Page
    await homePage.goToAutomationExercisePage()

    // Click on Products button
    await homePage.productsLink.click()

    // Verify user is navigated to ALL PRODUCTS page
    await productPage.isAllProductsHeaderVisible()

    // Products list is visible
    await productPage.isFirstProductVisible()

    // Click on 'View Product' on first product
    const productCard = page.locator('.choose > .nav > li > a').first()
    await productCard.click()

    // Verify detail page is displayed
    await productPage.isFirstProductInfoVisible()
    await productPage.isFirstProductPriceVisible()
})