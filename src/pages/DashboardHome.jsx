// // src/pages/DashboardHome.jsx
// import React from "react";
// import {
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./DashboardHome.css";

// const data = [
//   { name: "Jan", sales: 4000, users: 2400 },
//   { name: "Feb", sales: 3000, users: 1398 },
//   { name: "Mar", sales: 2000, users: 9800 },
//   { name: "Apr", sales: 2780, users: 3908 },
//   { name: "May", sales: 1890, users: 4800 },
//   { name: "Jun", sales: 2390, users: 3800 },
//   { name: "Jul", sales: 3490, users: 4300 },
// ];

// const pieData = [
//   { name: "Active", value: 60 },
//   { name: "Inactive", value: 25 },
//   { name: "Pending", value: 15 },
// ];

// const COLORS = ["#4f7fff", "#36cfc9", "#ff7675"];

// const DashboardHome = () => {
//   return (
//     <div className="dashboard-home">
//       <h2>Analytics Overview</h2>

//       <div className="summary-cards">
//         <div className="card">
//           <h3>Total Users</h3>
//           <p>12,540</p>
//         </div>
//         <div className="card">
//           <h3>Revenue</h3>
//           <p>$54,200</p>
//         </div>
//         <div className="card">
//           <h3>Conversion Rate</h3>
//           <p>4.5%</p>
//         </div>
//       </div>

//       <div className="charts">
//         <div className="chart-card">
//           <h4>Sales Overview</h4>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={data}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="sales" stroke="#4f7fff" strokeWidth={2} />
//               <Line type="monotone" dataKey="users" stroke="#ff7675" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-card">
//           <h4>User Distribution</h4>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={pieData} dataKey="value" outerRadius={80} label>
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-card">
//           <h4>Monthly Growth</h4>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={data}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="users" fill="#4f7fff" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;
// src/pages/DashboardHome.jsx
import React, { useEffect, useState, Suspense, lazy } from "react";
import "./DashboardHome.css";

// Lazy load Recharts (optional optimization)
const {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} = await import("recharts");

// Skeleton loader for charts and cards
const SkeletonLoader = ({ height = "250px" }) => (
  <div
    style={{
      background:
        "linear-gradient(90deg, #e0e0e0 25%, #f4f4f4 37%, #e0e0e0 63%)",
      backgroundSize: "400% 100%",
      animation: "shimmer 1.4s ease infinite",
      height,
      width: "100%",
      borderRadius: "8px",
    }}
  ></div>
);

const data = [
  { name: "Jan", sales: 4000, users: 2400 },
  { name: "Feb", sales: 3000, users: 1398 },
  { name: "Mar", sales: 2000, users: 9800 },
  { name: "Apr", sales: 2780, users: 3908 },
  { name: "May", sales: 1890, users: 4800 },
  { name: "Jun", sales: 2390, users: 3800 },
  { name: "Jul", sales: 3490, users: 4300 },
];

const pieData = [
  { name: "Active", value: 60 },
  { name: "Inactive", value: 25 },
  { name: "Pending", value: 15 },
];

const COLORS = ["#4f7fff", "#36cfc9", "#ff7675"];

const DashboardHome = () => {
  const [loading, setLoading] = useState(true);

  // simulate API delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-home">
      <h2>Analytics Overview</h2>

      <div className="summary-cards">
        {loading ? (
          <>
            <SkeletonLoader height="100px" />
            <SkeletonLoader height="100px" />
            <SkeletonLoader height="100px" />
          </>
        ) : (
          <>
            <div className="card">
              <h3>Total Users</h3>
              <p>12,540</p>
            </div>
            <div className="card">
              <h3>Revenue</h3>
              <p>$54,200</p>
            </div>
            <div className="card">
              <h3>Conversion Rate</h3>
              <p>4.5%</p>
            </div>
          </>
        )}
      </div>

      <div className="charts">
        <div className="chart-card">
          <h4>Sales Overview</h4>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#4f7fff" strokeWidth={2} />
                <Line type="monotone" dataKey="users" stroke="#ff7675" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="chart-card">
          <h4>User Distribution</h4>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="chart-card">
          <h4>Monthly Growth</h4>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#4f7fff" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
