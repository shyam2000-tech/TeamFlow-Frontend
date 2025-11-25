"use client";

import { useState } from "react";
import Dropdown from "@/components/ui/Dropdown";
import SearchBox from "@/components/ui/SearchBox";

export default function TasksPage() {
  const tasks = [
    {
      id: 17,
      project_id: "hello hey",
      title: "Task Drag & Drop",
      description: "Implement drag and drop for Kanban tasks",
      status: "TODO",
      priority: "HIGH",
      assignee_id: "Member 1",
    },
    {
      id: 21,
      project_id: "CRM Live Project",
      title: "JWT Refresh Token",
      description: "Implement refresh token rotation",
      status: "IN_PROGRESS",
      priority: "MEDIUM",
      assignee_id: "Member 2",
    },
    {
      id: 30,
      project_id: "Vlogfied apk",
      title: "Admin User Creation",
      description: "Add role based user creation system",
      status: "DONE",
      priority: "LOW",
      assignee_id: "Member 3",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [searchText, setSearchText] = useState("");

  const statusColor = (status: string) => {
    switch (status) {
      case "DONE":
        return "bg-green-600";
      case "IN_PROGRESS":
        return "bg-blue-600";
      case "TODO":
        return "bg-gray-600";
      default:
        return "bg-gray-500";
    }
  };

  const priorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-600";
      case "MEDIUM":
        return "bg-yellow-500";
      case "LOW":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>

        <div className="text-gray-700 font-semibold">
          Total Tasks: {tasks.length}
        </div>
      </div>

      {/* Search + Custom Filters */}
      <div className="flex items-center gap-3 w-full md:w-auto mb-6">
        <SearchBox
          placeholder="Search tasks..."
          value={searchText}
          onChange={setSearchText}
        />

        <Dropdown
          label="Status"
          options={["TODO", "IN_PROGRESS", "DONE"]}
          selected={statusFilter}
          onChange={(value) => setStatusFilter(value)}
        />

        <Dropdown
          label="Priority"
          options={["HIGH", "MEDIUM", "LOW"]}
          selected={priorityFilter}
          onChange={(value) => setPriorityFilter(value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-sm bg-white border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr className="text-gray-700 font-semibold tracking-wide">
              <th className="p-4 w-12 text-center border-r border-gray-300">
                #
              </th>
              <th className="p-4 border-r border-gray-300">Task Title</th>
              <th className="p-4 border-r border-gray-300">Priority</th>
              <th className="p-4 border-r border-gray-300">Status</th>
              <th className="p-4 border-r border-gray-300">Assignee</th>
              <th className="p-4 border-r border-gray-300">Project</th>
              <th className="p-4">Description</th>
            </tr>
          </thead>

          <tbody className="text-gray-900">
            {tasks.map((task, index) => (
              <tr
                key={task.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="p-4 text-center font-medium text-gray-700 border-r border-gray-300">
                  {index + 1}
                </td>

                <td className="p-4 font-medium border-r border-gray-300">
                  {task.title}
                </td>

                <td className="p-4 border-r border-gray-300">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${priorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </td>

                <td className="p-4 border-r border-gray-300">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColor(
                      task.status
                    )}`}
                  >
                    {task.status.replace("_", " ")}
                  </span>
                </td>

                <td className="p-4 border-r border-gray-300">
                  {task.assignee_id}
                </td>

                <td className="p-4 border-r border-gray-300">
                  {task.project_id}
                </td>

                <td className="p-4">
                  {task.description.length > 40
                    ? task.description.slice(0, 40) + "..."
                    : task.description}
                </td>
              </tr>
            ))}

            {tasks.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="p-6 text-center text-gray-500 italic"
                >
                  No tasks available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
