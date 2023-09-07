let colorBtns = document.getElementById('cBtn')

const colorList = ['red','blue','yellow']
let currClassName = 'curent'
function setColorBtns(colorList) {
  chrome.storage.sync.get('color',(data)=>{
    let currentColor = data.color
    colorList.forEach((item) => {
      let button = document.createElement('button')
      button.dataset.color = item
      button.style.backgroundColor=item
      button.classList.add('color-btn')
      if (currentColor==item) {
        button.classList.add(currClassName)
      }
      button.addEventListener('click',handleButtonClick)
      colorBtns.appendChild(button)
    });
  })
}
function handleButtonClick(e) {
  console.log(e);
  let current = e.target.parrewntElement.queryselector()
}

setColorBtns(colorList)