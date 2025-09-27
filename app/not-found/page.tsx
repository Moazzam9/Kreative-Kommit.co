export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white font-sans flex flex-col items-center justify-center">
      <div className="max-w-xl mx-auto text-center p-8 rounded-2xl border-2 border-primary-600 dark:border-primary-400 shadow-lg animate-fade-up">
        <h1 className="text-6xl font-extrabold mb-4 text-primary-600 dark:text-primary-400">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Oops! Looks like you’ve wandered off the digital map.<br />
          Maybe the page took a coffee break, or it’s hiding from the SEO robots.<br />
          Don’t worry, we’ll help you get back on track!
        </p>
        <a href="/" className="inline-block bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 px-6 py-3 rounded-full text-base font-medium transition-colors">
          Go Home
        </a>
      </div>
    </main>
  );
}
