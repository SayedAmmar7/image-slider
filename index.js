const images = [
    'https://images.unsplash.com/photo-1674763766874-a779ba110133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' ,
    'https://images.unsplash.com/photo-1675191475848-5dc8ec4bfafa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' ,
    'https://images.unsplash.com/photo-1675104180341-4b075869b3bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    'https://images.unsplash.com/photo-1674856320941-7e442d7c4799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    'https://images.unsplash.com/photo-1675068766426-eb0f1a065314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1674768455650-a88322dd5353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' ,

];

const n= images.length;
const flexcontainer = document.getElementById('flex-container');
const leftbutton = document.getElementById('left-btn');
const rightbutton = document.getElementById('right-btn');
const carouselNav = document.getElementById('carousel-nav');

const containerwidth = 80 ;
const flexcontainerwidth = n*containerwidth;
flexcontainer.style.width = flexcontainerwidth;

for(let i = 0; i<n; i++) {
    const newimg = document.createElement('img');
    newimg.src = images[i];
    newimg.classList.add('img-style');
flexcontainer.appendChild(newimg);

const dotdiv = document.createElement('div');
dotdiv.classList.add('carousel-dot');
carouselNav.appendChild(dotdiv);
dotdiv.addEventListener('click',() => {
  const index =  [...carouselNav.children].indexOf(event.target);
  
  showimg(index)
})


}

let currentposition = 0;

leftbutton.addEventListener('click',()=>{
    if(currentposition>0){
        
        showimg(currentposition-1);
    }
    else{
        showimg(n-1);
    }
});

rightbutton.addEventListener('click',()=>{
    if(currentposition < n-1 ){
        
        showimg(currentposition+1);
    }
    else{
        showimg(0)
    }
});

function showimg(position){ 

    const prevdot = carouselNav.children[currentposition];
    prevdot.classList.remove('active'); 
    currentposition = position;
    const curdot = carouselNav.children[currentposition];
    curdot.classList.add('active');

    const translatexdistance = -currentposition * containerwidth ;
    flexcontainer.style.transform =`translateX(${translatexdistance}vw)`;
}


