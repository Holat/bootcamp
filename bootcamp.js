const testimonials = [
    {
        id: 1,
        name: "Tanya Sinclair",
        job: "UX Engineer",
        img:  "image-tanya.jpg",
        text:
         `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
      },
      {
        id: 2,
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        img:  "image-john.jpg",
        text:
         `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
      }
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentItem = 0

window.addEventListener("DOMContentLoaded", function () {
    const item = testimonials[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});


function showPerson(person){
    const item = testimonials[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContentn= item.job;
    info.textContent = item.text;
};

prev.addEventListener('click',function(){
    currentItem--
    if(currentItem < 0){
        currentItem = testimonials.length - 1
    }
    showPerson(currentItem);
});
next.addEventListener('click',function(){
    currentItem++
    if(currentItem > testimonials.length - 1){
        currentItem = 0
    }
    showPerson(currentItem);
});
