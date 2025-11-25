"use client";

export default function UsersPage() {
  const users = [
    { id: 6, name: "Muhammed Abdu Rahoof", email: "rahoof@gmail.com", role: "MEMBER" },
    { id: 7, name: "Boss Shyam", email: "boss@gmail.com", role: "ADMIN" },
    { id: 8, name: "John Doe", email: "john@gmail.com", role: "MEMBER" },
  ];

  const roleColor = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "bg-blue-600";
      case "MEMBER":
        return "bg-gray-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>

        <div className="text-gray-700 font-semibold">
          Total Users: {users.length}
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="overflow-x-auto rounded-2xl shadow-sm bg-white border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr className="text-gray-700 font-semibold tracking-wide">
              <th className="p-4 w-12 text-center border-r border-gray-300">#</th>
              <th className="p-4 border-r border-gray-300">Name</th>
              <th className="p-4 border-r border-gray-300">Email</th>
              <th className="p-4">Role</th>
            </tr>
          </thead>

          <tbody className="text-gray-900">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="p-4 text-center font-medium text-gray-700 border-r border-gray-300">
                  {index + 1}
                </td>

                <td className="p-4 border-r border-gray-300">
                  {user.name}
                </td>

                <td className="p-4 border-r border-gray-300">
                  {user.email}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${roleColor(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-gray-500 italic">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
