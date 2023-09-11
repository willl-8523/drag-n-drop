const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('mousedown', grabbingCursor);
fill.addEventListener('mouseup', grabCursor);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function grabbingCursor() {
  fill.style.cursor = 'grabbing';
}

function grabCursor() {
  fill.style.cursor = 'grab';
}

function dragStart(e) {
  this.className += ' hold';

  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(e) {
  e.preventDefault();
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();

  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);

  fill.style.cursor = 'grab';
}
