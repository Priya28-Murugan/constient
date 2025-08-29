import { Input, Table } from "antd";
import React, { useState } from "react";

const AssignmentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const columns = [
    {
      title: "Assignment Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Course/lessons",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Due Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let bgColor = "";
        let textColor = "";
        let circleColor = "";

        if (status === "Done") {
          bgColor = "bg-green-100";
          textColor = "text-green-600";
          circleColor = "bg-green-500";
        } else if (status === "Progress") {
          bgColor = "bg-blue-100";
          textColor = "text-blue-600";
          circleColor = "bg-blue-500";
        } else if (status === "Failed") {
          bgColor = "bg-red-100";
          textColor = "text-red-600";
          circleColor = "bg-red-500";
        }

        return (
          <button
            className={`flex items-center gap-2 px-3 py-1 rounded-xl font-medium cursor-pointer ${bgColor} ${textColor}`}
          >
            <span className={`w-2 h-2 rounded-full ${circleColor}`}></span>
            {status}
          </button>
        );
      },
    },

    {
      title: "Submit",
      key: "submit",
      dataIndex: "submit",
    },
  ];

  const courses = [
    "UX Design",
    "Visual Design",
    "React Basics",
    "AI Fundamentals",
  ];
  const statuses = ["Done", "Progress", "Failed"];
  const submits = ["Upload", "Submitted"];

  const data = Array.from({ length: 100 }, (_, i) => {
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const dueDate = `${randomDay.toString().padStart(2, "0")}/${randomMonth
      .toString()
      .padStart(2, "0")}/2025`;

    return {
      key: i + 1,
      title: `Assignment ${i + 1}`,
      course: courses[Math.floor(Math.random() * courses.length)],
      date: dueDate,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      submit: submits[Math.floor(Math.random() * submits.length)],
    };
  });

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.submit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-[#211C37] text-[33px]">Assignments</p>
          <p className="font-normal text-[20px] text-[#85878D]">
            View and manage your course assignments
          </p>
        </div>
        <div className="flex  gap-3 items-center">
          <Input.Search
            placeholder="Search assignments..."
            allowClear
            value={searchQuery}
            size="middle"
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ maxWidth: 200 }}
          />
          <p className="text-[#85878D]">
            Filter by <span className="text-[#0063F8]">Date | Status</span>
          </p>
        </div>
      </div>
      <div className="pt-5">
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default AssignmentsPage;
