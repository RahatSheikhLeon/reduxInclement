import { useState } from "react";
import { Counter } from "./Counter";
import { Stats } from "./Stats";
import { useDispatch, useSelector } from "react-redux";
import { dicriment, incriment } from "./features/counters/countersSlice";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const incrementHandel = (counterId) => {
    dispatch(incriment(counterId))
  }
   const dicrementHandel = (counterId) => {
    dispatch(dicriment(counterId))
  }

  const totalValue = counters.reduce(
    (accumulator, counterValue) => accumulator + counterValue.value,
    0,
  );

  return (
    <>
      <section>
        <div className="box">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              counterValue={counter.value}
              incrementHandel={() => incrementHandel(counter.id)}
              dicrementHandel={() => dicrementHandel(counter.id)}
            />
          ))}

          <Stats totalValue={totalValue} />
        </div>
      </section>
    </>
  );
}

export default App;
