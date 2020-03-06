class Categories {
  showAll = element(by.linkText("Show All"));
  // computers = element(by.buttonText("Computers"));
 
   computers = element(by.xpath("//button[text()='Computers']"));

 
  laptops = element(by.css('[subcategory="laptops"]'));
  videoGames = element(by.buttonText("Video Games"));
  pcGames = element(by.css('[subcategory="pc"]'));
  ps4Games = element(by.css('[subcategory="ps4"]'));
  cellPhones = element(by.buttonText("Cell Phones"));
  smartphones = element(by.css('[subcategory="smartphones"]'));
}

module.exports = Categories;
