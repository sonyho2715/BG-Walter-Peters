'use client';

export default function ImportantContacts() {
  const contacts = [
    {
      name: 'Stephen03',
      role: 'Professor - USA & International',
      platform: 'BonChat',
      icon: '👨‍🏫',
      color: 'blue'
    },
    {
      name: 'Elena03',
      role: 'Assistant - USA & International',
      platform: 'BonChat',
      icon: '👩‍💼',
      color: 'purple'
    },
    {
      name: 'Stephen001',
      role: 'Professor - Vietnam',
      platform: 'BonChat',
      icon: '👨‍🏫',
      color: 'blue'
    },
    {
      name: 'RosaRosa8',
      role: 'Assistant - Vietnam',
      platform: 'BonChat',
      icon: '👩‍💼',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string } } = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-700',
        text: 'text-blue-900 dark:text-blue-100'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-700',
        text: 'text-purple-900 dark:text-purple-100'
      },
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-700',
        text: 'text-pink-900 dark:text-pink-100'
      }
    };
    return colors[color];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">📞</span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Important Contacts</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Add these contacts on BonChat for support, trading codes, and assistance
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, idx) => {
          const colors = getColorClasses(contact.color);
          return (
            <div
              key={idx}
              className={`${colors.bg} border ${colors.border} rounded-lg p-4`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{contact.icon}</span>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg ${colors.text}`}>
                    {contact.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {contact.role}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1 text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded">
                    <span>💬</span>
                    <span className="text-gray-700 dark:text-gray-300">{contact.platform}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 text-sm">
          How to Add Contacts:
        </h4>
        <ol className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>1. Open BonChat app</li>
          <li>2. Search for the contact name</li>
          <li>3. Click on their profile</li>
          <li>4. Say "Hi" and click "Send Request"</li>
          <li>5. Wait for approval</li>
        </ol>
      </div>

      <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
        <div className="flex gap-3">
          <span className="text-xl">ℹ️</span>
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>BonChat Server IDs:</strong> USA: D333666 | Vietnam/Europe/Africa/Asia: S333666
          </p>
        </div>
      </div>
    </div>
  );
}
