const Price = ({ amount }: { amount: number }) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount);

  return <span> {formattedPrice}</span>;
};

export default Price;
