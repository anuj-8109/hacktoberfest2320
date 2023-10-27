const accessKey = "aEfn8IKe4XkMecE4Sir8r2Y20cv6_mlvfODHH2RCacs";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("Search-input");
const SearchResult = document.querySelector(".Search-result");
const showMore = document.getElementById("show-more-button");
let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results; // Corrected property name to 'results'

    if (page === 1) {
        SearchResult.innerHTML = "";
    }

    results.forEach((result) => { // Changed map to forEach
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);

        SearchResult.appendChild(imageWrapper);
    });

    page++;

    if (page >= 2) { // Changed '=>' to '>=' for the condition
        showMore.style.display = "block";
    } else {
        showMore.style.display = "none"; // Hide the "Show More" button when page is 1
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});




// const accessKey = "PechfhOF3P9y3YbVKq3NSbOqetzcCOafkMuCX_qVCkA";

// const formEl= document.querySelector("form");
// const inputEl= document.getElementById("Search-input");

// const SearchResult=document.querySelector(".Search-result");
// const showMore = document.getElementById("show-more-button");


// let inputData= " ";
// let page =1;

// async function searchImages(){
//     inputData = inputEl.value;
//     const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&clint_id=${accessKey}`;

//     const responce =await fetch(url);
//     const data = await responce.json();
    
//     const results =data.results;


// if(page === 1){
//     SearchResult.innerHTML="";
// }
// results.map((result)=>{
// const imageWapper= document.createElement("div");
// imageWapper.classList.add("search-result");
// const image = document.createElement("img");
// image.src=result.urls.small;
// image.alt =result.alt_descripation;
// const imageLink = document.createElement("a");
// imageLink.href = result.links.html;
// imageLink.target="_blank";
// imageLink.textContent=result.alt_descripation;


// imageWapper.appendChild(image);
// imageWapper.appendChild(imageLink);
// SearchResult.appendChild(imageWapper);
// });

// page++;
// if(page>1){
//     showMore.style.display= "block";
// }
// }

// formEl.addEventListener("submit",(event)=>{
//    event.preventDefault();
//    page=1;
//    searchImages();


// });


// showMore.addEventListener("click",()=>{
    
//     searchImages();

// });


// const accessKey = "aEfn8IKe4XkMecE4Sir8r2Y20cv6_mlvfODHH2RCacs";

// const formEl= document.querySelector("form");
// const inputEl= document.getElementById("Search-input");
// const SearchResult=document.querySelector(".Search-result");
// const showMore = document.getElementById("show-more-button");
// let inputData= " ";
// let page =1;
// async function searchImages(){
//     inputData = inputEl.value;
//     const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    
//     const responce =await fetch(url);
//     const data = await responce.json();
    
//     const result =data.result;
//     if(page === 1){
//         SearchResult.innerHTML="";
//     }
    
//     result.map((result) => {
//         const imageWrapper = document.createElement("div");
//         imageWrapper.classList.add("search-result");
//         const image = document.createElement("img");
//         image.src = result.urls.small;
//         image.alt = result.alt_description; // Typo: should be alt_description
//         const imageLink = document.createElement("a");
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";
//         imageLink.textContent = result.alt_description; // Typo: should be alt_description
//         imageWrapper.appendChild(image);
//         imageWrapper.appendChild(imageLink);
    
//         // Assuming SearchResult is a DOM element you've defined earlier
//         SearchResult.appendChild(imageWrapper); // Corrected: append imageWrapper, not result
//     });
    
//     page++;
// if(page=>1){
//     showMore.style.display= "block";
// }
// }
// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     page=1;
//     searchImages();
 
// });


// showMore.addEventListener("click",()=>{
    
//     searchImages();

// });