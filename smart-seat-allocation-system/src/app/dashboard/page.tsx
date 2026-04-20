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
    <div className='flex min-w-screen h-screen'>
      {/* Sidebar */}
      <aside className='w-64 h-full bg-gray-200 p-4 text-black flex flex-col'>
        <div className='profileInfo text-center'>
          <img src="#" alt="Profile" className='w-40 h-40 rounded-full mb-4 mx-auto bg-gray-400 mt-15' />
        </div>
        <div className="moreInfo">
          <button className='cursor-pointer underline text-black/50 pl-30 rounded text-left right-0'>
            More Info
          </button>
        </div>
        <div className="logoutBtn mt-auto">
          <button className='cursor-pointer w-full bg-red-500 text-white py-2 rounded'>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-6 bg-gray-50 overflow-auto'>
        {/* Header */}
        <div className="dashboardHeader flex justify-between items-center mb-6 border-b border-black/50 pb-4 h-[10dvh]">
          <h1 className='text-3xl font-bold text-gray-800'>Dashboard</h1>
          <div className='text-2xl font-bold text-gray-700'>DerivCo</div>
        </div>

        {/* Dashboard Content - 3 column grid */}
        <div className="dashboardContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-25">
          {sessions.map((session) => (
            <div key={session.id} className='sessionCard bg-white rounded-lg shadow-md overflow-hidden'>
              {/* Session Title */}
              <div className='bg-gray-800 text-white p-3'>
                <h2 className='text-xl font-semibold'>{session.title}</h2>
              </div>
              
              {/* Session Details */}
              <div className='p-4 space-y-2'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Type:</span>
                  <span className='font-medium text-gray-600'>{session.type}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Slot start:</span>
                  <span className='font-medium text-gray-600'>{session.slotStart}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Slot end:</span>
                  <span className='font-medium text-gray-600'>{session.slotEnd}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Capacity:</span>
                  <span className='font-medium text-gray-600'>{session.capacity}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Notes:</span>
                  <span className='font-medium text-gray-600'>{session.notes}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Booked Seats:</span>
                  <span className='font-medium text-orange-600'>{session.bookedSeats}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Available seats:</span>
                  <span className='font-medium text-green-600'>{session.availableSeats}</span>
                </div>
              </div>
              
              {/* Full Details Button */}
              <div className='p-4 pt-0'>
                <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors'>
                  full details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Dashboard