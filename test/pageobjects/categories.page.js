class CategoriesPage {
    get showAll() { return $('=Show All'); }

    // Computers Category
    get computers() { return $('#computers'); }
    get laptops() { return $('[subcategory="laptops"]'); }
    get tablets() { return $('[subcategory="tablets"]'); }
    get peripherials() { return $('[subcategory="peripherials"]'); }
    get accessories() { return $('[subcategory="accessories"]'); }

    // Games Category
    get games() { return $('#games'); }
    get pcGames() { return $('[subcategory="pc"]'); }
    get ps4Games() { return $('[subcategory="ps4"]'); }
    get ps5Games() { return $('[subcategory="ps5"]'); }
    get xbox360() { return $('[subcategory="xbox360"]'); }

    // Phones Category
    get smartphones() { return $('[subcategory="smartphones"]'); }
    get wisephones() { return $('[subcategory="wisephones"]'); }
    get hipster() { return $('[subcategory="hipster"]'); }
    get classic() { return $('[subcategory="classic"]'); }
}

module.exports = new CategoriesPage();