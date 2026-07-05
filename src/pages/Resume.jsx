import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-16 md:py-24">

      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
        My Resume
      </h1>

      {/* Download Button */}
      <div className="flex justify-center mb-6">
        <a
          href="/TBhargavraju_Resume.pdf"
          download
          className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
        >
          Download Resume
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex justify-center">
        <iframe
          src="/TBhargavraju_Resume.pdf"
          title="Resume"
          className="w-full h-[500px] md:h-[800px] border-2 border-gray-300 rounded-md shadow-lg"
        />
      </div>

    </div>
  );
};

export default Resume;