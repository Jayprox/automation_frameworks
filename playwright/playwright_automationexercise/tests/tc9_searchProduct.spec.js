import {test} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { ProductsPage } from '../pages/ProductsPage'

// Update test case to be more dynamic
test('Test Case 9: Search Product', async ({page}) => {
    const homePage = new HomePage(page)
    const productPage = new ProductsPage(page)

    await homePage.goToAutomationExercisePage()

    // Click on Products button
    await homePage.productsLink.click()

    // Verify user is navigated to ALL PRODUCTS page
    await productPage.isAllProductsHeaderVisible()

    // Products list is visible
    await productPage.isFirstProductVisible()

    //Verify SEARCH PRODUCTS is visible
    await productPage.fillSearchProductTextbox()

    await productPage.searchButton.click()

    // Verify the products related to search are visible
    await productPage.issearchedProductVisible()


})