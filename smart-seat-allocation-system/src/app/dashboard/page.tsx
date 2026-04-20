import React from 'react'

const Dashboard = () => {
  const sessions = [
    {
      id: 1,
      title: "Session 1",
      type: "Morning",
      slotStart: "09:00",
      slotEnd: "10:30",
      capacity: 20,
      notes: "1.5hour",
      bookedSeats: 8,
      availableSeats: 12
    },
    {
      id: 2,
      title: "Session 2",
      type: "Morning",
      slotStart: "09:00",
      slotEnd: "10:30",
      capacity: 20,
      notes: "1.5hour",
      bookedSeats: 8,
      availableSeats: 12
    },
    {
      id: 3,
      title: "Session 3",
      type: "Morning",
      slotStart: "09:00",
      slotEnd: "10:30",
      capacity: 20,
      notes: "1.5hour",
      bookedSeats: 8,
      availableSeats: 12
    }
  ]

  return (
    <div className="flex min-w-screen h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 h-full bg-[#EFEFEF] border-r border-gray-200 px-6 py-8 text-gray-900 flex flex-col">
        <div className="profileInfo text-center mb-6">
          <div className="profileImage w-32 h-32 rounded-full mb-4 mx-auto bg-gray-300 p-5 font-bold text-2xl text-gray-700 flex items-center justify-center">
            Smart Seats
          </div>
          {/* <img
            src="#"
            alt="Smart Seats"
            className="w-32 h-32 rounded-full mb-4 mx-auto bg-gray-300"
          /> */}
          <p className="text-sm font-medium text-gray-800">SmartSeats user</p>
          <p className="text-xs text-gray-400 mt-1">Training coordinator</p>
        </div>

        <div className="moreInfo mt-4">
          <button className="cursor-pointer text-xs font-medium text-gray-500 hover:text-gray-900 underline">
            More Info
          </button>
        </div>

        <div className="logoutBtn mt-auto">
          <button className="cursor-pointer w-full bg-[#111] hover:bg-[#333] text-white py-2.5 rounded-xl text-sm font-medium transition-colors">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white overflow-auto">
        {/* Header */}
        <div className="dashboardHeader flex items-center justify-between px-8 py-4 border-b border-gray-200 h-[10dvh]">
          <h1 className="text-2xl font-medium tracking-tight text-gray-900">
            Dashboard
          </h1>
          <div className="text-sm font-medium tracking-tight text-gray-400">
            SmartSeats · Training Allocation Platform
          </div>
        </div>

        {/* Dashboard Content - 3 column grid */}
        <div className="dashboardContent px-8 py-8 bg-[#EFEFEF] min-h-[calc(100vh-10dvh)]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-300 rounded-md px-3 py-1 inline-block mb-4">
                Sessions overview
              </span>
              <p className="text-sm text-gray-500">
                Live view of today&apos;s training sessions, including capacity,
                bookings, and remaining seats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="sessionCard bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
                >
                  {/* Session Title */}
                  <div className="bg-white px-5 pt-4 pb-3 border-b border-gray-100">
                    <h2 className="text-[15px] font-medium text-gray-900">
                      {session.title}
                    </h2>
                    <p className="text-[11px] text-gray-400 mt-1">
                      {session.type} · {session.slotStart}–{session.slotEnd}
                    </p>
                  </div>

                  {/* Session Details */}
                  <div className="p-5 space-y-2 text-sm flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Type</span>
                      <span className="font-medium text-gray-700">
                        {session.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Slot start</span>
                      <span className="font-medium text-gray-700">
                        {session.slotStart}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Slot end</span>
                      <span className="font-medium text-gray-700">
                        {session.slotEnd}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Capacity</span>
                      <span className="font-medium text-gray-700">
                        {session.capacity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Notes</span>
                      <span className="font-medium text-gray-700">
                        {session.notes}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Booked seats</span>
                      <span className="font-medium text-orange-500">
                        {session.bookedSeats}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Available seats</span>
                      <span className="font-medium text-green-600">
                        {session.availableSeats}
                      </span>
                    </div>
                  </div>

                  {/* Full Details Button */}
                  <div className="px-5 pb-4 pt-0">
                    <button className="w-full h-10 rounded-xl bg-[#111] hover:bg-[#333] text-white text-sm font-medium flex items-center justify-center transition-colors">
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard