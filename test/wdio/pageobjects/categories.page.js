class CategoriesPage {

    get showAll() { return $('=Show All'); }

    getCategory(categoryName) {
        return $(`#${categoryName}`);
    }

    getSubcategory(subcategoryName) {
        return $(`#${subcategoryName}`);
    }

}

module.exports = new CategoriesPage();