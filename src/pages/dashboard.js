import React, { useState } from "react";
import { DatePicker, Progress } from "antd";
import { Calendar } from "antd";
import pdf from "../assests/pdf.svg";
import png from "../assests/png.svg";
import jpeg from "../assests/jpeg.svg";
import edit from "../assests/edit.svg";
import hourSpent from "../assests/hoursSpent.svg";
import performance from "../assests/performance.svg";
import userExp from "../assests/userExp.svg";
import visualDesignIcon from "../assests/visualDesignIcon.svg";
import graduation from "../assests/graduation.svg";
import checked from "../assests/checked.svg";
import {
  BookOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Human Interaction Designs",
      description: "Tuesday, 30 June 2024",
      checked: false,
    },
    {
      id: 2,
      title: "Design system Basics",
      description: "Monday, 24 June 2024",
      checked: false,
    },
    {
      id: 3,
      title: "Introduction to UI",
      description: "Friday, 10 June 2024",
      checked: true,
    },
    {
      id: 4,
      title: "Basics of Figma",
      description: "Friday, 05 June 2024",
      checked: true,
    },
  ]);

  const handleCheck = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const courses = [
    {
      id: 1,
      title: "User Experience (UX) Design",
      image: userExp,
      duration: "5.30hrs",
      lessons: "05 Lessons",
      assignments: "Assignments",
    },
    {
      id: 2,
      title: "Visual Design and Branding",
      image: visualDesignIcon,
      duration: "4.30hrs",
      lessons: "04 Lessons",
      assignments: "Assignments",
    },
  ];

  const lessons = [
    {
      id: 1,
      title: "UX Design Fundamentals",
      image: graduation,
      duration: "5:30pm",
    },
    {
      id: 2,
      title: "Interaction Design",
      image: checked,
      duration: "4.30pm",
    },
  ];

  const onSelect = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date.isBefore(startDate)) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  const dateFullCellRender = (value) => {
    let style = {};
    if (startDate && value.isSame(startDate, "day")) {
      style = {
        backgroundColor: "#1890ff",
        color: "#fff",
        borderRadius: "50%",
      };
    }
    if (
      startDate &&
      endDate &&
      value.isAfter(startDate, "day") &&
      value.isBefore(endDate, "day")
    ) {
      style = { backgroundColor: "#bae7ff", borderRadius: "50%" };
    }
    if (endDate && value.isSame(endDate, "day")) {
      style = {
        backgroundColor: "#1890ff",
        color: "#fff",
        borderRadius: "50%",
      };
    }
    return (
      <div
        style={{ ...style, width: "100%", height: "100%", textAlign: "center" }}
      >
        {value.date()}
      </div>
    );
  };

  return (
    <div>
      <div>
        <p className="font-bold text-[#211C37] text-[33px]">Hello Harsh 👋🏻</p>
        <p className="font-normal text-[20px] text-[#85878D]">
          Let’s learn something new today!
        </p>
      </div>
      <div className="flex space-x-6 items-stretch pt-3">
        <div className="bg-white rounded-2xl shadow p-6 flex-1">
          <h2 className="text-lg font-semibold mb-4">Recent enrolled course</h2>
          <div className="border rounded-xl p-4 flex flex-col items-start">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl mb-3">
              <img src={edit} alt="edit" />
            </div>
            <h3 className="font-medium mb-2">Product Design Course</h3>
            <Progress
              percent={(14 / 30) * 100}
              showInfo={false}
              strokeColor="#2563eb"
              className="w-full"
            />
            <span className="text-sm text-gray-500 mt-2">14/30 class</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex-[2]">
          <h2 className="text-xl font-medium mb-4 text-[#1C1D1D]">
            Your Resources
          </h2>

          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={pdf} alt="pdf" />
              <div>
                <p className="font-medium">Auto-layout.pdf</p>
                <div className="w-64 h-2 bg-gray-200 rounded-full mt-2">
                  <div className="h-2 bg-blue-600 rounded-full w-[60%]" />
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 text-right">
              <p>8.5 MB</p>
              <button className="text-gray-400 mt-1">Cancel</button>
            </div>
          </div>

          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={png} alt="png" />

              <div>
                <p className="font-medium">Design_Tips.png</p>
                <p className="text-xs text-gray-500">
                  Let’s quickly create some realistic and shiny metal @figma✨
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500 text-right">
              <p>576 KB</p>
              <button className="text-blue-600 mt-1">Download</button>
            </div>
          </div>

          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={jpeg} alt="jpeg" />

              <div>
                <p className="font-medium">Basics_of_UX.fig</p>
                <p className="text-xs text-gray-500">
                  An introductory guide to the fundamental principles and
                  practices of User Experience (UX) design.
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500 text-right">
              <p>2.5 MB</p>
              <button className="text-blue-600 mt-1">Download</button>
            </div>
          </div>

          <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-xl font-medium">
            see more
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow  flex-1 p-3">
          <Calendar
            fullscreen={false}
            onSelect={onSelect}
            dateFullCellRender={dateFullCellRender}
          />
          <p className="">
            Selected Range: {startDate ? startDate.format("YYYY-MM-DD") : "-"}{" "}
            {endDate ? " → " + endDate.format("YYYY-MM-DD") : ""}
          </p>
        </div>
      </div>
      <div className="flex space-x-6 items-stretch pt-8">
        <div className="bg-white rounded-2xl shadow p-6 flex-[2]">
          <h2 className="text-lg font-semibold mb-4">Hours Spent</h2>
          <div className="">
            <img src={hourSpent} alt="hourSpent" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex-[2]">
          <h2 className="text-xl font-medium mb-4 text-[#1C1D1D]">
            Performance
          </h2>
          <div className="">
            <img src={performance} alt="performance" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex-[2]">
          <h2 className="text-xl font-medium mb-4 text-[#1C1D1D]">
            To do list
          </h2>
          <div className="space-y-4">
            {items.map((item) => (
              <label key={item.id} className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                  className="mt-1"
                />
                <div>
                  <p
                    className={`font-inter text-[14px] font-medium text-gray-800 ${
                      item.checked ? "line-through" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-[12px] text-gray-500">
                    {item.description}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-6 items-stretch pt-8">
        <div className="bg-white rounded-2xl shadow p-6 flex-[2]">
          <h2 className="text-lg font-semibold mb-4">
            Recent enrolled classes
          </h2>
          <div className="space-y-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border p-5 rounded-2xl transition-all duration-300 
                 hover:border-blue-500 hover:bg-gray-50"
              >
                <div className="flex items-center gap-5">
                  <div>
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div>
                    <p
                      className="text-[#1C1D1D] font-normal text-base 
                        transition-colors duration-300 hover:text-[#0063F8]"
                    >
                      {course.title}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-[#1C1D1D] mt-2">
                      <span className="flex items-center gap-1">
                        <ClockCircleOutlined /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOutlined /> {course.lessons}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircleOutlined /> {course.assignments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex-[2]">
          <h2 className="text-xl font-medium mb-4 text-[#1C1D1D]">
            Upcoming Lesson
          </h2>
          <div className="space-y-3">
            {lessons.map((course) => (
              <div
                key={course.id}
                className="bg-white border p-5 rounded-2xl transition-all duration-300 
                 hover:border-blue-500 hover:bg-gray-50 flex justify-between items-center"
              >
                <div className="flex items-center gap-5">
                  <div>
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div>
                    <p
                      className="text-[#1C1D1D] font-normal text-base 
                        transition-colors duration-300 hover:text-[#0063F8]"
                    >
                      {course.title}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-[#1C1D1D] mt-2">
                      <span className="flex items-center gap-1">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button className="flex items-center gap-2 px-4 py-2  rounded-xl bg-[#0063F80F] text-[#0063F8] font-medium hover:bg-blue-700 hover:text-white">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
