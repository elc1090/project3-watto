async function saveData() {
  const groupElements = document.querySelectorAll('.items');
  const groups = [];

  groupElements.forEach(groupElement => {
    const group = {
      name: groupElement.getAttribute('id'),
      items: [],
    };

    const itemElements = groupElement.querySelectorAll('.item');
    itemElements.forEach(itemElement => {
      const imgElement = itemElement.querySelector('img');
      const itemURL = './src/' + imgElement.src.split('src/')[1];
      group.items.push(itemURL);
    });

    groups.push(group);
  });

  const data = {
    groups: groups,
  };
  

  try {
    // [** TO-DO **] This is not working!!!!!!!
    fetch('https://dislytedisco.treorai.repl.co', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (response.ok) {
      console.log('Data stored successfully');
    } else {
      console.log('Error storing data');
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });

  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
  }
}
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveData);