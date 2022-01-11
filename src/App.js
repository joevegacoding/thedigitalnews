import "./App.css";
import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import Navbar from "./components/Navbar/Navbar";

const alanKey = process.env.REACT_APP_ALAN_API_KEY;

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
