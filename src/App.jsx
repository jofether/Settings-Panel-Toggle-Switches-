import React, { useState } from 'react';

function Toggle({ label, description, defaultChecked }) {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
      
      {/* TOGGLE BUTTON */}
      <button 
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
          ${enabled ? 'bg-indigo-600' : 'bg-gray-200'}`}
      >
        <span className="sr-only">Use setting</span>
        {/* TOGGLE CIRCLE */}
        {/* FUTURE BUG: Remove 'translate-x-5' to make the circle stick to the left even when ON */}
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
            ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-md bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
          <p className="mt-1 text-sm text-gray-500">Manage how you receive alerts and updates.</p>
        </div>

        <div className="px-6 py-2 divide-y divide-gray-100">
          <Toggle 
            label="Email Notifications" 
            description="Receive a daily digest of activity." 
            defaultChecked={true} 
          />
          <Toggle 
            label="SMS Alerts" 
            description="Get urgent alerts via text message." 
            defaultChecked={false} 
          />
          <Toggle 
            label="Push Notifications" 
            description="Receive notifications on your device." 
            defaultChecked={true} 
          />
          <Toggle 
            label="Marketing Emails" 
            description="Receive offers and promotions." 
            defaultChecked={false} 
          />
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save Preferences
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
