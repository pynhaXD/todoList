const remBtn = document.querySelector('.btns__remove-text');
const addBtn = document.querySelector('.btns__add-btn');

const inputText = document.getElementById('text');
const inputTitle = document.querySelector('.title');

const editBtn = document.querySelector('.edit-btn');
const remPost = document.querySelector('.remove-post-btn')


remBtn.addEventListener('click', () => {
  inputText.value = '';
  inputTitle.value = '';
})

const postList = [];

addBtn.addEventListener('click', () => {
  if(!inputTitle.value || !inputText.value) {
    alert('Заполните все поля ввода')
  }

  

})
