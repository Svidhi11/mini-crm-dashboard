import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { logout, theme, toggleTheme } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`dashboard-container theme-${theme}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Mini CRM</h2>
        <nav className="nav-menu">
          <NavLink to="/" end className="nav-item">
            Dashboard
          </NavLink>
          <NavLink to="/users" className="nav-item">
            Users
          </NavLink>
          <NavLink to="/reports" className="nav-item">
            Reports
          </NavLink>
          <NavLink to="/settings" className="nav-item">
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* ✅ Topbar */}
        <header className="topbar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
            />
            <button className="search-btn">🔍</button>
          </div>

          <div className="topbar-right">
            {/* 🌗 Theme Toggle */}
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            <div className="user-info">
              <img
                src="https://i.pravatar.cc/40"
                alt="User Avatar"
                className="avatar"
              />
              <span className="username">Admin</span>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
