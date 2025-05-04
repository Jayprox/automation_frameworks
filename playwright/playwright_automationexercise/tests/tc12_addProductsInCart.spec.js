import {test} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { ProductsPage } from '../pages/ProductsPage'

test('Test Case 12: Add Products in Cart', async ({page}) => {
    const homePage = new HomePage(page)
    const productPage = new ProductsPage(page)

    await homePage.goToAutomationExercisePage()

    // Click on Products button
    await homePage.productsLink.click()

    // Verify user is navigated to ALL PRODUCTS page
    await productPage.isAllProductsHeaderVisible()

    // Products list is visible
    await productPage.isFirstProductVisible()

    // Hover over product
    await productPage.firstProduct.hover()
    const productCard = page.locator('.overlay-content > .btn').first()
    await productCard.click()

    // Check the product is added
    await productPage.isaddedTextVisible()
    await productPage.isaddedToCartTextVisible()
    await productPage.productModal.click()

    await productPage.isBlueTopVisible()
    await productPage.isfirstProductButtonVisible()
    await productPage.isCartPriceVisible()
    await productPage.isCartTotalVisible()
})