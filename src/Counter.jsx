
export const Counter = ({counterValue, incrementHandel, dicrementHandel}) => {


  return (
    <>
      <div className="box-bg">
        <h1 className="text-center">{counterValue}</h1>

        <div className="flex x-y-center ">
          <button onClick={incrementHandel}>Increment</button>
          <button onClick={dicrementHandel}>dicrement</button>
        </div>
      </div>
    </>
  );
};
