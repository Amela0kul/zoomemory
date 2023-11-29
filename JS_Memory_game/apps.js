const cardArray=[
   
    {
        name: 'img1',
        img: 'images/img1.png'
    },
    {
        name: 'img2',
        img: 'images/img2.png'
    },
    {
        name: 'img3',
        img: 'images/img3.png'
    },
    {
        name: 'img4',
        img: 'images/img4.png'
    },
    {
        name: 'img5',
        img: 'images/img5.png'
    },
    {
        name: 'img6',
        img: 'images/img6.png'
    },
    {
        name: 'img1',
        img: 'images/img1.png'
    },
    {
        name: 'img2',
        img: 'images/img2.png'
    },
    {
        name: 'img3',
        img: 'images/img3.png'
    },
    {
        name: 'img4',
        img: 'images/img4.png'
    },
    {
        name: 'img5',
        img: 'images/img5.png'
    },
    {
        name: 'img6',
        img: 'images/img6.png'
    }
]

cardArray.sort(()=>0.5-Math.random())

//console.log(cardArray)

const gridDisplay=document.querySelector('#grid')

let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
const card=document.createElement('img')
card.setAttribute('src','images/blank.PNG')
card.setAttribute('data-id', i)
card.addEventListener('click', flipCard)
gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenIds[0]
    const optionTwoId=cardsChosenIds[1]
    if(optionOneId==optionTwoId){
        alert('You have clicked the same image!')
    }
  if(cardsChosen[0]==cardsChosen[1]){
    alert('You found a match !')
    cards[optionOneId].setAttribute('src','images/white.png')
    cards[optionTwoId].setAttribute('src','images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
cardsWon.push(cardsChosen)


  }

  else{
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert('Sorry, try again.')
  }
  cardsChosen=[]
  cardsChosenIds=[]
}

if(cardsWon.length == cardArray.length/2){
    
}

function flipCard(){
const cardId=this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenIds.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if(cardsChosen.length===2){
    setTimeout(checkMatch, 500)
}
}