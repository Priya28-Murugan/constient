import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const SchedulePage = () => {
  const events = [
    {
      title: "Design Review",
      start: "2025-08-01T08:30:00",
      end: "2025-08-01T10:00:00",
      backgroundColor: "#FFF9C4",
    },
    {
      title: "Standup Call",
      start: "2025-08-01T10:30:00",
      end: "2025-08-01T11:00:00",
      backgroundColor: "#E1BEE7",
    },
    {
      title: "Meeting",
      start: "2025-08-07T11:30:00",
      end: "2025-08-07T13:00:00",
      backgroundColor: "#FFF9C4",
    },
    {
      title: "Meeting Host",
      start: "2025-08-07T14:30:00",
      end: "2025-08-07T16:00:00",
      backgroundColor: "#FFCDD2",
    },
    {
      title: "Team Discussion",
      start: "2025-08-09T10:30:00",
      end: "2025-08-09T12:00:00",
      backgroundColor: "#FFCDD2",
    },
    {
      title: "Design Review",
      start: "2025-08-09T12:30:00",
      end: "2025-08-09T15:00:00",
      backgroundColor: "#C8E6C9",
    },

    {
      title: "Discussion",
      start: "2025-08-13T10:00:00",
      end: "2025-08-13T11:00:00",
      backgroundColor: "#E1BEE7",
    },
    {
      title: "New Deals",
      start: "2025-08-13T15:30:00",
      end: "2025-08-13T16:00:00",
      backgroundColor: "#C8E6C9",
    },
    {
      title: "Meeting",
      start: "2025-08-11T10:00:00",
      end: "2025-08-11T11:00:00",
      backgroundColor: "#C8E6C9",
    },
    {
      title: "Meeting",
      start: "2025-08-20T10:00:00",
      end: "2025-08-20T11:00:00",
      backgroundColor: "#FFE0B2",
    },
    {
      title: "New Deals",
      start: "2025-08-20T12:00:00",
      end: "2025-08-20T13:00:00",
      backgroundColor: "#C8E6C9",
    },
  ];

  const renderEventContent = (eventInfo) => {
    const start = eventInfo.event.start;
    const end = eventInfo.event.end;

    const formatTime = (date) =>
      date
        ? `${date.getHours().toString().padStart(2, "0")}:${date
            .getMinutes()
            .toString()
            .padStart(2, "0")}`
        : "";

    return (
      <div
        style={{
          backgroundColor: eventInfo.event.backgroundColor,
          margin: "3px",
          padding: "6px",
          borderRadius: "6px",
          width: "100%",
        }}
      >
        <div style={{ fontWeight: "bold", color: eventInfo.event.textColor }}>
          {eventInfo.event.title}
        </div>
        {start && end && (
          <div style={{ fontSize: "0.85em", color: eventInfo.event.textColor }}>
            {formatTime(start)} - {formatTime(end)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-semibold text-blue-600">Calendar</h1>
 
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-lg">Filter</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            + Add Event
          </button>
        </div>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          right: "prev,next today",
          left: "title",
        }}
        events={events}
        eventContent={renderEventContent}
        height="auto"
      />
    </div>
  );
};

export default SchedulePage;
