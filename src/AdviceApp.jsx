import { useEffect, useState } from "react";
import "./Advice.css";

const AdviceApp = () => {
  const [advice, setAdvice] = useState("");

  useEffect(function () {
    getAdvice();
  }, []);

  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }
  return (
    <div>
      <h3> {advice}</h3>
      <button onClick={getAdvice}>Get an advice</button>
      <h4>
        You have read <span>{count} </span>pieces of advise
      </h4>
    </div>
  );
};

export default AdviceApp;
