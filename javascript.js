
let menuList=document.getElementById('menuList');
menuList.style.display="none";
function toggleMenu(){
    if (menuList.style.display=="none") {
        menuList.style.display="block" ;
    }
    else{
        menuList.style.display="none" ;
    }
} 



let footerList_1=document.getElementById('footerlist-1');
let footerList_2=document.getElementById('footerlist-2');
let footerList_3=document.getElementById('footerlist-3');
let footerList_4=document.getElementById('footerlist-4');
let footerList_5=document.getElementById('footerlist-5');
let footerList_6=document.getElementById('footerlist-6');
let footerList_7=document.getElementById('footerlist-7');
let footerList_8=document.getElementById('footerlist-8');
let footerList_9=document.getElementById('footerlist-9');
let footerList_10=document.getElementById('footerlist-10');


function showFooterList(footerLists){
    
    if(footerLists.style.display=="none"){
        footerLists.style.display="block"
    }
    else{
        footerLists.style.display="none"
    }
}



    // Access the Images
        let slideImages = document.querySelectorAll('#slide');
        console.log(slideImages);
    // Access the next and prev buttons
        let next = document.querySelector('.next');
        console.log(slideImages);
        
        let prev = document.querySelector('.prev');
    // Access the indicators
        let dots = document.querySelectorAll('.dot');
    
        var counter = 0;
    
    // Code for next button
        next.addEventListener('click', slideNext);
        function slideNext(){
        slideImages[counter].style.animation = 'next1 0.6s ease-in forwards';
        if(counter >= slideImages.length-1){
            counter = 0;
        }
        else{
            counter++;
        }
        slideImages[counter].style.animation = 'next2 0.6s ease-in forwards';
        indicators();
        }
    
    // Code for prev button
        prev.addEventListener('click', slidePrev);
        function slidePrev(){
        slideImages[counter].style.animation = 'prev1 0.6s ease-in forwards';
        if(counter == 0){
            counter = slideImages.length-1;
        }
        else{
            counter--;
        }
        slideImages[counter].style.animation = 'prev2 0.6s ease-in forwards';
        indicators();
        }
    
    // Auto slideing
        function autoSliding(){
            deletInterval = setInterval(timer, 2000);
            function timer(){
                slideNext();
                indicators();
            }
        }
        autoSliding();
    
    // Stop auto sliding when mouse is over
        // const container = document.querySelector('.slide-container');
        // container.addEventListener('mouseover', function(){
        //     clearInterval(deletInterval);
        // }); 
    
    // Resume sliding when mouse is out
        // container.addEventListener('mouseout', autoSliding); 
    
    // Add and remove active class from the indicators
        function indicators(){
            for(i = 0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace(' active', '');
            }
            dots[counter].className += ' active';
        }
    
    // Add click event to the indicator
        function switchImage(currentImage){
            currentImage.classList.add('active');
            var imageId = currentImage.getAttribute('attr');
            if(imageId > counter){
            slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
            counter = imageId;
            slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
            }
            else if(imageId == counter){
                return;
            }
            else{
            slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
            counter = imageId;
            slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
            }
            indicators();
        }


