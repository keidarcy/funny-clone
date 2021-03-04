const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
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
}

const dragDiv = document.querySelector('.drag-test');
const dragVideo = document.querySelector('.drag-video');

const dragEle = (ele) => {
  let pos1 = (pos2 = pos3 = pos4 = 0);
  ele.addEventListener('mousedown', dragMouseDown);

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener('mouseup', dragMouseUp);
    document.addEventListener('mousemove', dragMouseMove);

    function dragMouseUp(e) {
      document.removeEventListener('mouseup', dragMouseUp);
      document.removeEventListener('mousemove', dragMouseMove);
    }
    function dragMouseMove(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log({ pos1, pos2, pos3, pos4 });
      ele.style.top = ele.offsetTop - pos2 + 'px';
      ele.style.left = ele.offsetLeft - pos1 + 'px';
    }
  }
};

dragEle(dragDiv);
dragEle(dragVideo);
