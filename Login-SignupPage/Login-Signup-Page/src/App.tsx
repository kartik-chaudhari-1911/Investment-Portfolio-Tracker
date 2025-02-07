import React, { useState } from 'react';
import AuthPages from './components/AuthPages';
import Navbar from './components/Navbar';

type Page = 'home' | 'portfolio' | 'news';
type AuthStatus = 'authenticated' | 'unauthenticated';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [authStatus, setAuthStatus] = useState<AuthStatus>('unauthenticated');
  const [user, setUser] = useState<{ name?: string; email: string } | null>(null);

  const handleLogin = (email: string, password: string) => {
    // In a real app, you would validate credentials with your backend
    console.log('Logging in with:', email, password);
    setAuthStatus('authenticated');
    setUser({ email });
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // In a real app, you would send this data to your backend
    console.log('Signing up with:', name, email, password);
    setAuthStatus('authenticated');
    setUser({ name, email });
  };

  const handleLogout = () => {
    setAuthStatus('unauthenticated');
    setUser(null);
  };

  if (authStatus === 'unauthenticated') {
    return (
      <AuthPages
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* User Welcome Section */}
        <div className="px-4 sm:px-0">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome{user?.name ? `, ${user.name}` : ''}!
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 
                rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 
                hover:scale-105 active:scale-95"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          {currentPage === 'home' && (
            <div>
              <h2 className="text-xl font-medium text-gray-900">Dashboard Overview</h2>
              {/* Add your dashboard content here */}
            </div>
          )}
          
          {currentPage === 'portfolio' && (
            <div>
              <h2 className="text-xl font-medium text-gray-900">Portfolio Analysis</h2>
              {/* Add your portfolio content here */}
            </div>
          )}
          
          {currentPage === 'news' && (
            <div>
              <h2 className="text-xl font-medium text-gray-900">Latest News</h2>
              {/* Add your news content here */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;