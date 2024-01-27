export class HomePage {
  constructor(page) {
    this.page = page;
    this.homePageUrl = "https://magento.softwaretestingboard.com/";
  }

  // locators
  whatIsNewBTN = () => this.page.locator("#ui-id-3");
  hotSellersProducts = () => this.page.locator(".product-item");

  async navigateToHomePage() {
    await this.page.goto(this.homePageUrl);
  }

  async getNumberOfHotSellers() {
    return await this.hotSellersProducts().count();
  }

  async getNameOfHotSeller(hotSellerIndex) {
    const productName = (
      await this.hotSellersProducts()
        .locator(`nth=${hotSellerIndex}`)
        .innerText()
    ).split("\n")[0];
    return productName;
  }

  async clickOnHotSellerProduct(indexOfSelector) {
    await this.hotSellersProducts().locator(`nth=${indexOfSelector}`).click();
  }
}
