export default function App() {
  return (
    <div className="p-8">
      {/* Tailwind Test */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Tailwind Test</h1>
        <p className="mt-2 text-gray-700">
          This text uses Tailwind's text-gray-700
        </p>
      </div>

      {/* DaisyUI Test */}
      <div className="space-y-4">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <div className="alert alert-success">Success Alert</div>
        <div className="alert alert-error">Error Alert</div>
      </div>
    </div>
  )
}