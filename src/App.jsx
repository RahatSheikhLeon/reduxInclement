import { useState } from "react";
import { Counter } from "./Counter";
import { Stats } from "./Stats";

function App() {
  const [counterData, setCountData] = useState([
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
  ]);

  const incrementHandel = (counterID) => {
    const updatedCounters = counterData.map((counter) => {
      if (counterID == counter.id) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
     setCountData(updatedCounters)
  };
  const dicrementHandel = (counterID) => {
    const updatedCounters = counterData.map((counter) => {
      if (counterID == counter.id) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });

    setCountData(updatedCounters);
  };

  return (
    <>
      <section>
        <div className="box">
          {counterData.map((counter) => (
            <Counter
              key={counter.id}
              counterValue={counter.value}
              incrementHandel={() => incrementHandel(counter.id)}
              dicrementHandel={() => dicrementHandel(counter.id)}
            />
          ))}

          <Stats counterData={counterData} />
        </div>
      </section>
    </>
  );
}

export default App;
