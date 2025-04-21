import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import _ from "lodash";
import Loader from "./Loader";

function DataInfo() {
  const [records, setRecords] = useState([]);
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    // Retrieve all records from localStorage.
    const storedRecords = JSON.parse(localStorage.getItem("records") || "[]");
    // Sort records by timestamp descending (newest first).
    const sorted = _.orderBy(storedRecords, ["timestamp"], ["desc"]);
    setRecords(sorted);
  }, []);

  // Define column order matching Prediction.jsx, plus Prediction result and Time.
  const columnOrder = [
    "Name",
    "Gender",
    "Age",
    "Pregnancies",
    "Glucose",
    "BloodPressure",
    "Insulin",
    "BMI",
    "SkinThickness",
    "DPF",
    "Prediction",
    "timestamp",
  ];

  const handleSort = (columnName) => {
    if (sortedColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(columnName);
      setSortDirection("asc");
    }
  };

  // If a sort column is selected, sort the records accordingly.
  const sortedRecords = sortedColumn
    ? _.orderBy(records, [sortedColumn], [sortDirection])
    : records;

  return (
    <div className="container mx-auto my-8">
      <motion.h1
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className="text-3xl font-bold mb-4 text-purple-800 text-center p-2 border-b-2"
      >
        Data Information
      </motion.h1>
      {records.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="overflow-x-auto overflow-y-auto rounded-lg shadow-lg mx-10"
          style={{ maxHeight: "420px" }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {columnOrder.map((header, index) => (
                  <th
                    key={index}
                    onClick={() => handleSort(header)}
                    className="px-4 py-2 bg-purple-100 text-purple-800 sticky top-0 font-bold border cursor-pointer relative"
                  >
                    {header}
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      {sortedColumn === header
                        ? sortDirection === "asc"
                          ? " ▲"
                          : " ▼"
                        : "▼"}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedRecords.map((record, rowIndex) => (
                <tr key={rowIndex}>
                  {columnOrder.map((col, colIndex) => (
                    <td key={colIndex} className="px-4 py-2 border">
                      {col === "timestamp"
                        ? new Date(record[col]).toLocaleString()
                        : record[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ) : (
        <div className="text-center text-gray-700 text-xl">No records found.</div>
      )}
    </div>
  );
}

export default DataInfo;