
function removeActiveBtn(){
    const removebtn=document.getElementsByClassName('active');
    for(const btn of removebtn){
        btn.classList.remove("active");
    }
    console.log(removebtn)

}
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
    .then(data=>{
        document.getElementById('all-btn').classList.add('active')
        DisplayVideo(data.videos)
    })
}


// load video by id

const loadCategoryVideo=(id)=>{
    const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
        
         removeActiveBtn();

        const clickBtn=document.getElementById(`btn-${id}`)
        console.log(clickBtn)
        clickBtn.classList.add("active")
        DisplayVideo(data.category)
    })
    // console.log(url);

}



// display category btn
function displayCategoris(categories){
    const categoryContainer=document.getElementById('category-container');
    for(cat of categories){
        const categoryDiv=document.createElement('div');
        categoryDiv.innerHTML=`
                    <button id="btn-${cat.category_id}" onclick="loadCategoryVideo(${cat.category_id})" class="btn btn-sm hover:bg-red-600 hover:text-white">${cat.category}</button>

        
        `
        categoryContainer.append(categoryDiv);
    }
}


// display videos

function DisplayVideo(videos){
    
    const videoContainer=document.getElementById('video-container');
    videoContainer.innerHTML="";
    if(videos.length==0){
        videoContainer.innerHTML=` <div class="col-span-full py-10 flex flex-col justify-center items-center">
                <img src="./assets/Icon.png" alt="">
                <h1 class="text-2xl font-semibold">Oops!! Sorry, There is no content here</h1>
            </div>`
    }
    for(const video of videos){

        // console.log(video)
        const videoDiv=document.createElement("div");
        videoDiv.innerHTML=`
       <div class="card bg-base-100">
                <figure class="relative">
                    <img class="w-full h-[150px] object-cover rounded-sm"
                        src=${video.thumbnail} 
                        alt="Video Thumbnail" />
                    <span class="text-sm p-1 rounded-sm absolute bottom-2 right-2 bg-black text-white">
                        3hrs 56 min ago
                    </span>
                </figure>
        
                <div class="flex py-5 gap-3 px-4 ">
                    <!-- Avatar -->
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
                            <img src=${video.authors[0].profile_picture}>
                        </div>
                    </div>
        
                    <!-- Title & Info -->
                    <div class="flex flex-col">
                        <h1 class="text-sm font-bold">${video.title}</h1>
                        <div class="flex items-center gap-2">
                            <h1 class="text-sm text-gray-400">${video.authors[0].profile_name}</h1>
                            <img class="w-4" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                        </div>
                        <p class="text-sm text-gray-400">${video.others.views} views</p>
                    </div>
                </div>
            </div>

        `
        videoContainer.append(videoDiv);
    }
}
LoadCateregory();

