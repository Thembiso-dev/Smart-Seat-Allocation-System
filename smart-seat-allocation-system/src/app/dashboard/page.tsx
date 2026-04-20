import React, { useMemo } from "react";

type DepartmentId = "A" | "B" | "C";
type SessionId = "morning" | "midday" | "afternoon";

type Participant = {
  id: number;
  name: string;
  department: DepartmentId;
};

type Session = {
  id: SessionId;
  title: string;
  type: string;
  slotStart: string;
  slotEnd: string;
  capacity: number;
};

type Allocation = {
  participantId: number;
  sessionId: SessionId;
};

const DEPARTMENTS: Record<
  DepartmentId,
  { name: string; maxPerSession: number }
> = {
  A: { name: "Division A", maxPerSession: 8 },
  B: { name: "Division B", maxPerSession: 6 },
  C: { name: "Division C", maxPerSession: 6 },
};

// 60 dummy participants (24 A, 18 B, 18 C)
const PARTICIPANTS: Participant[] = [
  // Division A (24)
  ...Array.from({ length: 24 }).map((_, i) => ({
    id: i + 1,
    name: `Participant A${i + 1}`,
    department: "A" as DepartmentId,
  })),
  // Division B (18)
  ...Array.from({ length: 18 }).map((_, i) => ({
    id: 24 + i + 1,
    name: `Participant B${i + 1}`,
    department: "B" as DepartmentId,
  })),
  // Division C (18)
  ...Array.from({ length: 18 }).map((_, i) => ({
    id: 42 + i + 1,
    name: `Participant C${i + 1}`,
    department: "C" as DepartmentId,
  })),
];

const SESSIONS: Session[] = [
  {
    id: "morning",
    title: "Session 1",
    type: "Morning",
    slotStart: "09:00",
    slotEnd: "10:30",
    capacity: 20,
  },
  {
    id: "midday",
    title: "Session 2",
    type: "Midday",
    slotStart: "11:00",
    slotEnd: "12:30",
    capacity: 20,
  },
  {
    id: "afternoon",
    title: "Session 3",
    type: "Afternoon",
    slotStart: "13:00",
    slotEnd: "14:30",
    capacity: 20,
  },
];

/**
 * Build allocations that:
 * - Assign each participant to exactly one session (Constraint 2).
 * - Never exceed 20 participants per session (Constraint 1).
 * - Never exceed dept per-session limits (Constraint 3).
 *
 * For each session:
 *   A: 8, B: 6, C: 6  => total 20.
 */
function buildValidAllocations(): Allocation[] {
  const allocations: Allocation[] = [];

  // Helper: get participants by dept and index safely
  const getParticipant = (department: DepartmentId, index: number) => {
    return PARTICIPANTS.filter((p) => p.department === department)[index];
  };

  // For each session, pick different participants per department
  const sessionsOrder: SessionId[] = ["morning", "midday", "afternoon"];

  sessionsOrder.forEach((sessionId, sessionIdx) => {
    // A: 8 per session
    for (let i = 0; i < 8; i++) {
      const pIndex = sessionIdx * 8 + i; // spread 24 A across 3 sessions
      const p = getParticipant("A", pIndex);
      allocations.push({ participantId: p.id, sessionId });
    }

    // B: 6 per session
    for (let i = 0; i < 6; i++) {
      const pIndex = sessionIdx * 6 + i; // spread 18 B across 3 sessions
      const p = getParticipant("B", pIndex);
      allocations.push({ participantId: p.id, sessionId });
    }

    // C: 6 per session
    for (let i = 0; i < 6; i++) {
      const pIndex = sessionIdx * 6 + i; // spread 18 C across 3 sessions
      const p = getParticipant("C", pIndex);
      allocations.push({ participantId: p.id, sessionId });
    }
  });

  return allocations;
}

const ALLOCATIONS: Allocation[] = buildValidAllocations();

