export async function GET() {
  return new Response(JSON.stringify({ message: "User API is working!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST() {
  return new Response(JSON.stringify({ message: "Session created successfully!" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}