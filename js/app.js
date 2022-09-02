const loadCategory = async () =>{
const url = `https://openapi.programming-hero.com/api/news/categories`
const res = await fetch(url);
const data = await res.json();
displayCategory(data.data.news_category);
}


const displayCategory = categories =>{
    // console.log(categories)
    const categoryContainer = document.getElementById('category-div');

    // const categoryDiv = document.createElement('ul');
    // categoryDiv.classList.add("list-unstyled", "d-flex", "justify-content-between", "g-3")
    
        categories.forEach(category => {
        // console.log(category)
        const categoryDiv = document.createElement('li');
        categoryDiv.innerText = `
        ${category.category_name}
        `;
        categoryContainer.appendChild(categoryDiv)
    });
}
loadCategory()