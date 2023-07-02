const accessKey= 'aCOe-hMbprYkTo5UjLwGzauAuPrjSliDQFq1-EZe3ts';
// const secretKey='rG_wDtY1uR8jvs0IDDbvHAAtD6_5_Wr10Af0ynHwnyU';

const formEl=document.querySelector("form");
const inputEl=document.getElementById("search-input");
const showMore= document.getElementById("show-more-button");
const searchResults= document.querySelector(".search-results");

let inputData= "";
let page=1;

 async function searchImages()
{
    inputData=inputEl.value;

     const url=`https://api.unsplash.com/search/photos?page=${page}
     &query=${inputData}&client_id=aCOe-hMbprYkTo5UjLwGzauAuPrjSliDQFq1-EZe3ts`;

     const response = await fetch(url);
     const data = await response.json();

     const results= data.results;

     console.log(results);
    


     if(page===1)
     {
        searchResults.innerHTML="";
     }

     results.map((result)=>
     {

        const imageWrapper= document.createElement("div")

        imageWrapper.classList.add("search-result")
        const image=document.createElement("img")
        image.src=result.urls.small
        image.alt= result.alt_description
        const imageLink=document.createElement("a")
        imageLink.href=result.links.html
        imageLink.target="_blank"
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper)
     });

     page++;
     if(page>1)
     {
        showMore.style.display="block"
     }

    }


    formEl.addEventListener("submit", (event)=>
    {

        event.preventDefault()
        page=1;
        searchImages()
    })

    showMore.addEventListener("click", ()=>
    {

        searchImages()
    })

