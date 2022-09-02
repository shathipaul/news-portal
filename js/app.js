const loadCategory = async () =>{
const url = `https://openapi.programming-hero.com/api/news/categories`
const res = await fetch(url);
const data = await res.json();
displayCategory(data.data.news_category);
}


const displayCategory = categories =>{
    // console.log(categories)
    const categoryContainer = document.getElementById('category-div');
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


    const loadCard = async () =>{
        const url = `https://openapi.programming-hero.com/api/news/category/01`
        const res = await fetch(url);
        const data = await res.json();
        displayCard(data.data);
        }

        

    const displayCard = cards =>{
        // console.log(cards)
        const cardContainar = document.getElementById('card-info');
        cards.forEach(card => {
            console.log(card)
            const cardDiv = document.createElement('div')
            cardDiv.innerHTML =`
            <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-3 p-3">
                        <img src="${card.thumbnail_url}" alt="...">
                      </div>
                      <div class="col-md-9">
                        <div class="card-body p-3">
                          <h5 class="card-title p-3">${card.title}</h5>
                          <p class="card-text">${card.details.slice(0, 500)}</p>
                          <!-- Card Footer start -->
                          <div class="d-flex justify-content-between pt-4">
                            <div class="d-flex align-items-center">
                                <div>
                                <img src="${card.author.img}" class="rounded-circle img-fluid" style="width: 3rem;" alt="...">
                                </div>
                                <div>
                                    <p class="pt-4 ps-3">${card.author.name}</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <div>
                                    <i class="fa-solid fa-eye p-2"></i>
                                </div>
                                <div>
                                <h6 class=" pt-2">${card.total_view}</h6>
                                </div>
                            </div>
                            <div class="text-end pt-3">
                                <button type="button" class="btn btn-primary">Primary</button>
                            </div>
                          </div>
                          <!-- Card Footer End -->
                        </div>
                      </div>
                    </div>
            </div>
            `;
            cardContainar.appendChild(cardDiv)
        });
    }
    loadCard()
