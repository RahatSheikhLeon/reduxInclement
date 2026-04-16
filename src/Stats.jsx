export const Stats = ({ counterData }) => {

    const totalValue = counterData.reduce((accumulator, counterValue) => (
        accumulator + counterValue.value
    ), 0)

  return (
    <>
      <div className="box-bg">
          <span> Total : {totalValue} </span>
      </div>
    </>
  );
};
