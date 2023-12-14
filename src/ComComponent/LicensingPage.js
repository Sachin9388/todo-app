// import React from "react";

// const LicensingPage = () => {
//   return (
//     <>
//       <div>
//         <p className="text-center text-4xl text-gray-800 mt-3">Licensing</p>
//       </div>
//     </>
//   );
// };

// export default LicensingPage;

import React from "react";

const Licensing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}

      {/* Licensing Content */}
      <div className="container mx-auto my-8">
        <h2 className="text-center text-3xl font-bold mb-4">Licensing</h2>
        <div className="bg-white p-6 rounded shadow-md">
          <p className="text-gray-700 leading-relaxed">
            {/* Your licensing information goes here */}
            This software is licensed under the XYZ License. You may use this
            software in compliance with the terms and conditions specified in
            the license agreement.
            {/* More licensing information */}
          </p>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Licensing;
