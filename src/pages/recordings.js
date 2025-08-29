import React, { useState } from "react";
import { Input, Modal } from "antd";
import {
  ClockCircleOutlined,
  BookOutlined,
  PlayCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import colorStyle from "../assests/colorStyles.svg";
import designThinkingProject from "../assests/designThinkingProject.svg";
import curosityTech from "../assests/curosityTech.svg";
import visualDesign from "../assests/visualDesign.svg";

const recordings = [
  {
    id: 1,
    title: "Color Styles - 02",
    duration: "1:30hrs",
    lessons: "02 Lessons",
    thumbnail: colorStyle,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Design Thinking",
    duration: "30min",
    lessons: "01 Lesson",
    thumbnail: designThinkingProject,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Visual Designs Briefs",
    duration: "3 hrs",
    lessons: "01 Lesson",
    thumbnail: visualDesign,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Curiosity for terminology",
    duration: "45min",
    lessons: "01 Lesson",
    thumbnail: curosityTech,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Color styles - 01",
    duration: "55min",
    lessons: "01 Lesson",
    thumbnail: colorStyle,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function RecordingsPage() {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleWatchNow = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setOpen(true);
  };

  const handleDownload = (url, title) => {
    if (url.endsWith(".mp4")) {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${title}.mp4`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Download is not available for this video.");
    }
  };

  const filteredRecordings = recordings.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-[#211C37] text-[33px]">
            Class Recordings
          </p>
          <p className="font-normal text-[20px] text-[#85878D]">
            Access and review past class sessions
          </p>
        </div>
        <div className="flex  gap-3 items-center">
        <Input.Search
          placeholder="Search recordings..."
          allowClear
          value={searchQuery}
          size="middle"
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ maxWidth: 200 }}
        />
        <p className="text-[#85878D]">Filter by <span className="text-[#0063F8]">Date | Course</span></p>
        </div>
     
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecordings.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl shadow-lg border bg-white overflow-hidden p-3"
          >
            <div className="relative">
              <img src={item.thumbnail} alt={item.title} className=" w-full" />
            </div>

            <div className="pt-2">
              <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
              <div className="flex items-center gap-6 text-sm text-gray-600 mt-2">
                <span className="flex items-center gap-1">
                  <ClockCircleOutlined /> {item.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOutlined /> {item.lessons}
                </span>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700"
                  onClick={() => handleWatchNow(item.videoUrl)}
                >
                  <PlayCircleOutlined /> Watch Now
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl  bg-[#0063F80F] text-[#0063F8] font-medium cursor-pointer"
                  onClick={() => handleDownload(item.videoUrl, item.title)}
                >
                  {" "}
                  <DownloadOutlined /> Download
                </button>
              </div>
            </div>
          </div>
        ))}

        <Modal
          open={open}
          footer={null}
          onCancel={() => setOpen(false)}
          width={800}
        >
          <iframe
            width="100%"
            height="400"
            src={currentVideo}
            title="Video Player"
            allowFullScreen
          />
        </Modal>
      </div>
    </div>
  );
}
