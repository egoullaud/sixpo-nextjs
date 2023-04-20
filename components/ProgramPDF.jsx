import React from "react";
import Link from "next/link";
export default function ProgramPDF({ eventPrograms }) {
  return (
    <div>
      {eventPrograms.map((eventProgram) => (
        <Link
          key={eventProgram.id}
          href={eventProgram.programPdf.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="
text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
py-2 px-4 mx-1 mb-4
md:py-2 md:px-4 md:mx-1
lg:px-8 lg:py-3 lg:text-lg lg:mx-2
hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]"
          >
            Event Program (PDF)
          </button>
        </Link>
      ))}
    </div>
  );
}
