const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아옴
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.addBtn
    // 4. 새로 추가된 아이템으로 스크롤링
    // 5. 인풋을 초기화 한다.
    const text = input.value; //value : 값을 가져오는 내장함수

    if(text === ''){
        input.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item)
    item.scrollIntoView({block : "center"})
    input.value = '';
    input.focus(); //focus : 사용자가 다시 input을 클릭하지 않고 +버튼 눌러서 값을 추가
}
function createItem(text){
    const itemRow = document.createElement("li");
    itemRow.setAttribute('class', 'item__row'); // html에서 li 생성하는걸 동적이게 생성하는 개념으로 이해하면 될 듯

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('span','item__name');
    name.innerText = text;
    // name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item__delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.addEventListener('click',()=>{
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);
    
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider); //append도 사용가능
    
    return itemRow;
}    
addBtn.addEventListener('click', ()=> { 
    onAdd();
});

input.addEventListener('keypress', event=>{
    if(event.key==="Enter"){
        onAdd();
    }
});