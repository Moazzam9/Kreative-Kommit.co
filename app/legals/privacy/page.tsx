// viewport is now exported from viewport.ts

export default function Privacy() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Your privacy is important to us. This policy explains how Kreative Kommit collects, uses, and protects your information in accordance with UK GDPR.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4">We may collect personal information you provide via forms, such as your name and email address.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. Lawful Basis for Processing</h2>
        <p className="mb-4">We process your personal data based on your consent, our legitimate interests, or to fulfil a contract with you.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Use of Information</h2>
        <p className="mb-4">We use your information to respond to inquiries, improve our services, and communicate with you.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Retention</h2>
        <p className="mb-4">We retain your personal data only as long as necessary for the purposes for which it was collected, or as required by law.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Access: You can request a copy of your personal data.</li>
          <li>Rectification: You can ask us to correct inaccurate or incomplete data.</li>
          <li>Erasure: You can request deletion of your data where permitted by law.</li>
          <li>Restriction: You can ask us to restrict processing in certain circumstances.</li>
          <li>Objection: You can object to processing based on legitimate interests.</li>
          <li>Portability: You can request your data in a machine-readable format.</li>
          <li>Withdraw Consent: You can withdraw consent at any time where processing is based on consent.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Security</h2>
        <p className="mb-4">We take appropriate measures to protect your data from unauthorised access, disclosure, or loss.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">7. Sharing of Information</h2>
        <p className="mb-4">We do not sell your personal data. We may share it with trusted third parties who assist us in operating our website and services, subject to confidentiality agreements.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">8. Cookies</h2>
        <p className="mb-4">See our Cookie Policy for details on how we use cookies.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to Policy</h2>
        <p className="mb-4">We may update this policy. Please check this page for changes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact</h2>
        <p>If you have questions about our privacy policy, please contact us.</p>
      </div>
    </div>
  );
}
