import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components/native";
import Card from "../components/Card";
import SearchModal from "../components/SearchModal";
import SearchBar from "../components/SearchBar";
import {bgColor} from "../theme/theme";
import {getCards} from "../lib/card";
import firestore from "@react-native-firebase/firestore";

const SearchCopy = () => {
  const [cardData, setCardData] = useState(null);
  const [lastVisible, setLastVisble] = useState(undefined);
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("이름");
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const timeSet = useRef();
  const onChangeText = text => {
    clearTimeout(timeSet.current);
    timeSet.current = setTimeout(() => {
      setQuery(text);
    }, 500);
  };
  const sortKey = {
    수익순: "info.prediction",
    가격순: "info.sellingPrice",
    인기순: "rank",
    이름: "name",
  };

  const db = firestore();

  const nextPage = () => {
    (async () => {
      try {
        if (lastVisible === -1) {
          console.log("here1");
          return;
        } else if (lastVisible) {
          // console.log(posts);
          console.log("here2");
          await db
            .collection("card")
            .orderBy("id", "asc")
            .limit(15)
            .get()
            .startAfter(lastVisible)
            .then(snapshot => {
              // console.log("snap"); << 여기 안 옴
              setPosts(posts => {
                const arr = [...posts];
                snapshot.forEach(doc => {
                  arr.push(doc.data());
                });
                return arr;
              });
              if (snapshot.docs.length === 0) {
                console.log("here-1");
                lastVisible = -1;
              } else {
                console.log("here-2");
                setLastVisble(snapshot.docs[snapshot.docs.length - 1].id);
              }
            })
            .then(() => "not here");
        } else {
          console.log("언디파인드");
          await db
            .collection("card")
            .orderBy("id", "asc")
            .limit(15)
            .get()
            .then(snapshot => {
              setPosts(posts => {
                const arr = [...posts];
                snapshot.forEach(doc => {
                  arr.push(doc.data());
                });
                return arr;
              });
              setLastVisble(snapshot.docs[snapshot.docs.length - 1].id);
            });
        }
      } catch (e) {
        console.log("error", e);
      }

      console.log(lastVisible);
    })();
  };

  // let filterData = [];
  // if (cardData) {
  //   filterData = cardData.filter(
  //     item => item.address.includes(query) || item.name.includes(query),
  //   );
  // }

  const infiniteScroll = () => {
    nextPage();
    alert("마지막 찍고감");
  };

  return (
    <SafeView>
      <>
        <SearchBar
          setSort={setSort}
          sort={sort}
          setOpen={setOpen}
          onChangeText={onChangeText}
          setCardData={setCardData}
        />
        <CardList
          // data={
          //   sort === "수익순" || sort === "가격순"
          //     ? cardData.reverse()
          //     : cardData
          // }
          data={posts}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
          bounces={false}
          onEndReached={infiniteScroll}
          onEndReachedThreshold={0.4}
          renderItem={({item}) => <Card data={item} />}
        />
        {isOpen && (
          <SearchModal
            data={filterData}
            setOpen={setOpen}
            setCardData={setCardData}
          />
        )}
      </>
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  height: 10px;
`;

const CardList = styled.FlatList`
  padding-top: 10px;
  background-color: ${bgColor};
`;

export default SearchCopy;
