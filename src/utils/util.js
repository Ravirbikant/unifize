export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  });

export const formattedAmount = (amount, currency) => {
  const [integer, decimal] = amount.toString().split(".");
  const formattedDecimal = decimal ? decimal.padEnd(2, "0") : "00";

  return (
    <>
      {currency === "USD" ? "$" : "€"} {integer}
      <span className="decimal-values">.{formattedDecimal}</span>
    </>
  );
};
