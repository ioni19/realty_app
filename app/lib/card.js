import firestore from "@react-native-firebase/firestore";

const db = firestore();
export const getCards = (field, func) => {
  let dataArr = [];
  db.collection("card")
    .orderBy(field, "asc")
    .limit(15)
    .get()
    .then(query => {
      query.forEach(el => {
        const data = el.data();
        dataArr.push(data);
      });
      func(dataArr);
    });
};

export const getMoreCards = (field, func, after) => {
  let dataArr = [];
  db.collection("card")
    .orderBy(field, "asc")
    .limit(15)
    .startAfter(after)
    .get()
    .then(query => {
      query.forEach(el => {
        const data = el.data();
        dataArr.push(data);
      });
      func(dataArr);
    });
};


// export const getFireData = collection => {
//   db.collection(collection)
//     .get()
//     .then(result => {
//       console.log("Total users: ", result.size);

//       result.forEach(item => {
//         // console.log("User ID: ", item.id, item.data());
//         return item;
//       });
//     });
// };
