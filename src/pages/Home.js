import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
function Home() {
  const [inputValue, setInputValue] = useState("");
  const [mechanics, setMechanics] = useState([]);
  const dispatch = useDispatch();
  // const getData = async () => {
  //   try {
  //     dispatch(showLoading());
  //     const response = await axios.get(
  //       "http://localhost:7602/api/user/get-all-approved-mechanics",
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     dispatch(hideLoading());
  //     if (response.data.success) {
  //       setMechanics(response.data.data);
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div>
      <InputShortener setInputValue={setInputValue} />

      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default Home;
