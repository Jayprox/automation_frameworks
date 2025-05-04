import { expect } from '@playwright/test'

export class ProductsPage {

    constructor(page) {
        this.page = page
        this.productHeaderText = page.getByText('ALL PRODUCTS')
        this.firstProduct = page.getByRole('heading', { name: 'Rs. 500' }).first()
        this.firstProductInfo = page.locator('.product-information >> h2').getByText('Blue Top')
        this.blueTopText = 'Blue Top'
        this.winterTopText = 'Winter Top'
        this.firstProductDetailInfo = page.locator('.product-information >> span >> span')
        this.firstProductPrice = page.locator('.product-information >> span >> span').getByText('Rs. 500')
        this.firstProductPriceText = 'Rs. 500'
        this.searchButton = page.locator('#submit_search')
        this.addedText = page.getByText('Added!')
        this.addedToCartText = page.getByText('Your product has been added to cart.')
        this.productModal = page.locator('.modal-body').locator('p').nth(1).locator('a')
        this.blueTopProduct = page.getByRole('link', {name: 'Blue Top'})
        this.cartPrice = page.locator('.cart_price')
        this.cartTotal = page.locator('.cart_total')
        this.firstProductButton = page.getByRole('button', {name: '1'})
        this.searchProductTextbox = page.getByRole('textbox', { name: 'Search Product' })
        this.searchedProductText = page.locator('.product-overlay').getByText('Rs. 600')
    }

    async isAllProductsHeaderVisible() {
        await expect(this.productHeaderText).toBeVisible()
    }

    async isFirstProductVisible() {
        await expect(this.firstProduct).toBeVisible()
    }

    async isFirstProductInfoVisible() {
        await expect(this.firstProductInfo).toBeVisible()
    }

    async isFirstProductPriceVisible() {
       await expect(this.firstProductPrice).toBeVisible()
    }

    async isaddedTextVisible() {
        await expect(this.addedText).toBeVisible()
    }
    
    async isaddedToCartTextVisible() {
        await expect(this.addedToCartText).toBeVisible()
    }

    async isBlueTopVisible() {
        await expect(this.blueTopProduct).toBeVisible()
    }

    async isCartPriceVisible() {
        await expect(this.cartPrice).toHaveText(this.firstProductPriceText)
    }

    async isCartTotalVisible() {
        await expect(this.cartTotal).toHaveText(this.firstProductPriceText)
    }

    async isfirstProductButtonVisible() {
        await expect(this.firstProductButton).toBeVisible()
    }

    async fillSearchProductTextbox() {
        await this.searchProductTextbox.fill(this.winterTopText)
    }

    async issearchedProductVisible() {
        await expect(this.searchedProductText).toBeVisible()
    }
}