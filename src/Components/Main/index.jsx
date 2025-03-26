import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import defaultCatImage from "../../icons/cat.png";

const apiKey = import.meta.env.VITE_API_KEY; //vite에서 api키 env로 받아오는법.
const getApi = `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=${apiKey}`;

function Main() {
  const [catImage, setCatImage] = useState(defaultCatImage);
  const boxes = Array.from({ length: 1 });

  const clickButton = () => {
    axios
      .get(getApi)
      .then((response) => {
        console.log(response.data);
        setCatImage(response.data[0].url);
      })
      .catch((e) => {
        console.error("Error ", e);
      });
  };
  //로딩 추가하기/
  return (
    <main>
      <h2>🐾 랜덤으로 귀여운 고양이를 만나보세요! 🐾</h2>
      <section className='imageSection'>
        {boxes.map((_, index) => (
          <div key={index} className='box'>
            {catImage && <img src={catImage} alt='error' />}
          </div>
        ))}
      </section>
      <section className='buttonSection'>
        <button onClick={clickButton}>생성</button>
      </section>
    </main>
  );
}
export default Main;
