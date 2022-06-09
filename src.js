const dogdata=document.getElementById('dog_result')
const catdata=document.getElementById('cat_result')
const dogButton=document.getElementById('dog_btn')
const catButton=document.getElementById('cat_btn')

function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>dogdata.innerHTML=`<img src=${data.message} />`)
}
function getRandomCat(){
    fetch("https://aws.random.cat/meow")
    .then(res=>res.json())
    .then(data=>{
        if (data.file.includes('.mp4')) {
            getRandomCat()
            
        }else{
            catdata.innerHTML=`<img src=${data.file} />`
        }
    })
}
dogButton.addEventListener("click",getRandomDog)
catButton.addEventListener("click",getRandomCat)