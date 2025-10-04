import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { formatPrice, type PricingTier } from '@/app/data/pricing/pricing';

interface PricingTableProps {
  tiers: {
    basic: PricingTier;
    professional: PricingTier;
    enterprise: PricingTier;
  };
  serviceName: string;
  cityName: string;
}

/**
 * Pricing Table Component
 * Displays service pricing tiers with features
 * Responsive design with emphasis on popular tier
 */
export function PricingTable({ tiers, serviceName, cityName }: PricingTableProps) {
  const tierArray = [
    { key: 'basic', ...tiers.basic },
    { key: 'professional', ...tiers.professional },
    { key: 'enterprise', ...tiers.enterprise },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {serviceName} Pricing in {cityName}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that best fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tierArray.map((tier) => (
            <Card
              key={tier.key}
              className={`relative flex flex-col ${
                tier.popular
                  ? 'border-2 border-blue-600 dark:border-blue-400 shadow-xl scale-105'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {formatPrice(tier.price, tier.recurring)}
                  </span>
                  {tier.recurring === 'one-time' && (
                    <span className="text-gray-600 dark:text-gray-400 text-sm block mt-1">
                      One-time payment
                    </span>
                  )}
                </div>
                <CardDescription className="mt-4">
                  {tier.key === 'basic' && 'Perfect for startups and small projects'}
                  {tier.key === 'professional' && 'Ideal for growing businesses'}
                  {tier.key === 'enterprise' && 'For large-scale projects and enterprises'}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        tier.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Not sure which package is right for you?
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>All prices exclude VAT. Flexible payment plans available.</p>
          <p className="mt-2">Prices adjusted for {cityName} market rates.</p>
        </div>
      </div>
    </section>
  );
}
