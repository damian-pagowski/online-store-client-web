class Categories {
  showAll = element(by.linkText("Show All"));

  computers = element(by.id("computers"));
  laptops = element(by.css('[subcategory="laptops"]'));
  tablets = element(by.css('[subcategory="tablets"]'));
  peripherials = element(by.css('[subcategory="peripherials"]'));
  accessories = element(by.css('[subcategory="accessories"]'));

  games = element(by.id("games"));
  selectGames = () => this.games.click();

  pcGames = element(by.css('[subcategory="pc"]'));
  selectPcGames = () => this.pcGames.click();
  ps4Games = element(by.css('[subcategory="ps4"]'));
  ps5Games = element(by.css('[subcategory="ps5"]'));
  xbox360 = element(by.css('[subcategory="xbox360"]'));

  games = element(by.id("phones"));
  smartphones = element(by.css('[subcategory="smartphones"]'));
  wisephones = element(by.css('[subcategory="wisephones"]'));
  hipster = element(by.css('[subcategory="hipster"]'));
  classic = element(by.css('[subcategory="classic"]'));
}

module.exports = Categories;
