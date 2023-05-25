fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const groupElements = document.querySelectorAll('.items');

    groupElements.forEach((groupElement, index) => {
      const groupData = data.groups[index];

      groupElement.innerHTML = '';

      const numColumns = Math.min(4, groupData.items.length);

      groupElement.style.gridTemplateColumns = `repeat(${numColumns}, minmax(50px, 1fr))`;

      groupData.items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'item';
        li.draggable = true;
        
        li.addEventListener('dragstart', dragStart);
        groupElement.addEventListener('dragover', dragOver);
        groupElement.addEventListener('drop', drop);

        const img = document.createElement('img');
        img.src = item;
        img.alt = 'Thumbnail';
        img.style.width = '86px';
        img.style.height = '86px';

        li.appendChild(img);
        groupElement.appendChild(li);
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });