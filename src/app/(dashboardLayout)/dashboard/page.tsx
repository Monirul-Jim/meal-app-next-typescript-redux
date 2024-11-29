// const DashboardHomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6">
//       {/* Page Container */}
//       <div className="max-w-7xl mx-auto">
//         {/* Welcome Section */}
//         <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
//           <h1 className="text-4xl font-semibold text-gray-800 mb-4">
//             Welcome to Your Dashboard!
//           </h1>
//           <p className="text-lg text-gray-600">
//             This is your personalized dashboard where you can manage all your
//             tasks and monitor important updates.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <svg
//                   className="h-8 w-8 text-blue-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 13l4 4L16 7"
//                   />
//                 </svg>
//                 <p className="ml-4 text-xl font-medium text-gray-700">
//                   Task Completion
//                 </p>
//               </div>
//               <p className="text-2xl font-bold text-blue-600">75%</p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <svg
//                   className="h-8 w-8 text-green-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 12h14M12 5l7 7-7 7"
//                   />
//                 </svg>
//                 <p className="ml-4 text-xl font-medium text-gray-700">
//                   Messages
//                 </p>
//               </div>
//               <p className="text-2xl font-bold text-green-600">25 New</p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <svg
//                   className="h-8 w-8 text-purple-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 8c3.313 0 6 1.343 6 3s-2.687 3-6 3-6-1.343-6-3 2.687-3 6-3z"
//                   />
//                 </svg>
//                 <p className="ml-4 text-xl font-medium text-gray-700">
//                   Performance
//                 </p>
//               </div>
//               <p className="text-2xl font-bold text-purple-600">85%</p>
//             </div>
//           </div>
//         </div>

//         {/* Action Section */}
//         <div className="mt-8 text-center">
//           <p className="text-lg text-gray-600 mb-4">
//             Ready to manage your tasks? Click below to start managing your
//             dashboard settings.
//           </p>
//           <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
//             Manage Dashboard Settings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHomePage;
const DashboardHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      {/* Page Container */}
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Welcome to Your Mess Dashboard!
          </h1>
          <p className="text-lg text-gray-600">
            Here you can manage your mess, track meal servings, and monitor
            financials. Stay on top of your daily meal plans and more.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Active Members */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="h-8 w-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 13l4 4L16 7"
                  />
                </svg>
                <p className="ml-4 text-xl font-medium text-gray-700">
                  Active Members
                </p>
              </div>
              <p className="text-2xl font-bold text-blue-600">150</p>
            </div>
          </div>

          {/* Card 2: Meals Served */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="h-8 w-8 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                <p className="ml-4 text-xl font-medium text-gray-700">
                  Meals Served Today
                </p>
              </div>
              <p className="text-2xl font-bold text-green-600">350</p>
            </div>
          </div>

          {/* Card 3: Daily Cost */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="h-8 w-8 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c3.313 0 6 1.343 6 3s-2.687 3-6 3-6-1.343-6-3 2.687-3 6-3z"
                  />
                </svg>
                <p className="ml-4 text-xl font-medium text-gray-700">
                  Daily Meal Cost
                </p>
              </div>
              <p className="text-2xl font-bold text-purple-600">$120</p>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Ready to manage your mess and track meal expenses? Click below to
            manage your mess settings.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Manage Mess Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
