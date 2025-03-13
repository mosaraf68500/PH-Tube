

function LoadCateregory(){
    // fetch
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data =>displayCategoris(data.categories))
}

// video loaded

function Loadvideo(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data=>DisplayVideo(data.videos))
}

// display category btn
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


// display videos

function DisplayVideo(videos){
    
    const videoContainer=document.getElementById('video-container');
    for(const video of videos){

        console.log(video)
        const videoDiv=document.createElement("div");
        videoDiv.innerHTML=`
        <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
    class="w-full h-full"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        `
        videoContainer.append(videoDiv);
    }
}
LoadCateregory();

Loadvideo();