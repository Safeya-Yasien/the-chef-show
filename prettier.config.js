module.exports = {
  sortingMethod: "lineLength",
  plugins: ["prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "^next/(.*)$",
    "^@/components/(.*)$",
    "^@/context/(.*)$",
    "^@/hooks/(.*)$",
    "^@/utils/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
