const loadCategory = async () =>{
const url = `https://openapi.programming-hero.com/api/news/categories`
try{
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category);
}
catch (error){
    console.log(error);
}
}

const displayCategory = categories =>{
    const categoryContainer = document.getElementById('category-div');
        categories.forEach(category => {
        const categoryDiv = document.createElement('li');
        categoryDiv.innerHTML = `
        <a onclick="loadCard('${category.category_id}')">${category.category_name}</a>
        `;
        categoryContainer.appendChild(categoryDiv)
    });
}
loadCategory()


    const loadCard = async (id) =>{
        const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            displayCard(data.data);
        }
        catch (error){
            console.log(error);
        }
    }
    
    const displayCard = cards =>{
        // console.log(cards)
        const numberOfPost = document.getElementById('number-of-post');
        numberOfPost.innerText = cards.length;

        const noNews = document.getElementById('no-news')
        if(cards.length === 0){
            noNews.classList.remove('d-none')
        }
        else{
            noNews.classList.add('d-none')
        }

        const cardContainar = document.getElementById('card-info');
        cardContainar.innerHTML = '';

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
                          <div class="d-flex justify-content-around pt-4">
                            <div class="d-flex align-items-center">
                                <div>
                                <img src="${card.author.img}" class="rounded-circle img-fluid" style="width: 3rem;" alt="...">
                                </div>
                                <div>
                                    <p class="pt-4 ps-3">${card.author.name ? card.author.name : 'Not Found' }</p>
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
                            <button onclick= "loadCardDetails('${card._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Details</button>
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
        // const sortByViews = (post) => {
        //     post.sort((a, b) => b.total_view - a.total_view);
        //   };
    }
    
    const loadCardDetails = async (code) =>{
        const url = `https://openapi.programming-hero.com/api/news/${code}`
        try{
            const res = await fetch(url);
            const data = await res.json();
            displayCardDetail(data.data[0])
        }
       catch(error){
        console.log(error);
       }
    }

    const displayCardDetail = details =>{
        // console.log(details[0])
        const displayModalcontainer = document.getElementById('card-modal');
        const modalDiv = document.createElement('div')
        modalDiv.classList.add('modal-content')
        modalDiv.innerHTML =`
        <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img class= "w-100" src=${details.image_url} alt="">
        <h5 class="modal-title" id="exampleModalLabel">${details.title}</h5>
        <p>${details.details}</p>
        </div>
        <div class="d-flex justify-content-around pt-4">
                            <div class="d-flex align-items-center">
                                <div>
                                <img src="${details.author.img}" class="rounded-circle img-fluid" style="width: 3rem;" alt="...">
                                </div>
                                <div>
                                    <p class="pt-4 ps-3">${details.author.name}</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <div>
                                    <i class="fa-solid fa-eye p-2"></i>
                                </div>
                                <div>
                                <h6 class=" pt-2">${details.total_view}</h6>
                                </div>
                            </div>
                          </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        `;

       displayModalcontainer.appendChild(modalDiv);
    
    }

    const toggleSpinner = isLoading =>{
        const loaderSeletor = document.getElementById('spinner');
        if(isLoading){
            loaderSeletor.classList.remove('d-none');
        }
        else{
            loaderSeletor,classList.add('d-none')
        }
    }
        
    
   
    