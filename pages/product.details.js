export class ProductDetails {
  constructor(page) {
    this.page = page;
  }

  // locators
  productName = () => this.page.locator(".base");

  async getProductName() {
    return await this.productName().innerText();
  }
}
