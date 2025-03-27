import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
// import defaultCatImage from "../../icons/cat.png";

const apiKey = import.meta.env.VITE_API_KEY; //vite에서 api키 env로 받아오는법.
const apiBaseUrl = `https://api.thecatapi.com/v1`;
const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  params: {
    api_key: apiKey,
  },
});

function Main() {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const clickButton = async () => {
    setLoading(true);
    // axios async-await 방식으로 fetch 하게 변경
    const [result, error] = await axiosInstance
      .get("/images/search", {
        params: {
          limit: 1,
          breed_ids: "beng",
        },
      })
      .then((res) => [res.data[0].url, null])
      .catch((err) => [null, err]);
    setLoading(false);

    if (error) {
      alert("에러가 발생했습니다.");
      throw error;
    }

    setCatImage(result);
  };

  return (
    <main>
      <h2>🐾 랜덤으로 귀여운 고양이를 만나보세요! 🐾</h2>
      <section className="imageSection">
        <div className="box">
          {loading ? (
            <p className="loading">고양이 불러오는 중...😺</p>
          ) : catImage ? (
            <img
              src={catImage}
              onLoad={(e) => e.target.classList.add("loaded")}
            />
          ) : (
            <p>고양이 사진을 보려면 버튼을 눌러 주세요</p>
          )}
        </div>
      </section>
      <section className="buttonSection">
        <button onClick={clickButton}>생성</button>
      </section>
    </main>
  );
}
export default Main;
