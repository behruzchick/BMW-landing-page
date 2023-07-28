let btn = document.querySelector('.burger');
let dropdown = document.querySelector('.nav');

btn.addEventListener('click', () => {
    dropdown.classList.toggle('active')
})

window.addEventListener('scroll', () => {
 let firstRow = document.querySelector('.first_row');
 let element = document.querySelector('.main_section');
 let windowHeight = window.innerHeight; 
 let elemntOne = document.querySelector('.block_one');
 let elementTwo = document.querySelector('.block_two');
 let position = element.getBoundingClientRect().top


 if (position < windowHeight) {
   firstRow.classList.add('scroll');
   elemntOne.classList.add('scrolling')
   elementTwo.classList.add('scrolling')
 } else {
    firstRow.classList.remove('scroll');
    elemntOne.classList.remove('scrolling')
    elementTwo.classList.remove('scrolling')
 }

//  let secondRow = document.querySelector('.dream_section');
//  let title = document.querySelector('.title');
//  let build = document.querySelector('.build');
//  let newWindowHeight = window.innerHeight;
//  let newPosition = secondRow.getBoundingClientRect().top;
//     if(newPosition < newWindowHeight){
//         title.classList.add('ohio')
//         build.classList.add('ohio')
//     }else{
//         title.classList.remove('ohio')
//         build.classList.remove('ohio')
//     }
});
console.log('dd')
window.addEventListener('scroll', () => {
    let secondRow = document.querySelector('.dream_section');
    let NewwindowHeight = window.innerHeight;  
    let title = document.querySelector('.title');
    let build = document.querySelector('.build');
    let newPosition = secondRow.getBoundingClientRect().top

    if(newPosition < NewwindowHeight){
        title.classList.add('ohio')
        build.classList.add('ohio')
    }else{
        title.classList.remove('ohio')
        build.classList.remove('ohio')
    }

});




let wiewContainer = document.querySelector('.wiew_container');
let cars = document.querySelectorAll('.car_block');
let imgWiew = document.querySelector('.img_wiew');
let obj = [
    {
        img: "https://www.freeiconspng.com/uploads/monday-april-2nd-2012-in-bmw-m5-tags-bmw-m550d-xdrive-background-color-14.png",
        id: "car1",
        description:"The M5 F90",
        title:"BMW M5 F90",

    },
    {
        img: "https://pngimg.com/d/bmw_PNG1702.png",
        id: "car2",
        description:"The Bmw ",
        title:"BMW ",
    },
    {
        img: "https://freepngimg.com/save/22745-bmw-x5-transparent-background/1280x960",
        description:"The Bmw X5",
        title:"BMW X5",
        id: "car3"
    },
    {
        img: "https://stock.bmw.co.uk/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb01DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--41c3916cf18abaeda258fd7843454bea7a58f7f3/bmw-m5-competition.png",
        id: "car4",
        description:"The BMW M5",
        title:"BMW M5",
    },
    {
        img: "https://www.freeiconspng.com/uploads/black-cool-bmw-car-png-19.png",
        id: "car5",
        description:"The Bmw ",
        title:"BMW ",
    }
]


cars.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        let current = e.currentTarget.dataset.id;
        let fillter = obj.filter(type => type.id === current);
        imgWiew.classList.toggle('transform')
        const map = fillter.map((p1) => {
            return `    
                <div class="wiew_container">
                <img src="${p1.img}" alt="img" class="img_wiew">
                      <div class="title_car">
                      <h1>${p1.title}</h1>
                      <p>${p1.description}</p>
                     </div>
                 </div>
                `
        })
        wiewContainer.innerHTML = map;

    })
})