export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
        Go Home
      </a>
    </div>
  );
}