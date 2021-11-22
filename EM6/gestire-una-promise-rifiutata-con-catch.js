const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer è impostato su false per rappresentare una risposta non riuscita da un server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error =>{
  console.log(error);
});