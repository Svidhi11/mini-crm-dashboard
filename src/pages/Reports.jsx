import React, { useState } from "react";

const ReportsPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const reports = [
    { id: 1, date: "2025-10-01", title: "Monthly Sales Report" },
    { id: 2, date: "2025-10-15", title: "Performance Report" },
    { id: 3, date: "2025-10-25", title: "User Growth Report" },
  ];

  const filteredReports = reports.filter((r) => {
    if (!startDate && !endDate) return true;
    return (
      (!startDate || r.date >= startDate) &&
      (!endDate || r.date <= endDate)
    );
  });

  return (
    <div style={{ color: "black"  }}>
      <h2>Reports</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <label>
          From:{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          To:{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>

      <ul style={{ color: "black" }}>
        {filteredReports.length > 0 ? (
          filteredReports.map((r) => <li key={r.id}>{r.title}</li>)
        ) : (
          <p>No reports found for this date range.</p>
        )}
      </ul>
    </div>
  );
};

export default ReportsPage;
