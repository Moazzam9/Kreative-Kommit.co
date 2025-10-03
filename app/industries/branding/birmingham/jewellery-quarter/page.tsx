import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Quarter Branding & Website Design in Birmingham | KreativeKommit',
  description: 'Premium branding and website design for the Jewellery Quarter in Birmingham. Custom e-commerce, AR try-on, and luxury branding for jewelers and jewelry stores.',
  keywords: ['jewelry quarter', 'jewellery quarter', 'Birmingham', 'branding', 'luxury', 'ecommerce', 'AR try-on', 'jewelry marketing', 'jewelry SEO'],
};

export default function JewelryQuarterBrandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-primary-100 mb-4 animate-fade-up">
              Jewellery Quarter Branding & Website Design in Birmingham
            </h1>
            <p className="mt-4 text-lg text-primary-600 dark:text-primary-400 animate-fade-up">
              Stand out in Birmingham’s Jewellery Quarter with a stunning, conversion-focused website and luxury branding. We build bespoke jewelry e-commerce sites, integrate AR try-on, and craft visual identities that attract high-value clients.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              'Custom jewelry e-commerce with secure checkout',
              'Augmented Reality (AR) try-on features',
              'Luxury branding & logo design',
              'Instagram & social media integration',
              'SEO for jewelry keywords in Birmingham',
              'High-end product photography & galleries',
            ].map((feature, idx) => (
              <div key={feature} className="flex items-start gap-4 p-6 bg-primary-50 dark:bg-primary-950 rounded-xl shadow animate-fade-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                <span className="inline-block w-3 h-3 mt-2 rounded-full bg-primary-600 dark:bg-primary-400 shrink-0" />
                <span className="text-base text-gray-700 dark:text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary-100 dark:bg-primary-900 rounded-2xl p-8 lg:p-12 mb-16 animate-fade-in">
            <div className="mx-auto max-w-xl text-center mb-8">
              <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4 animate-fade-up">Why Choose KreativeKommit?</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400" />
                <span className="text-base text-gray-800 dark:text-gray-100">Proven results: <span className="font-semibold text-primary-700 dark:text-primary-300">280% sales increase</span> for jewelry clients</span>
              </li>
              <li className="flex items-center gap-3 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                <span className="text-base text-gray-800 dark:text-gray-100">Experience with <span className="font-semibold text-primary-700 dark:text-primary-300">AR, virtual try-on, and luxury e-commerce</span></span>
              </li>
              <li className="flex items-center gap-3 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400" />
                <span className="text-base text-gray-800 dark:text-gray-100">Local SEO targeting <span className="font-semibold text-primary-700 dark:text-primary-300">Birmingham’s Jewellery Quarter</span></span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4 animate-fade-up">
              Ready to Elevate Your Jewelry Brand?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-fade-up">
              Let’s create something extraordinary together. Get a free consultation today.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors animate-fade-up"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
