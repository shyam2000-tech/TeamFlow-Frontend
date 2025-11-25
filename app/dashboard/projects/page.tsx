"use client";

export default function ProjectsPage() {
  const projects = [
    {
      id: 9,
      name: "CRM Project",
      description: "Leads storing SaaS Software",
      status: "PLANNED",
      created_by: 7,
    },
    {
      id: 10,
      name: "Vehicle Service App",
      description: "Doorstep vehicle service booking",
      status: "IN_PROGRESS",
      created_by: 5,
    },
    {
      id: 11,
      name: "Payments API",
      description: "Handling secure payment transactions",
      status: "COMPLETED",
      created_by: 1,
    },
    {
      id: 12,
      name: "Vlogfied",
      description: "Find our vibe spots application",
      status: "ACTIVE",
      created_by: 8,
    },
  ];

  const statusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-600";
      case "IN_PROGRESS":
        return "bg-blue-600";
      case "PLANNED":
        return "bg-yellow-500";
      case "ACTIVE":
        return "bg-purple-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>

        <div className="text-gray-700 font-semibold">
          Total Projects: {projects.length}
        </div>
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              bg-white border border-gray-200 rounded-xl 
              p-5 shadow-sm 
              hover:shadow-md hover:-translate-y-1 
              transition-all duration-200
            "
          >
            {/* Project Title */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h2>

              <span className="text-sm text-gray-500 font-medium">
                #{project.id}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              {project.description.length > 50
                ? project.description.slice(0, 50) + "..."
                : project.description}
            </p>

            {/* Status */}
            <span
              className={`
                inline-block px-3 py-1 rounded-full text-xs font-semibold text-white 
                ${statusColor(project.status)}
              `}
            >
              {project.status.replace("_", " ")}
            </span>

            {/* Bottom: Created By + View Button */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-gray-700 text-sm">
                Created by:{" "}
                <span className="font-medium">User #{project.created_by}</span>
              </p>

              <button
                className="
                  bg-blue-600 text-white 
                  text-xs px-3 py-1 rounded-lg 
                  hover:bg-blue-700 transition
                  shadow-sm
                "
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 text-center text-gray-600">
        Showing{" "}
        <span className="font-semibold text-gray-800">{projects.length}</span>{" "}
        projects
      </div>
    </div>
  );
}
