export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
};

// Each file can only have ONE default export.
export default formatCurrency;