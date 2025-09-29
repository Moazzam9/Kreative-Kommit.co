import React from 'react';
import { services } from '@/app/data/services/services';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const service = services.find(s => s.slug === slug);
  if (!service) return <div className="text-center py-10">Service not found.</div>;

  return (
    <Card className="max-w-2xl mx-auto my-8 p-8 shadow-lg bg-white dark:bg-neutral-900">
      <h1 className="text-3xl font-bold mb-2 text-primary">{service.name}</h1>
      <p className="mb-4 text-lg text-muted-foreground">{service.description}</p>
      <Separator className="my-4" />
      {service.keywords && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Keywords</h2>
          <div className="flex flex-wrap gap-2">
            {service.keywords.map((kw: string, i: number) => (
              <Badge key={i}>{kw}</Badge>
            ))}
          </div>
        </div>
      )}
      {service.industries && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Industries</h2>
          <div className="flex flex-wrap gap-2">
            {service.industries.map((ind: string, i: number) => (
              <Badge key={i} variant="secondary">{ind}</Badge>
            ))}
          </div>
        </div>
      )}
      {service.cityDescriptions && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">City Descriptions</h2>
          <ul className="list-disc ml-6">
            {Object.entries(service.cityDescriptions).map(([city, descs]) => (
              <li key={city}>
                <span className="font-medium text-primary">{city.charAt(0).toUpperCase() + city.slice(1)}:</span>
                <ul className="list-disc ml-4">
                  {(descs as string[]).map((desc: string, i: number) => (
                    <li key={i} className="text-muted-foreground">{desc}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
