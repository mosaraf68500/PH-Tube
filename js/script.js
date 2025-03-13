

function LoadCateregory(){
    // fetch
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data =>displayCategoris(data.categories))
}


function displayCategoris(categories){
    const categoryContainer=document.getElementById('category-container');
    for(cat of categories){
        const categoryDiv=document.createElement('div');
        categoryDiv.innerHTML=`
                    <button class="btn btn-sm hover:bg-red-600 hover:text-white">${cat.category}</button>

        
        `
        categoryContainer.append(categoryDiv);
    }
}
LoadCateregory();