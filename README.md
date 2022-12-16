# Mbaj Distancen

ARCHIVED -- OBSELETE

Mbaj Distancen is a COVID-19 API for Kosovo.

You can use the API in Python, Javascript, Node.js, etc.

You can use the API with the fetch() method:

```
fetch('https://mbajdistancenapi.herokuapp.com')
    .then(response => response.json())
    .then(data => console.log(data)); // You can display/use the data wherever, the console.log is just an example.
```

The fetch() method can be used in Javascript, React, etc.

You can use the API in Python:

```
import requests, json

response = requests.get("https://mbajdistancenapi.herokuapp.com")

print(response.json()["tePergjithshme"]) # tePergjithshme object contains the current confirmed cases, recovered cases, deaths.
```

You can use the API with axios:

```
import axios from 'axios';

axios.get('https://mbajdistancenapi.herokuapp.com')
  .then((response) => {
    console.log(response.data); // You can display/use the data wherever, the console.log is just an example.
  });
 ```
 
 The link to the API is: https://mbajdistancenapi.herokuapp.com
