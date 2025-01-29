const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach((item) => {
    const categoriesTitle = item.querySelector('h2').textContent;
    console.log('Category:', categoriesTitle);
    const categoriesQuantity = item.querySelectorAll('li').length;
    console.log('Elements:', categoriesQuantity);
});