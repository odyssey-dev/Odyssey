
export async function newAccountApi() {
  auth.currentUser.getIdToken().then(function(token) {
    console.log('Sending request to', apiUrl+"api/hello", 'with ID token in Authorization header.');
    var req = new XMLHttpRequest();
    req.onload = function() {
      console.log(req.responseText);
    };
    req.onerror = function() {
      this.responseContainer.innerText = 'There was an error';
    };
    req.open('GET', apiUrl+"api/hello", true);
    req.setRequestHeader('Authorization', 'Bearer ' + token);
    req.setRequestHeader('location', testData);
    req.send();
  });
} 

async function continentApi(testData) {
  auth.currentUser.getIdToken().then(function(token) {
    console.log('Sending request to', apiUrl+"api/continent", 'with ID token in Authorization header.');
    var req = new XMLHttpRequest();
    req.onload = function() {
      console.log(req.responseText);
    };
    req.onerror = function() {
      this.responseContainer.innerText = 'There was an error';
    };
    req.open('GET', apiUrl+"api/continent", true);
    req.setRequestHeader('Authorization', 'Bearer ' + token);
    req.setRequestHeader('location', testData);
    req.send();
  });
} 

async function territoryApi(testData) {
  auth.currentUser.getIdToken().then(function(token) {
    console.log('Sending request to', apiUrl+"api/territory", 'with ID token in Authorization header.');
    var req = new XMLHttpRequest();
    req.onload = function() {
      console.log(req.responseText);
    };
    req.onerror = function() {
      this.responseContainer.innerText = 'There was an error';
    };
    req.open('GET', apiUrl+"api/territory", true);
    req.setRequestHeader('Authorization', 'Bearer ' + token);
    req.setRequestHeader('location', testData);
    req.send();
  });
} 

async function countryApi(testData) {
  auth.currentUser.getIdToken().then(function(token) {
    console.log('Sending request to', apiUrl+"api/country", 'with ID token in Authorization header.');
    var req = new XMLHttpRequest();
    req.onload = function() {
      console.log(req.responseText);
    };
    req.onerror = function() {
      this.responseContainer.innerText = 'There was an error';
    };
    req.open('GET', apiUrl+"api/country", true);
    req.setRequestHeader('Authorization', 'Bearer ' + token);
    req.setRequestHeader('location', testData);
    req.send();
  });
} 

async function countyApi(testData) {
  auth.currentUser.getIdToken().then(function(token) {
    console.log('Sending request to', apiUrl+"api/county", 'with ID token in Authorization header.');
    var req = new XMLHttpRequest();
    req.onload = function() {
      console.log(req.responseText);
    };
    req.onerror = function() {
      this.responseContainer.innerText = 'There was an error';
    };
    req.open('GET', apiUrl+"api/county", true);
    req.setRequestHeader('Authorization', 'Bearer ' + token);
    req.setRequestHeader('location', testData);
    req.send();
  });
}

async function districtApi(testData) {
  auth.currentUser.getIdToken().then(function(token) {
    console.log('Sending request to', apiUrl+"api/district", 'with ID token in Authorization header.');
    var req = new XMLHttpRequest();
    req.onload = function() {
      console.log(req.responseText);
    };
    req.onerror = function() {
      this.responseContainer.innerText = 'There was an error';
    };
    req.open('GET', apiUrl+"api/district", true);
    req.setRequestHeader('Authorization', 'Bearer ' + token);
    req.setRequestHeader('location', testData);
    req.send();
  });
}