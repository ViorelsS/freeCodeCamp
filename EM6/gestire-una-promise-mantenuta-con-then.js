const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer è impostato a true per rappresentare una risposta riuscita da un server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result=>{
  console.log(result);
});