const button = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

button.addEventListener('dragstart', dragStart)
button.addEventListener('dragend', dragEnd)

placeholders.forEach((placeholder) => {
	placeholder.addEventListener('dragover', dragOver) //вызывается, когда перетаскиваемый элемент находится над местом, куда мы можем поместить его (над новым местом)
	placeholder.addEventListener('dragenter', dragEnter) //заходим на территорию нового места
	placeholder.addEventListener('dragleave', dragLeave) //перетащили, но вышли за территорию нового места
	placeholder.addEventListener('drop', dragDrop) //когда отпустили
})

function dragStart(event){
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragEnd(event) {
	event.target.classList.remove('hold', 'hide', 'valid')
}

function dragOver(event){
	event.preventDefault()
}

function dragEnter(event){
	event.target.classList.add('hovered')
}

function dragLeave(event) {
  event.target.classList.remove('hovered', 'valid');
}

function dragDrop(event) {
  event.target.classList.remove('hovered', 'valid');
  event.target.append(button);
}
