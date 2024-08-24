import { APP_URL } from './constants';


export class HomePage {

  constructor(page) {
    this.page = page;
    this.homePageUrl = APP_URL;
  }

  // locators
  whatIsNewBTN = () => this.page.locator("#ui-id-3")

  async navigateToHomePage() {
    await this.page.goto(this.homePageUrl);
  }

}
