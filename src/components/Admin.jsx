// File: Admin.jsx (React)

import { useEffect, useState } from 'react';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/admin/messages', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMessages(data);
    } catch {
      logout();
    }
  };

  const handleAuth = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
        fetchMessages();
      } else {
        alert('❌ ' + data.error);
      }
    } catch {
      alert('Server error');
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setMessages([]);
    alert('🔒 Session expired or logged out.');
  };

  useEffect(() => {
    if (!token) return;

    const decode = (token) => {
      try {
        return JSON.parse(atob(token.split('.')[1]));
      } catch {
        return null;
      }
    };

    const fetchMessages = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/admin/messages', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setMessages(data);
      } catch {
        logout();
      }
    };

    const user = decode(token);

    if (user && user.exp * 1000 < Date.now()) {
      logout();
    } else {
      fetchMessages();
    }
  }, [token]);

  const handleDelete = async (id) => {
    const ok = confirm('Are you sure you want to delete this message?');
    if (!ok) return;

    try {
      const res = await fetch(`http://localhost:3000/api/admin/messages/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch {
      alert('Error deleting message');
    }
  };

  if (!token) {
    return (
      <div className="max-w-md mx-auto mt-24">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <button
          onClick={handleAuth}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📬 Contact Messages</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg._id} className="border-t">
              <td className="px-4 py-2">{msg.name}</td>
              <td className="px-4 py-2">{msg.email}</td>
              <td className="px-4 py-2">{msg.message}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="text-red-500 font-bold hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
