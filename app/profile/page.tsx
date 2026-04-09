import React from 'react';

export default function ProfilePage() {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-sm text-stone-500 mb-6">
        <span className="hover:underline cursor-pointer">Dashboard</span>
        <span className="mx-2">-</span>
        <span className="text-stone-900 font-medium">Profile</span>
      </nav>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-8 rounded-xl border border-stone-200 shadow-sm mb-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-stone-100 border-2 border-stone-200 rounded-lg flex items-center justify-center text-2xl font-bold text-stone-600">
            LJ
          </div>
          <div>
            <h1 className="text-3xl font-bold text-stone-900">Lebron James</h1>
          </div>
        </div>
        <button className="mt-4 md:mt-0 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-md transition-colors">
          Reset page to default
        </button>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: User Details */}
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-stone-900">User details</h2>
              <button className="text-amber-600 text-sm hover:underline">Edit profile</button>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-stone-900">Email address</p>
                <p className="text-amber-600">ljames@addu.edu.ph</p>
              </div>
              <div>
                <p className="font-semibold text-stone-900">Timezone</p>
                <p className="text-stone-600">Asia/Manila</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h2 className="font-bold text-stone-900 mb-4">Privacy and policies</h2>
            <p className="text-amber-600 text-sm hover:underline cursor-pointer">Data Retention Summary</p>
          </section>
        </div>

        {/* Middle Column: Course Details */}
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h2 className="font-bold text-stone-900 mb-4">Course details</h2>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-stone-900">Course profiles</p>
              {[
                "Advanced Web Development - Sarah Miller",
                "Machine Learning Basics - Alan Turing",
                "UI/UX Design Systems - Jane Cooper"
              ].map((course, i) => (
                <p key={i} className="text-sm text-amber-600 hover:underline cursor-pointer">{course}</p>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h2 className="font-bold text-stone-900 mb-4">Miscellaneous</h2>
            <div className="space-y-2 text-sm text-amber-600">
              <p className="hover:underline cursor-pointer">Blog entries</p>
              <p className="hover:underline cursor-pointer">Forum posts</p>
              <p className="hover:underline cursor-pointer">Learning plans</p>
            </div>
          </section>
        </div>

        {/* Right Column: Login Activity */}
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h2 className="font-bold text-stone-900 mb-4">Login activity</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-stone-900">First access to site</p>
                <p className="text-stone-500 font-light">Wednesday, 1 April 2026 (8 days ago)</p>
              </div>
              <div>
                <p className="font-semibold text-stone-900">Last access to site</p>
                <p className="text-stone-500 font-light">Thursday, 9 April 2026 (now)</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center text-center">
            <h2 className="font-bold text-stone-900 mb-4 self-start">Mobile app</h2>
            <div className="bg-stone-100 p-4 rounded-lg mb-4">
              {/* Placeholder for QR Code */}
              <div className="w-32 h-32 bg-white border border-stone-300 flex items-center justify-center italic text-stone-400 text-xs">
                QR Code Here
              </div>
            </div>
            <p className="text-xs text-stone-500 mb-2">Scan the QR code with your mobile app to login.</p>
            <p className="text-xs text-amber-600 hover:underline cursor-pointer">Download the mobile app</p>
          </section>
        </div>

      </div>
    </div>
  );
}