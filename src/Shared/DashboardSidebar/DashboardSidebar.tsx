"use client";

// import { useState } from "react";
// import Link from "next/link";

// const DashboardSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <button
//         onClick={toggleMenu}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
//         aria-label="Toggle Menu"
//       >
//         {isOpen ? (
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         ) : (
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         )}
//       </button>

//       {/* Sidebar Navigation */}
//       <nav
//         className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-6 z-40 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 lg:relative lg:w-64 transition-transform duration-300`}
//       >
//         {/* Close Button in Sidebar */}
//         <button
//           onClick={toggleMenu}
//           className="absolute top-4 right-4 lg:hidden text-white focus:outline-none"
//           aria-label="Close Menu"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Sidebar Links */}
//         <ul className="space-y-4 mt-12">
//           <li>
//             <Link
//               href="/dashboard"
//               className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-3"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M3 12l2-2m0 0l7-7 7 7m-9-2v12" />
//               </svg>
//               Dashboard Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/dashboard/manager"
//               className="flex items-center py-2 px-4   rounded hover:bg-gray-700 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-3"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M16 11V7a4 4 0 1 0-8 0v4m-2 0a6 6 0 1 0 12 0" />
//               </svg>
//               Manager
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/dashboard"
//               className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-3"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M12 4v16m8-8H4" />
//               </svg>
//               Add Mess
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/dashboard"
//               className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-3"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                 <circle cx="12" cy="7" r="4" />
//               </svg>
//               Add Member
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/"
//               className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-3"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M3 21v-6a9 9 0 0 1 18 0v6M9 21V9m6 12V9" />
//               </svg>
//               Home
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Overlay for Mobile */}
//       {isOpen && (
//         <div
//           onClick={toggleMenu}
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
//         ></div>
//       )}
//     </>
//   );
// };

// export default DashboardSidebar;
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg
            className="h-6 w-6"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-6 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64 transition-transform duration-300`}
      >
        {/* Sidebar Links */}
        <ul className="space-y-4 mt-12">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2910/2910766.png" // Dashboard Icon
                alt="Dashboard Icon"
                width={24}
                height={24}
                className="mr-3 filter invert"
              />
              Dashboard Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/manager"
              className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2910/2910725.png" // Manager Icon
                alt="Manager Icon"
                width={24}
                height={24}
                className="mr-3 filter invert"
              />
              Manager
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-mess"
              className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2910/2910775.png" // Add Mess Icon
                alt="Add Mess Icon"
                width={24}
                height={24}
                className="mr-3 filter invert"
              />
              Add Mess
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-member"
              className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2910/2910705.png" // Add Member Icon
                alt="Add Member Icon"
                width={24}
                height={24}
                className="mr-3 filter invert"
              />
              Add Member
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2910/2910708.png" // Home Icon
                alt="Home Icon"
                width={24}
                height={24}
                className="mr-3 filter invert"
              />
              Home
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default DashboardSidebar;
