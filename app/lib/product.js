import firestore from "@react-native-firebase/firestore";

const db = firestore();
export const getProduct = (id, func) => {
  db.collection("product")
    .where("id", "==", id)
    .get()
    .then(result => {
      result.forEach(el => {
        func(el.data());
      });
    });
};

export const getAddress = async func => {
  let dataArr = [];
  await db
    .collection("product")
    .orderBy("basicInfo.adress", "asc")
    .get()
    .then(result => {
      result.forEach(el => {
        const data = el.data();
        dataArr.push(data);
      });
      func(dataArr);
    });
};
