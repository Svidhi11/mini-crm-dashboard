import React, { useState, useEffect } from "react";

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("light");
  const [password, setPassword] = useState("");

  // Load saved data
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedTheme = localStorage.getItem("theme") || "light";

    if (savedUser) {
      setName(savedUser.name || "Admin User");
      setEmail(savedUser.email || "admin@example.com");
    }
    setTheme(savedTheme);
  }, []);

  // Save theme persistently
  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>⚙️ Settings</h2>

        {/* Profile Section */}
        <div style={styles.section}>
          <h3 style={styles.subTitle}>👤 Profile Information</h3>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              placeholder="Enter your full name"
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              readOnly
              style={{
                ...styles.input,
                background: "var(--bg-color)",
                color: "var(--text-color)",
                opacity: 0.7,
              }}
            />
          </div>
        </div>

        {/* Password Section */}
        <div style={styles.section}>
          <h3 style={styles.subTitle}>🔒 Change Password</h3>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>New Password</label>
            <input
              type="password"
              placeholder="Enter a new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>

        {/* Theme Section */}
        <div style={styles.section}>
          <h3 style={styles.subTitle}>🎨 Theme Preference</h3>
          <select
            value={theme}
            onChange={handleThemeChange}
            style={styles.select}
          >
            <option value="light">☀️ Light Mode</option>
            <option value="dark">🌙 Dark Mode</option>
          </select>
        </div>

        <button onClick={handleSave} style={styles.button}>
          💾 Save Changes
        </button>
      </div>
    </div>
  );
}

// 💅 Stylish Inline CSS
const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    background: "var(--bg-color)",
    minHeight: "calc(100vh - 80px)",
    transition: "background 0.3s ease, color 0.3s ease",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    background: "var(--bg-color)",
    color: "var(--text-color)",
    padding: "35px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "26px",
    color: "var(--text-color)",
  },
  section: {
    marginBottom: "30px",
  },
  subTitle: {
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
    color: "var(--text-color)",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "16px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "6px",
    color: "var(--text-color)",
    opacity: 0.8,
  },
  input: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "0.3s",
    background: "var(--bg-color)",
    color: "var(--text-color)",
  },
  select: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "var(--bg-color)",
    color: "var(--text-color)",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#2563eb",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
};
