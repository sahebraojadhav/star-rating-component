const stars=document.querySelectorAll('.fa-star-o')

const selectedRatingValueText=document.querySelector(".selected-rating-value")

let currentTotalSelectedStars=-1;

stars.forEach((starItem,index)=>{
    starItem.dataset.rating=index+1;
    starItem.addEventListener('mouseover',hadleMouseOver);
    starItem.addEventListener('click',handleOnClick);
    starItem.addEventListener('mouseleave',handleMouseLeave);

})

function hadleMouseOver(event){
    const currentRatingValue=event.target.dataset.rating;
    if(!currentRatingValue) return;
    else handleUpdateRatingState(currentRatingValue);
}
console.log(stars.dataset)

function handleUpdateRatingState(getCurrentRatingValue){
      for(let i=0;i<5;i++){
        if(i<getCurrentRatingValue){
            stars[i].classList.replace('fa-star-o','fa-start')
        }
            else{
            stars[i].classList.replace('fa-star','fa-star-o')
        }
        
      }
}

function handleOnClick(event){

}

function handleMouseLeave(event ){
     
}