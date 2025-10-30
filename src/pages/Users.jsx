import React, { useState, useEffect } from "react";
import "./Users.css";

const Users = () => {
  // Mock Data
  const initialUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", joinDate: "2023-08-15" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive", joinDate: "2024-01-02" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Active", joinDate: "2024-04-22" },
    { id: 4, name: "Diana Green", email: "diana@example.com", status: "Pending", joinDate: "2024-06-11" },
    { id: 5, name: "Edward Hill", email: "edward@example.com", status: "Active", joinDate: "2024-07-09" },
    { id: 6, name: "Fiona Adams", email: "fiona@example.com", status: "Active", joinDate: "2024-08-19" },
    { id: 7, name: "George Lee", email: "george@example.com", status: "Inactive", joinDate: "2024-09-03" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  // ✅ Filtering and Search Logic
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // ✅ Sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (sortOrder === "asc") return aValue > bValue ? 1 : -1;
    else return aValue < bValue ? 1 : -1;
  });

  // ✅ Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // ✅ Add User
  const handleAddUser = () => {
    const name = prompt("Enter name:");
    const email = prompt("Enter email:");
    const status = prompt("Enter status (Active/Inactive/Pending):");
    if (name && email && status) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        status,
        joinDate: new Date().toISOString().split("T")[0],
      };
      setUsers([...users, newUser]);
    }
  };

  // ✅ Edit User
  const handleEdit = (user) => {
    const name = prompt("Edit name:", user.name);
    const email = prompt("Edit email:", user.email);
    const status = prompt("Edit status:", user.status);
    if (name && email && status) {
      setUsers(
        users.map((u) => (u.id === user.id ? { ...u, name, email, status } : u))
      );
    }
  };

  // ✅ Delete User
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  // ✅ Sort Toggle
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  return (
    <div className="users-container" style={{ color: "black" }}>
      <div className="users-header">
        <h2>Users</h2>
        <div className="actions">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* ✅ Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>

          <button className="add-btn" onClick={handleAddUser}>
            + Add User
          </button>
        </div>
      </div>

      {/* ✅ Table */}
      <table className="users-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name ⬍</th>
            <th onClick={() => handleSort("email")}>Email ⬍</th>
            <th>Status</th>
            <th onClick={() => handleSort("joinDate")}>Join Date ⬍</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`status ${
                      user.status.toLowerCase() === "active"
                        ? "active"
                        : user.status.toLowerCase() === "inactive"
                        ? "inactive"
                        : "pending"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(user)}>
                    ✏️
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
