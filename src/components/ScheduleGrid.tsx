'use client'
import React from "react";

export default function ScheduleGrid({ schedule, timeSlots, days, onCellClick }) {
  const getScheduledCourse = (day, timeSlot) => {
    if (!schedule[day]) return null;
    return schedule[day].find(course => course.time === timeSlot);
  };

  return (
    <div className="grid grid-cols-7 gap-2 mt-6">
      <div className="font-bold">Time</div>
      {days.map(day => (
        <div key={day} className="font-bold">{day}</div>
      ))}

      {timeSlots.map((timeSlot) => (
        <>
          <div key={`time-${timeSlot}`} className="font-semibold">
            {timeSlot}
          </div>
          {days.map((day) => {
            const course = getScheduledCourse(day, timeSlot);
            return (
              <div
                key={`${day}-${timeSlot}`}
                onClick={() => onCellClick(day, timeSlot, course)}
                className={`p-2 border rounded ${
                  course 
                    ? 'bg-blue-50 hover:bg-blue-100 cursor-pointer' 
                    : 'bg-gray-50 hover:bg-gray-100 cursor-pointer'
                }`}
              >
                {course ? (
                  <div className="text-sm">
                    <div className="font-medium truncate">{course.subject}</div>
                    <div className="text-xs text-gray-500 truncate">{course.teacher}</div>
                    <div className="text-xs text-gray-500">{course.salle}</div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">Libre</div>
                )}
              </div>
            );
          })}
        </>
      ))}
    </div>
  );
}