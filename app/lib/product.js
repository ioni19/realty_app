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
