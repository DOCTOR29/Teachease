import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹499',
    description: 'Essential tools for individual teachers',
    features: [
      'Create up to 10 lesson plans',
      'Generate 5 question papers/month',
      'Basic worksheet templates',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹999',
    description: 'Perfect for active educators',
    features: [
      'Unlimited lesson plans',
      'Unlimited question papers',
      'Advanced worksheet builder',
      'Quiz maker with analytics',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Institution',
    price: '₹2499',
    description: 'For schools and educational institutions',
    features: [
      'All Pro features',
      'Multiple teacher accounts',
      'Custom branding',
      'Advanced analytics',
      'API access',
      'Dedicated support',
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Choose the plan that best fits your needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? 'border-primary shadow-lg' : ''}
          >
            <CardHeader>
              {plan.popular && (
                <div className="text-sm font-medium text-primary mb-2">
                  Most Popular
                </div>
              )}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <CardDescription className="mt-4">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}