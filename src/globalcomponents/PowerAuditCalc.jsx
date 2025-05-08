import { useState } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

const PowerAuditCalculator = () => {
  const [appliances, setAppliances] = useState([
    { name: "", power: "", hours: "", quantity: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newAppliances = [...appliances];
    newAppliances[index][field] = value;
    setAppliances(newAppliances);
  };

  const addRow = () => {
    setAppliances([
      ...appliances,
      { name: "", power: "", hours: "", quantity: "" },
    ]);
  };

  const removeRow = (index) => {
    const newAppliances = appliances.filter((_, i) => i !== index);
    setAppliances(newAppliances);
  };

  const totalKwh = appliances.reduce((acc, item) => {
    const power = parseFloat(item.power) || 0;
    const hours = parseFloat(item.hours) || 0;
    const qty = parseFloat(item.quantity) || 0;
    return acc + (power * hours * qty) / 1000;
  }, 0);

  const totalKw = appliances.reduce((acc, item) => {
    const power = parseFloat(item.power) || 0;
    const qty = parseFloat(item.quantity) || 0;
    return acc + (power * qty) / 1000;
  }, 0);

  return (
    <div className="siliguri">
      <h1 className="text-lg md:text-xl font-bold mb-6 siliguri text-gray-900 leading-10 text-opacity-90">
        Power Audit Calculator
      </h1>
      <div className="min-w-[300px] overflow-scroll">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="bg-gray-100 text-sm uppercase siliguri border-b border-black text-gray-900 leading-10 text-opacity-90">
              <th className="p-2 border border-black">Appliance Name</th>
              <th className="p-2 border border-black">Power (W)</th>
              <th className="p-2 border border-black">Hours</th>
              <th className="p-2 border border-black">Quantity</th>
              <th className="p-2 border border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {appliances.map((item, index) => (
              <tr key={index} className="border-[1px] border-black siliguri">
                <td className="p-2 border-r border-black">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleChange(index, "name", e.target.value)
                    }
                    className="w-full p-2 border rounded focus:outline-none"
                    placeholder="e.g. Refrigerator"
                  />
                </td>
                <td className="p-2 border-r border-black">
                  <input
                    type="number"
                    value={item.power}
                    onChange={(e) =>
                      handleChange(index, "power", e.target.value)
                    }
                    className="w-full p-2 border rounded focus:outline-none"
                    placeholder="0.00"
                  />
                </td>
                <td className="p-2 border-r border-black">
                  <input
                    type="number"
                    value={item.hours}
                    onChange={(e) =>
                      handleChange(index, "hours", e.target.value)
                    }
                    className="w-full p-2 border rounded focus:outline-none"
                    placeholder="0.00"
                  />
                </td>
                <td className="p-2 border-r border-black">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleChange(index, "quantity", e.target.value)
                    }
                    className="w-full p-2 border rounded focus:outline-none"
                    placeholder="0.00"
                  />
                </td>
                <td className="p-2 grid place-items-center">
                  <button
                    onClick={() => removeRow(index)}
                    className="text-red-500 hover:underline text-sm cursor-pointer"
                  >
                    <TrashIcon className="h-7 w-7 my-2" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={addRow}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Appliance
      </button>

      <div className="mt-6 pt-4 border-t">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
          <p className="">
            Total Energy Consumption: <strong className="text-2xl lg:text-3xl text-blue-600 text-opacity-90">{totalKwh.toFixed(2)}</strong> kWh
          </p>
          <p>
            Total Power Load: <strong className="text-2xl lg:text-3xl text-blue-600">{totalKw.toFixed(2)}</strong> kW
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerAuditCalculator;
