export { viewport } from './viewport';
export default function Terms() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">These terms govern your use of the Kreative Kommit website and services. By accessing our site, you agree to these terms.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Site</h2>
        <p className="mb-4">You agree to use our site lawfully and not to infringe on the rights of others.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
        <p className="mb-4">All content is owned by Kreative Kommit unless otherwise stated. You may not reproduce or distribute content without permission.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Limitation of Liability</h2>
        <p className="mb-4">We are not liable for any damages resulting from your use of our site.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Changes to Terms</h2>
        <p className="mb-4">We may update these terms at any time. Continued use of the site means you accept the changes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Contact</h2>
        <p>If you have questions about these terms, please contact us.</p>
      </div>
    </div>
  );
}
