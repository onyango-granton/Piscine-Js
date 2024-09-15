// const apiUrl = "https://hacker-news.firebaseio.com/v0/item/";
//
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.body;
//   })
//   .then((userData) => {
//     console.log("User Data: ", userData);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });




const apiUrl =
  "https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty";
//
let maxId 
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
    .then((userData) => {
    maxId = userData  
    console.log("User Data: ", userData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


const apiUrl2 =
  `https://hacker-news.firebaseio.com/v0/item/8900.json?print=pretty`;
//
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then((userD) => {
    console.log("User Data: ", userD);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