type SessionStats = {
  session: Session;
  totalAssigned: number;
  remainingSeats: number; // Constraint 4
  perDepartment: {
    deptId: DepartmentId;
    count: number;
    maxAllowed: number;
  }[];
};

function computeSessionStats(): SessionStats[] {
  return SESSIONS.map((session) => {
    const allocationsForSession = ALLOCATIONS.filter(
      (a) => a.sessionId === session.id
    );

    const total = allocationsForSession.length;
    const remaining = Math.max(0, session.capacity - total);

    const deptCounts: Record<DepartmentId, number> = { A: 0, B: 0, C: 0 };
    allocationsForSession.forEach((alloc) => {
      const p = PARTICIPANTS.find((pp) => pp.id === alloc.participantId);
      if (p) {
        deptCounts[p.department] += 1;
      }
    });

    const perDepartment = (Object.keys(DEPARTMENTS) as DepartmentId[]).map(
      (deptId) => ({
        deptId,
        count: deptCounts[deptId],
        maxAllowed: DEPARTMENTS[deptId].maxPerSession,
      })
    );

    return {
      session,
      totalAssigned: total,
      remainingSeats: remaining,
      perDepartment,
    };
  });
}

// --- Dashboard with applied (but not violated) constraints ---

const Dashboard = () => {
  const sessionStats = useMemo(() => computeSessionStats(), []);

  return (
    <div className="flex min-w-screen h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 h-full bg-[#EFEFEF] border-r border-gray-200 px-6 py-8 text-gray-900 flex flex-col">
        <div className="profileInfo text-center mb-6">
          <div className="profileImage w-32 h-32 rounded-full mb-4 mx-auto bg-gray-300 p-5 font-bold text-2xl text-gray-700 flex items-center justify-center">
            Smart Seats
          </div>
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

        {/* Dashboard Content */}
        <div className="dashboardContent px-8 py-8 bg-[#EFEFEF] min-h-[calc(100vh-10dvh)]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-300 rounded-md px-3 py-1 inline-block mb-4">
                Sessions overview
              </span>
              <p className="text-sm text-gray-500">
                All participants have been assigned according to session
                capacity and department limits, with one session per person.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sessionStats.map((stat) => (
                <div
                  key={stat.session.id}
                  className="sessionCard bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
                >
                  {/* Session Title */}
                  <div className="bg-white px-5 pt-4 pb-3 border-b border-gray-100">
                    <h2 className="text-[15px] font-medium text-gray-900">
                      {stat.session.title}
                    </h2>
                    <p className="text-[11px] text-gray-400 mt-1">
                      {stat.session.type} · {stat.session.slotStart}–
                      {stat.session.slotEnd}
                    </p>
                  </div>

                  {/* Session Details */}
                  <div className="p-5 space-y-2 text-sm flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Capacity</span>
                      <span className="font-medium text-gray-700">
                        {stat.session.capacity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">
                        Assigned (Constraint #1 & #2)
                      </span>
                      <span className="font-medium text-gray-700">
                        {stat.totalAssigned}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">
                        Available seats (Constraint #4)
                      </span>
                      <span className="font-medium text-green-600">
                        {stat.remainingSeats}
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-[11px] text-gray-400 mb-2">
                        Per‑department allocation (Constraint #3)
                      </p>
                      {stat.perDepartment.map((dept) => (
                        <div
                          key={dept.deptId}
                          className="flex items-center justify-between text-xs mb-1"
                        >
                          <span className="text-gray-500">
                            {DEPARTMENTS[dept.deptId].name}
                          </span>
                          <span className="font-medium text-gray-700">
                            {dept.count} / {dept.maxAllowed}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="px-5 pb-4 pt-0 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-[11px] font-medium text-green-700">
                      All constraints satisfied
                    </span>
                    <button className="h-9 rounded-xl bg-[#111] hover:bg-[#333] text-white text-xs font-medium px-3 flex items-center justify-center transition-colors">
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
  );
};

export default Dashboard;