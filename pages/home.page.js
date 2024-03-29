export class HomePage {

  constructor(page) {
    this.page = page;
    this.homePageUrl = 'https://magento.softwaretestingboard.com/';
  }

  // locators
  whatIsNewBTN = () => this.page.locator("#ui-id-3")

  async navigateToHomePage() {
    await this.page.goto(this.homePageUrl);
  }
}

