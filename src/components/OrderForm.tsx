import { useState } from "react";

const OrderForm = () => {
  const typesArr = ["Veg", "Non-Veg"];
  const sizesArr = ["Large", "Medium", "Small"];
  const basesArr = ["Thin", "Thick"];

  const [types, setTypes] = useState("");
  const [sizes, setSizes] = useState("");
  const [bases, setBases] = useState("");

  const handleSubmit = () => {
    // Do something with selected values
    console.log("Selected Type:", types);
    console.log("Selected Size:", sizes);
    console.log("Selected Base:", bases);
  };

  return (
    <div className="flex justify-between space-x-4 p-4">
      <div className="w-1/4">
        <label className="block font-bold mb-2">Type:</label>
        <select
          className="w-full p-2 border rounded"
          value={types}
          onChange={(e) => setTypes(e.target.value)}
        >
          <option value="">Select Type</option>
          {typesArr.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="w-1/4">
        <label className="block font-bold mb-2">Size:</label>
        <select
          className="w-full p-2 border rounded"
          value={sizes}
          onChange={(e) => setSizes(e.target.value)}
        >
          <option value="">Select Size</option>
          {sizesArr.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="w-1/4">
        <label className="block font-bold mb-2">Base:</label>
        <select
          className="w-full p-2 border rounded"
          value={bases}
          onChange={(e) => setBases(e.target.value)}
        >
          <option value="">Select Base</option>
          {basesArr.map((base, index) => (
            <option key={index} value={base}>
              {base}
            </option>
          ))}
        </select>
      </div>
      <button className="p-4 border text-white bg-blue-900 rounded-lg" onClick={handleSubmit}>
        Place Order
      </button>
    </div>
  );
};

export default OrderForm;
