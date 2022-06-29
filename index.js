function submitData(userName, userEmail) {
    
  const configurationObject = {
  method: 'POST' ,
  headers: {
  "Content-type": "application/json",
  "Accept": "application/json"
}, 
body: JSON.stringify({
  name: userName,
  email: userEmail
}) 
}  
return fetch("http://localhost:3000/users", configurationObject)
.then(res => res.json())
  .then(object => {
    document.body.innerHTML = object['id']
  })
  .catch(function (error) {
   document.body.innerHTML = error.message
  });
 }

