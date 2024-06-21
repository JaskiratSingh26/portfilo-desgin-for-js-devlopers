let img=document.querySelector('.img')

let lis=document.querySelectorAll('.li-a')
img.addEventListener('click',(e)=>{

    if(document.body.style.backgroundColor=='black'){
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        document.querySelector('.img').style.border='2px solid black'
        document.querySelector('.main-img').style.border='2px solid black'
        lis.forEach((li) => {
            li.style.color = 'black';
            img.src='https://static-00.iconduck.com/assets.00/moon-icon-512x512-fm9crgpt.png'
          });

    }
    else{


        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        document.querySelector('.img').style.border='2px solid white'
        document.querySelector('.main-img').style.border='2px solid white'
        
        console.log(1)
        // li.style.color='white'
        lis.forEach((li) => {
            li.style.color = 'white';
          });
         img.src='https://cdn.pixabay.com/photo/2017/12/06/05/19/moon-3000995_1280.png'
    }

 console.log(li)

})


var typed = new Typed('#elemnt', {
    strings: ['coder', ' web desginer.',' software enginner.'],
    typeSpeed: 70,
  });