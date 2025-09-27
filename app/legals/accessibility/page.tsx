export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
export default function Accessibility() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
        <p className="mb-4">Kreative Kommit is committed to making our website accessible to all users, including those with disabilities. We follow WCAG guidelines and regularly review our site for improvements.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Our Commitment</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Use of semantic HTML and ARIA attributes</li>
          <li>Keyboard navigation support</li>
          <li>Contrast and font size options</li>
          <li>Alt text for images</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Feedback</h2>
        <p>If you encounter accessibility issues, please contact us so we can address them promptly.</p>
      </div>
    </div>
  );
}
