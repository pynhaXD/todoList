const remBtn = document.querySelector('.btns__remove-text')
const addBtn = document.querySelector('.btns__add-btn')

const inputText = document.getElementById('text')
const inputTitle = document.querySelector('.title')




remBtn.addEventListener('click', () => {
  inputText.value = ''
  inputTitle.value = ''
})



const postList = document.querySelector('.list')

addBtn.addEventListener('click', () => {
  if(!inputTitle.value || !inputText.value) {
    alert('Заполните все поля ввода')
    return
  }

  let post = `
  <div class="post-wrapper">
    <div class="post">
      <textarea class="post-title" cols="10" rows="1" disabled>${inputTitle.value}</textarea>
      <textarea class="post-text" cols="5" rows="5" disabled>${inputText.value}</textarea>
    </div>
    <div class="post-btns">
      <button class="edit-btn">Редактировать</button>
      <button class="remove-post-btn">Удалить</button>
    </div>
  </div>
  `

  postList.innerHTML += post

})


postList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('remove-post-btn')) {
    const postWrapper = target.closest('.post-wrapper');
    postWrapper.remove();
  }


});



