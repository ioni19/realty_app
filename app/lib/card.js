import firestore from "@react-native-firebase/firestore";

const db = firestore();
export const getCards = (field, func) => {
  let dataArr = [];
  db.collection("card")
    .orderBy(field, "asc")
    .get()
    .then(query => {
      query.forEach(el => {
        const data = el.data();
        dataArr.push(data);
      });
      func(dataArr);
    });
};

export const getDescCards = (field, func) => {
  let dataArr = [];
  db.collection("card")
    .orderBy(field, "desc")
    .get()
    .then(query => {
      query.forEach(el => {
        const data = el.data();
        dataArr.push(data);
      });
      func(dataArr);
    });
};

export const getRecCards = func => {
  let dataArr = [];
  db.collection("card")
    .where("id", ">=", 20)
    .orderBy("id", "asc")
    .limit(10)
    .get()
    .then(query => {
      query.forEach(el => {
        const data = el.data();
        dataArr.push(data);
      });
      func(dataArr);
    });
};