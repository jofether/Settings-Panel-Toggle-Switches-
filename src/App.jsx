import { useState, useEffect } from 'react';

function Toggle({ label, description, defaultChecked }) {
  const [enabled, setEnabled] = useState(defaultChecked);

  useEffect(() => {
    setEnabled(defaultChecked);
  }, [defaultChecked]);

  return (
    <div className="flex flex-col-reverse items-center justify-between py-4 px-1 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex flex-col flex-1">
        <span className="text-sm font-semibold text-white">{label}</span>
        <span className="text-xs text-gray-500 mt-0.5">{description}</span>
      </div>
      
      {/* TOGGLE BUTTON */}
      <button 
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-7 w-12 ml-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 -z-10
          ${enabled ? 'bg-gradient-to-r from-indigo-600 to-purple-600 focus:ring-indigo-600' : 'bg-gray-300 focus:ring-gray-400'}`}
      >
        <span className="sr-only">Toggle setting</span>
        {/* TOGGLE CIRCLE */}
        <span
          className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition-all duration-300 ease-in-out
            ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </button>
    </div>
  );
}

function SettingSection({ title, description, children }) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-base font-bold text-gray-9000">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 -m-12">{description}</p>
      </div>
      <div className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}

function App() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans absolute -top-20">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-600 mb-2">Settings</h1>
          <p className="text-lg text-gray-600">Customize your experience and preferences</p>
        </div>

        {/* Settings Panel */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden pt-96">
          
          {/* Notification Settings */}
          <div className="px-6 py-6 sm:px-8">
            <SettingSection 
              title="📬 Notifications"
              description="Choose how and when you'd like to be notified"
            >
              <div className="px-6 py-5">
                <Toggle 
                  label="Email Digest" 
                  description="Get a summary of your activity once a day" 
                  defaultChecked={true} 
                />
              </div>
              <div className="px-6 py-5 bg-gray-50">
                <Toggle 
                  label="SMS Alerts" 
                  description="Receive urgent alerts immediately via text" 
                  defaultChecked={false} 
                />
              </div>
              <div className="px-6 py-5">
                <Toggle 
                  label="Push Notifications" 
                  description="Real-time notifications on your devices" 
                  defaultChecked={true} 
                />
              </div>
              <div className="px-6 py-5 bg-gray-50">
                <Toggle 
                  label="In-App Messages" 
                  description="See important updates while you're using the app" 
                  defaultChecked={true} 
                />
              </div>
            </SettingSection>

            {/* Communication Preferences */}
            <SettingSection 
              title="💌 Communications"
              description="Manage marketing and promotional messages"
            >
              <div className="px-6 py-5">
                <Toggle 
                  label="Marketing Emails" 
                  description="Stay updated with special offers and promotions" 
                  defaultChecked={false} 
                />
              </div>
              <div className="px-6 py-5 bg-gray-50">
                <Toggle 
                  label="Product Updates" 
                  description="Learn about new features and improvements" 
                  defaultChecked={true} 
                />
              </div>
              <div className="px-6 py-5">
                <Toggle 
                  label="Community News" 
                  description="Get news from our user community" 
                  defaultChecked={false} 
                />
              </div>
            </SettingSection>

            {/* Privacy & Security */}
            <SettingSection 
              title="🔒 Privacy & Security"
              description="Control how your data is used and shared"
            >
              <div className="px-6 py-5">
                <Toggle 
                  label="Analytics" 
                  description="Help us improve by sharing usage analytics" 
                  defaultChecked={true} 
                />
              </div>
              <div className="px-6 py-5 bg-gray-50">
                <Toggle 
                  label="Third-party integrations" 
                  description="Allow connected apps and services" 
                  defaultChecked={false} 
                />
              </div>
              <div className="px-6 py-5">
                <Toggle 
                  label="Data export" 
                  description="Automatically export your data monthly" 
                  defaultChecked={false} 
                />
              </div>
            </SettingSection>

            {/* Accessibility */}
            <SettingSection 
              title="♿ Accessibility"
              description="Customize your experience for better usability"
            >
              <div className="px-6 py-5">
                <Toggle 
                  label="Dark Mode" 
                  description="Easier on the eyes in low-light environments" 
                  defaultChecked={false} 
                />
              </div>
              <div className="px-6 py-5 bg-gray-50">
                <Toggle 
                  label="Reduced Motion" 
                  description="Minimize animations and transitions" 
                  defaultChecked={false} 
                />
              </div>
              <div className="px-6 py-5">
                <Toggle 
                  label="Large Text" 
                  description="Increase font size for better readability" 
                  defaultChecked={false} 
                />
              </div>
            </SettingSection>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 sm:px-8 border-t border-gray-200 flex flex-col justify-between items-center">
            <div className="text-sm text-gray-600 bg-green-9999 px-2 py-1 rounded">
              {saved && <span className="text-green-600 font-medium">✓ Preferences saved</span>}
            </div>
            <button 
              onClick={handleSave}
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Preferences
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="bg-gray-300 p-4 text-gray-900">Settings are saved automatically to your account</p>
          <p className="mt-2">Need help? <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer font-medium">Contact support</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
