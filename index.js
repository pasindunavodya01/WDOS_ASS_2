const populateWildlifeSection = async () => {
  try {
    const response = await fetch('index.json');
    const fetchedData = await response.json();

//storing json data in localstorage if not stored

    if (!localStorage.getItem('myDataIndex')) {
      // If not stored, fetch the external JSON file
      fetch('index.json')
          .then(response => response.json())
          .then(data => {
              // Convert the JSON data to a string
              var jsonString = JSON.stringify(data);
  
              // Store the JSON string in localStorage
              localStorage.setItem('myDataIndex', jsonString);
              window.location.reload();
          })
          .catch(error => {
              console.error('Error fetching JSON:', error);
          });
  }


    // Set HTML elements for the index section
    const hedderElement = document.querySelector('.imt h1'); 
    const contentElement = document.querySelector('.imt p');
    const titleElement = document.querySelector('.div2 h1');
    const descriptionElement = document.querySelector('.div2 p');
    const wildlifeListElement = document.querySelector('.div2 ol');
    const info1Element = document.querySelector('.lists p');
    const list1Element = document.querySelector('.table td');
    const div4desElement = document.querySelector('.div4 h1');
    const div4contElement = document.querySelector('.div4 p');
    const h2contElement = document.querySelector('.h2 h2');
    const forestsElement = document.querySelector('.forests p:nth-of-type(2)');
    const waterElement = document.querySelector('.water p:nth-of-type(2)');
    const climateElement = document.querySelector('.climate p:nth-of-type(2)');




// Retrieve the data stored in local storage under the key 'myDataIndex' and parse it into a JavaScript object
    const storedData = localStorage.getItem('myDataIndex');
    const parsedData = JSON.parse(storedData);

        // Populate index section with fetched data
    const headerValue = parsedData.header.replace(/"/g, '');
    hedderElement.textContent = headerValue;
    const contentValue = parsedData.content.replace(/"/g, '');
    contentElement.textContent = contentValue;
    const titleValue = parsedData.title.replace(/"/g, '');
    titleElement.textContent = titleValue;
    const descriptionValue = parsedData.description.replace(/"/g, '');
    descriptionElement.textContent = descriptionValue;
    const info1Value = parsedData.description2.replace(/"/g, '');
    info1Element.textContent = info1Value;
    const list1Value = parsedData.wildlifeData.Mammals.replace(/"/g, '');
    list1Element.textContent = list1Value;
    const div4desValue = parsedData.div4des.replace(/"/g, '');
    div4desElement.textContent = div4desValue;
    const div4contValue = parsedData.div4cont.replace(/"/g, '');
    div4contElement.textContent = div4contValue;
    const h2contValue = parsedData.h2cont.replace(/"/g, '');
    h2contElement.textContent = h2contValue;
    const forestsValue = parsedData.forests.replace(/"/g, '');
    forestsElement.textContent = forestsValue;
    const waterValue = parsedData.water.replace(/"/g, '');
    waterElement.textContent = waterValue;
    const climateValue = parsedData.climate.replace(/"/g, '');
    climateElement.textContent = climateValue;




    // Fetch the external JSON file
fetch('index.json')
  .then(response => response.json())
  .then(data => {
    // Iterate over the properties of the JSON object
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        
        // Store each property-value pair in localStorage
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  })
  .catch(error => console.error('Error fetching JSON:', error));



    // Clear existing list items and populate wildlife list
    wildlifeListElement.innerHTML = "";
    fetchedData.wildlifeList.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      wildlifeListElement.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching wildlife data:", error);
  }

  try {
  const response = await fetch('wildlife.json');
  const fetchedData = await response.json();

  //storing json data in localstorage if not stored

  if (!localStorage.getItem('myDataIntro')) {
    // If not stored, fetch the external JSON file
    fetch('wildlife.json')
        .then(response => response.json())
        .then(data => {
            // Convert the JSON data to a string
            var jsonString = JSON.stringify(data);

            // Store the JSON string in localStorage
            localStorage.setItem('myDataIntro', jsonString);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}
// Retrieve the data stored in local storage under the key 'myDataIntro' and parse it into a JavaScript object
const storedData = localStorage.getItem('myDataIntro');
const parsedData = JSON.parse(storedData);

  // Set HTML elements for the wildlife section

  const imt2hdElement = document.querySelector('.imt2 h1');
  const imt2contElement = document.querySelector('.imt2 p');
  const diviihdElement = document.querySelector('.divii h1');
  const diviicontElement = document.querySelector('.divii p');
  const sinharajaElement = document.querySelector('.sinharaja1 p:nth-of-type(2)');
  const hortanElement = document.querySelector('.horton p:nth-of-type(2)');
  const knucklesElement = document.querySelector('.knuckles p:nth-of-type(2)');

  // Populate wildlife section with fetched data
  imt2hdElement.textContent = parsedData.imt2hedding.replace(/"/g, '');
  imt2contElement.textContent  = parsedData.imt2p.replace(/"/g, '');
  diviihdElement.textContent = parsedData.diviihead.replace(/"/g, '');
  diviicontElement.textContent = parsedData.diviicont.replace(/<br>/g, '').replace(/"/g, '');
  sinharajaElement.textContent = parsedData.sinharaja.replace(/"/g, '');
  hortanElement.textContent = parsedData.horton.replace(/"/g, '');
  knucklesElement.textContent = parsedData.knuckles.replace(/"/g, '');


} catch (error) {
  console.error("Error fetching wildlife data:", error);
}


    // Fetch the external JSON file
    fetch('wildlife.json')
    .then(response => response.json())
    .then(data => {
      // Iterate over the properties of the JSON object
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          
          // Store each property-value pair in localStorage
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
  
  


try {
  const response = await fetch('department.json');
  const fetchedData = await response.json();

  if (!localStorage.getItem('myDataDepartment')) {
    // If not stored, fetch the external JSON file
    fetch('department.json')
        .then(response => response.json())
        .then(data => {
            // Convert the JSON data to a string
            var jsonString = JSON.stringify(data);

            // Store the JSON string in localStorage
            localStorage.setItem('myDataDepartment', jsonString);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}
// Retrieve the data stored in local storage under the key 'myDataIntro' and parse it into a JavaScript object
const storedData = localStorage.getItem('myDataDepartment');
const parsedData = JSON.parse(storedData);

  // Set HTML elements for the wildlife section
  const imt3hdElement = document.querySelector('.imt3 h1');
  const imt3contElement = document.querySelector('.imt3 h1:nth-of-type(2)');
  const diviiihdElement = document.querySelector('.diviii h1');
  const diviiicontElement = document.querySelector('.diviii p');
  const areasheadElement = document.querySelector('.showc h1');
  const areaspElement = document.querySelector('.showc ol');
  const conth3Element = document.querySelector('.cont h3');
  const contpElement = document.querySelector('.cont p');


  // Populate wildlife section with fetched data

  imt3hdElement.textContent = parsedData.imt3hedding.replace(/"/g, '');
  imt3contElement.textContent = parsedData.imt3p.replace(/"/g, '');
  diviiihdElement.textContent = parsedData.diviihead.replace(/"/g, '');
  diviiicontElement.textContent = parsedData.diviicont.replace(/<br>/g, '').replace(/"/g, '');
  areasheadElement.textContent = parsedData.areashead.replace(/"/g, '');
  areaspElement.textContent = parsedData.locations.replace(/"/g, '');
  conth3Element.textContent = parsedData.conth3.replace(/"/g, '');
  contpElement.textContent = parsedData.contp.replace(/"/g, '');

  // Clear existing list items and populate wildlife list
  areaspElement.innerHTML = "";
  fetchedData.locations.forEach(item => {
    const list2Item = document.createElement('li');
    list2Item.textContent = item;
    areaspElement.appendChild(list2Item);
  });
} catch (error) {
  console.error("Error fetching wildlife data:", error);
}

    // Fetch the external JSON file
    fetch('department.json')
    .then(response => response.json())
    .then(data => {
      // Iterate over the properties of the JSON object
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          
          // Store each property-value pair in localStorage
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
  
  






try {
  const response = await fetch('leopard.json');
  const fetchedData = await response.json();

  if (!localStorage.getItem('myDataLeopard')) {
    // If not stored, fetch the external JSON file
    fetch('leopard.json')
        .then(response => response.json())
        .then(data => {
            // Convert the JSON data to a string
            var jsonString = JSON.stringify(data);

            // Store the JSON string in localStorage
            localStorage.setItem('myDataLeopard', jsonString);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}
// Retrieve the data stored in local storage under the key 'myDataIntro' and parse it into a JavaScript object
const storedData = localStorage.getItem('myDataLeopard');
const parsedData = JSON.parse(storedData);


  // Set HTML elements for the wildlife section
  const imt4hdElement = document.querySelector('.imt4 h1');
  const imt4contElement = document.querySelector('.imt4 p');
  const divlehdElement = document.querySelector('.divle h1');
  const divlecontElement = document.querySelector('.divle p');
  const venuehElement = document.querySelector('.venue h1');
  const venueh31Element = document.querySelector('.ldiv1 h3:nth-of-type(1)');
  const venueh32Element = document.querySelector('.ldiv1 h3:nth-of-type(2)');
  const venueh33Element = document.querySelector('.ldiv2 h3:nth-of-type(1)');
  const venueh34Element = document.querySelector('.ldiv2 h3:nth-of-type(2)');
  const venuep1Element = document.querySelector('.ldiv1 p:nth-of-type(1)');
  const venuep2Element = document.querySelector('.ldiv1 p:nth-of-type(2)');
  const venue2p1Element = document.querySelector('.ldiv2 p:nth-of-type(1)');
  const venue2p2Element = document.querySelector('.ldiv2 p:nth-of-type(2)');
  const treath1Element = document.querySelector('.treat h1');



  // Populate wildlife section with fetched data

  imt4hdElement.textContent = parsedData.imt4hedding.replace(/"/g, '');
  imt4contElement.textContent = parsedData.imt4p.replace(/"/g, '');
  divlehdElement.textContent = parsedData.diviihead.replace(/"/g, '');
  divlecontElement.textContent = parsedData.diviicont.replace(/"/g, '');
  venuehElement.textContent = parsedData.venueh.replace(/"/g, '');
  venueh31Element.textContent = parsedData.venueh31.replace(/"/g, '');
  venueh32Element.textContent = parsedData.venueh32.replace(/"/g, '');
  venueh33Element.textContent = parsedData.venueh33.replace(/"/g, '');
  venueh34Element.textContent = parsedData.venueh34.replace(/"/g, '');
  venuep1Element.textContent = parsedData.venuep1.replace(/"/g, '');
  venuep2Element.textContent = parsedData.venuep2.replace(/"/g, '');
  venue2p1Element.textContent = parsedData.venue2p1.replace(/"/g, '');
  venue2p2Element.textContent = parsedData.venue2p2.replace(/"/g, '');
  treath1Element.textContent = parsedData.treath1.replace(/"/g, '');




    // Fetch the external JSON file
    fetch('leopard.json')
    .then(response => response.json())
    .then(data => {
      // Iterate over the properties of the JSON object
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          
          // Store each property-value pair in localStorage
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
  
  

  // Clear existing list items and populate wildlife list
  areaspElement.innerHTML = "";

} catch (error) {
  console.error("Error fetching wildlife data:", error);
}





try {
  const response = await fetch('animals.json');
  const fetchedData = await response.json();

  if (!localStorage.getItem('myDataAnimal')) {
    // If not stored, fetch the external JSON file
    fetch('animals.json')
        .then(response => response.json())
        .then(data => {
            // Convert the JSON data to a string
            var jsonString = JSON.stringify(data);

            // Store the JSON string in localStorage
            localStorage.setItem('myDataAnimal', jsonString);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}
// Retrieve the data stored in local storage under the key 'myDataIntro' and parse it into a JavaScript object
const storedData = localStorage.getItem('myDataAnimal');
const parsedData = JSON.parse(storedData);

  // Set HTML elements for the wildlife section
  const imtanhdElement = document.querySelector('.imtan u');
  const imtancontElement = document.querySelector('.imtan p');
  const divleanElement = document.querySelector('.divle h1');
  const divleancontElement = document.querySelector('.divle p');
  const divyalawilElement = document.querySelector('.yalawil h1');
  const divyalawilpElement = document.querySelector('.yalawil p');
  const topicElement = document.querySelector('.topic h1');

  

  // Populate wildlife section with fetched data
  imtanhdElement.textContent = parsedData.imtanhedding.replace(/"/g, '');
  imtancontElement.textContent = parsedData.imtanp.replace(/"/g, '');
  divleanElement.textContent = parsedData.divleanhead.replace(/"/g, '');
  divleancontElement.textContent = parsedData.divleancont.replace(/<br>/g, '').replace(/"/g, '');
  divyalawilElement.textContent = parsedData.yalawilh1.replace(/"/g, '');
  divyalawilpElement.textContent = parsedData.yalawilp.replace(/"/g, '');
  topicElement.textContent = parsedData.topich1.replace(/"/g, '');


    // Fetch the external JSON file
    fetch('animals.json')
    .then(response => response.json())
    .then(data => {
      // Iterate over the properties of the JSON object
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          
          // Store each property-value pair in localStorage
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
  
    
  

  // Clear existing list items and populate wildlife list
  areaspElement.innerHTML = "";

} catch (error) {
  console.error("Error fetching wildlife data:", error);
}


try {
  const response = await fetch('yala.json');
  const fetchedData = await response.json();

  if (!localStorage.getItem('myDataYala')) {
    // If not stored, fetch the external JSON file
    fetch('yala.json')
        .then(response => response.json())
        .then(data => {
            // Convert the JSON data to a string
            var jsonString = JSON.stringify(data);

            // Store the JSON string in localStorage
            localStorage.setItem('myDataYala', jsonString);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}
// Retrieve the data stored in local storage under the key 'myDataIntro' and parse it into a JavaScript object
const storedData = localStorage.getItem('myDataYala');
const parsedData = JSON.parse(storedData);

  // Set HTML elements for the overview section
  const overviewh2Element = document.querySelector('#overview-yala h2');
  const overviewpElement = document.querySelector('#overview-yala p');
  const overviewp2Element = document.querySelector('#overview-yala p:nth-of-type(2)');
  const wildlifeElement = document.querySelector('#wildlife-yala h2');
  const wildlifepElement = document.querySelector('#wildlife-yala p');

  // Populate overview section with fetched data

  overviewh2Element.textContent = parsedData.overviewh2.replace(/"/g, '');
  overviewpElement.textContent = parsedData.overviewp.replace(/"/g, '');
  overviewp2Element.textContent = parsedData.overviewp2.replace(/"/g, '');
  wildlifeElement.textContent = parsedData.wildlifeh2.replace(/"/g, '');
  
  // Populate wildlife paragraph with fetched data
  const wildlifep = parsedData.wildlifep;
  wildlifepElement.innerHTML = ""; // Clear existing content
  for (const key in wildlifep) {
    if (wildlifep.hasOwnProperty(key)) {
      const value = wildlifep[key];
      const paragraph = document.createElement("p");
      paragraph.textContent = `${key}: ${value}`;
      wildlifepElement.appendChild(paragraph);
    }
  }

  // Fetch the external JSON file and store data in localStorage
  fetch('yala.json')
    .then(response => response.json())
    .then(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));

  // Clear existing list items and populate wildlife list
  areaspElement.innerHTML = "";

} catch (error) {
  console.error("Error fetching wildlife data:", error);
}




try {
  const response = await fetch('wilpattu.json');
  const fetchedData = await response.json();

  if (!localStorage.getItem('myDataWilpattu')) {
    // If not stored, fetch the external JSON file
    fetch('wilpattu.json')
        .then(response => response.json())
        .then(data => {
            // Convert the JSON data to a string
            var jsonString = JSON.stringify(data);

            // Store the JSON string in localStorage
            localStorage.setItem('myDataWilpattu', jsonString);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}
// Retrieve the data stored in local storage under the key 'myDataIntro' and parse it into a JavaScript object
const storedData = localStorage.getItem('myDataWilpattu');
const parsedData = JSON.parse(storedData);

  // Set HTML elements for the overview section
  const overviewh2wilElement = document.querySelector('#overview-wil h2');
  const overviewpwilElement = document.querySelector('#overview-wil p');


  // Populate overview section with fetched data

  overviewh2wilElement.textContent = parsedData.overviewh2wil.replace(/"/g, '');
  overviewpwilElement.textContent = parsedData.overviewpwil.replace(/"/g, '');


  // Set HTML elements for the wildlife section
  const wildlifeElement = document.querySelector('#wildlife-wil h2');
  const wildlifepElement = document.querySelector('#wildlife-wil p');

  // Populate wildlife section with fetched data
  wildlifeElement.textContent = parsedData.wildlifeh2wil.replace(/"/g, '');
  
  // Populate wildlife paragraph with fetched data
  const wildlifep = parsedData.wildlifepwil;
  wildlifepElement.innerHTML = ""; // Clear existing content
  for (const key in wildlifep) {
    if (wildlifep.hasOwnProperty(key)) {
      const value = wildlifep[key];
      const paragraph = document.createElement("p");
      paragraph.textContent = `${key}: ${value}`;
      wildlifepElement.appendChild(paragraph);
    }
  }
  // Fetch the external JSON file and store data in localStorage
  fetch('wilpattu.json')
    .then(response => response.json())
    .then(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    })
    
    .catch(error => console.error('Error fetching JSON:', error));

  // Clear existing list items and populate wildlife list
  areaspElement.innerHTML = "";

} catch (error) {
  console.error("Error fetching wildlife data:", error);
}




//login case

const passwordField = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("show-password");

showPasswordCheckbox.addEventListener("change", function() {
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;



    // Fetch users data from JSON file (users.json)
    fetch('login.json')
        .then(response => response.json())
        .then(data => {
            const users = data.users;

            // Check if the entered username and password match any user in the JSON data
            const user = users.find(user => user.username === username && user.password === password);

            
            if (user) {
                alert('Login successful!');
                window.location.href = 'dashboard.html';
                localStorage.setItem('loggedInUserRole', user.role);
                localStorage.setItem('isLoggedIn', true);
                
            } else {
                alert('Invalid username or password. Please try again.');
            }
            

        })
        .catch(error => console.error('Error fetching users data:', error));
});

    // Fetch the external JSON file
fetch('login.json')
.then(response => response.json())
.then(data => {
// Iterate over the properties of the JSON object
for (const key in data) {
if (data.hasOwnProperty(key)) {
  const value = data[key];
  
  // Store each property-value pair in localStorage
  localStorage.setItem(key, JSON.stringify(value));
}
}
})
.catch(error => console.error('Error fetching JSON:', error));







// Edit button visibility
document.addEventListener('DOMContentLoaded', function() {
  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn) {
      // Show the edit button
      document.getElementById("Edit").style.display = 'inline-block';
  }
});




















//end of login case























// newsletter case
function newsletterApp() {
  return {
      email: '',
      async subscribe() {
          try {
              // Get current subscriptions from the JSON file
              let response = await fetch('subscriptions.json');
              let subscriptions = await response.json();

              // Add new subscription
              subscriptions.push(this.email);

              // Save updated subscriptions back to the JSON file
              await fetch('subscriptions.json', {
                  method: 'PUT', // or 'POST'
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(subscriptions),
              });

              alert('Thank you for subscribing!');
              this.email = ''; // Clear input after subscribing
          } catch (error) {
              console.error('Error subscribing:', error);
              alert('Failed to subscribe. Please try again later.');
          }
      }
  };
}


// Edit case




  
}



populateWildlifeSection();
