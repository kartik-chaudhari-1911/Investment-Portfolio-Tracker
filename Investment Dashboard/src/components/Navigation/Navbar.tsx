
// import React from 'react';
// import { BarChart, PieChart, Newspaper, LogIn } from 'lucide-react';

// interface NavbarProps {
//   currentPage: 'home' | 'portfolio' | 'news';
//   onPageChange: (page: 'home' | 'portfolio' | 'news') => void;
// }

// export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
//   return (
//     <nav className="bg-white border-b border-gray-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo and Brand */}
//           <div className="flex items-center">
//             <div className="flex items-center justify-center h-10 w-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg 
//               transform transition-transform duration-300 hover:scale-110">
//               <BarChart className="h-6 w-6 text-white" />
//             </div>
//             <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               Portfolio Dashboard
//             </span>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex items-center space-x-2">
//             <button
//               aria-label="Go to Dashboard"
//               onClick={() => onPageChange('home')}
//               className={`px-4 py-2.5 rounded-lg text-sm font-medium 
//                 transition-all duration-300 ease-in-out group
//                 ${currentPage === 'home'
//                   ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md'
//                   : 'text-gray-600 hover:bg-gray-50 hover:shadow-sm'
//                 }
//                 flex items-center space-x-2 
//                 transform hover:scale-105 active:scale-95`}
//             >
//               <BarChart 
//                 className={`h-4 w-4 transition-colors duration-300 
//                   ${currentPage === 'home' 
//                     ? 'text-blue-600' 
//                     : 'text-gray-500 group-hover:text-blue-500'
//                   }`} 
//               />
//               <span>Dashboard</span>
//             </button>

//             <button
//               aria-label="Go to Portfolio"
//               onClick={() => onPageChange('portfolio')}
//               className={`px-4 py-2.5 rounded-lg text-sm font-medium 
//                 transition-all duration-300 ease-in-out group
//                 ${currentPage === 'portfolio'
//                   ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md'
//                   : 'text-gray-600 hover:bg-gray-50 hover:shadow-sm'
//                 }
//                 flex items-center space-x-2 
//                 transform hover:scale-105 active:scale-95`}
//             >
//               <PieChart 
//                 className={`h-4 w-4 transition-colors duration-300 
//                   ${currentPage === 'portfolio' 
//                     ? 'text-blue-600' 
//                     : 'text-gray-500 group-hover:text-blue-500'
//                   }`} 
//               />
//               <span>Portfolio</span>
//             </button>

//             <button
//               aria-label="Go to News"
//               onClick={() => onPageChange('news')}
//               className={`px-4 py-2.5 rounded-lg text-sm font-medium 
//                 transition-all duration-300 ease-in-out group
//                 ${currentPage === 'news'
//                   ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md'
//                   : 'text-gray-600 hover:bg-gray-50 hover:shadow-sm'
//                 }
//                 flex items-center space-x-2 
//                 transform hover:scale-105 active:scale-95`}
//             >
//               <Newspaper 
//                 className={`h-4 w-4 transition-colors duration-300 
//                   ${currentPage === 'news' 
//                     ? 'text-blue-600' 
//                     : 'text-gray-500 group-hover:text-blue-500'
//                   }`} 
//               />
//               <span>News</span>
//             </button>

//             {/* Sign In Button */}
//             <button
//               aria-label="Sign In"
//               className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 
//                 hover:bg-gray-50 hover:shadow-sm transition-all duration-300 ease-in-out 
//                 flex items-center space-x-2 transform hover:scale-105 active:scale-95"
//             >
//               <LogIn className="h-4 w-4 text-gray-500 group-hover:text-blue-500" />
//               <span>Sign In</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import { BarChart, PieChart, Newspaper, LogIn } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'portfolio' | 'news';
  onPageChange: (page: 'home' | 'portfolio' | 'news') => void;
  onSignInClick: () => void; // Add this prop
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, onSignInClick }) => {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex items-center justify-center h-10 w-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg 
              transform transition-transform duration-300 hover:scale-110">
              <BarChart className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio Dashboard
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2">
            <button
              aria-label="Go to Dashboard"
              onClick={() => onPageChange('home')}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium 
                transition-all duration-300 ease-in-out group
                ${currentPage === 'home'
                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md'
                  : 'text-gray-600 hover:bg-gray-50 hover:shadow-sm'
                }
                flex items-center space-x-2 
                transform hover:scale-105 active:scale-95`}
            >
              <BarChart 
                className={`h-4 w-4 transition-colors duration-300 
                  ${currentPage === 'home' 
                    ? 'text-blue-600' 
                    : 'text-gray-500 group-hover:text-blue-500'
                  }`} 
              />
              <span>Dashboard</span>
            </button>

            <button
              aria-label="Go to Portfolio"
              onClick={() => onPageChange('portfolio')}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium 
                transition-all duration-300 ease-in-out group
                ${currentPage === 'portfolio'
                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md'
                  : 'text-gray-600 hover:bg-gray-50 hover:shadow-sm'
                }
                flex items-center space-x-2 
                transform hover:scale-105 active:scale-95`}
            >
              <PieChart 
                className={`h-4 w-4 transition-colors duration-300 
                  ${currentPage === 'portfolio' 
                    ? 'text-blue-600' 
                    : 'text-gray-500 group-hover:text-blue-500'
                  }`} 
              />
              <span>Portfolio</span>
            </button>

            <button
              aria-label="Go to News"
              onClick={() => onPageChange('news')}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium 
                transition-all duration-300 ease-in-out group
                ${currentPage === 'news'
                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md'
                  : 'text-gray-600 hover:bg-gray-50 hover:shadow-sm'
                }
                flex items-center space-x-2 
                transform hover:scale-105 active:scale-95`}
            >
              <Newspaper 
                className={`h-4 w-4 transition-colors duration-300 
                  ${currentPage === 'news' 
                    ? 'text-blue-600' 
                    : 'text-gray-500 group-hover:text-blue-500'
                  }`} 
              />
              <span>News</span>
            </button>

            {/* Sign In Button */}
            <button
              aria-label="Sign In"
              onClick={onSignInClick} // Call the onSignInClick handler
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 
                hover:bg-gray-50 hover:shadow-sm transition-all duration-300 ease-in-out 
                flex items-center space-x-2 transform hover:scale-105 active:scale-95"
            >
              <LogIn className="h-4 w-4 text-gray-500 group-hover:text-blue-500" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;