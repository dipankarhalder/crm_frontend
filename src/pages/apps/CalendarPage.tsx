import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [
  { title: "All Day Event", start: getDate("YEAR-MONTH-09T16:00:00+00:00") },
  {
    title: "Rendezvous",
    start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
  },
  {
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
  },
  {
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
  },
  {
    title: "Consultation",
    start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
    end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
  },
  {
    title: "Visit",
    start: getDate("YEAR-MONTH-18T12:00:00+00:00"),
    end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
  },
  { title: "maladie", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
  { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
  { title: "controlle", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  { title: "finish", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
];

function getDate(dayString: string) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();
  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export const CalendarPage = () => {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className="flex justify-between items-center py-4 w-full">
          <h1 className="font-semibold mr-8 text-base text-black">Calendar</h1>
        </div>
        <div>
          <FullCalendar
            initialView="dayGridMonth"
            firstDay={1}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            themeSystem="standard"
            plugins={[dayGridPlugin]}
            events={events}
          />
        </div>
      </div>
    </div>
  );
};
