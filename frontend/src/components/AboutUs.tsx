import React from 'react';
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Globe, 
  Award, 
  Calendar,
  HandHeart,
  TreePine,
  Target,
  ArrowRight,
  CheckCircle2,
  Building2,
  CheckCircle,
  X,
  Rocket,
  Shield,
  Zap
} from "lucide-react";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Active Volunteers" },
    { icon: Building2, value: "1,200+", label: "Partner Organizations" },
    { icon: Calendar, value: "10K+", label: "Monthly Events" },
    { icon: HandHeart, value: "1M+", label: "Lives Impacted" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community service to transform both volunteers and those they serve."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making a difference locally while contributing to global sustainable development goals."
    },
    {
      icon: Target,
      title: "Meaningful Connections",
      description: "Creating lasting relationships between volunteers and organizations that share common goals."
    },
    {
      icon: TreePine,
      title: "Sustainable Change",
      description: "Focusing on long-term solutions that create lasting positive impact in communities."
    }
  ];

  const features = [
    "Smart matching algorithm connects volunteers with their perfect opportunities",
    "Real-time event tracking and hour logging",
    "Comprehensive impact measurement and reporting",
    "Built-in community features and volunteer recognition",
    "Integrated training and skill development programs",
    "Mobile-first design for on-the-go volunteering"
  ];

  const pricingPlans = [
    {
      name: "Free",
      icon: Heart,
      price: "0",
      description: "Perfect for individual volunteers",
      features: [
        "Basic volunteer profile",
        "Search and apply to opportunities",
        "Track volunteer hours",
        "Basic impact reporting",
        "Community access"
      ],
      limitations: [
        "Limited applications per month",
        "Standard support",
        "Basic analytics",
        "No custom branding",
        "No API access"
      ]
    },
    {
      name: "Pro",
      icon: Shield,
      price: "29",
      description: "For dedicated organizations",
      features: [
        "Everything in Free, plus:",
        "Custom organization profile",
        "Post unlimited opportunities",
        "Advanced volunteer matching",
        "Priority support",
        "Custom impact reports",
        "Volunteer management tools"
      ],
      limitations: [
        "Limited API access",
        "Basic integration options",
        "Standard branding options"
      ]
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "Custom",
      description: "For large organizations and corporations",
      features: [
        "Everything in Pro, plus:",
        "Unlimited everything",
        "Custom branding",
        "API access",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",
        "Corporate volunteering tools",
        "Multi-organization management"
      ],
      limitations: []
    }
  ];

  const PricingCard = ({ plan }) => (
    <Card className="p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="text-center mb-6">
        <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
          <plan.icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
        <div className="flex items-center justify-center mb-2">
          <span className="text-gray-600 text-lg">$</span>
          <span className="text-4xl font-bold text-blue-900 mx-1">{plan.price}</span>
          {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
        </div>
        <p className="text-gray-600">{plan.description}</p>
      </div>

      <div className="flex-grow">
        <div className="mb-6">
          <h4 className="font-semibold text-blue-900 mb-3">Features</h4>
          <ul className="space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {plan.limitations.length > 0 && (
          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Limitations</h4>
            <ul className="space-y-2">
              {plan.limitations.map((limitation) => (
                <li key={limitation} className="flex items-start">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button className="mt-6 w-full px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center">
        Get Started <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Connecting Hearts, Creating Impact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to make volunteering accessible, meaningful, and 
          impactful for everyone. Join us in creating positive change in 
          communities around the world.
        </p>
      </div>

      {/* Stats Section */}
      <Card className="p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-900 mb-1">{value}</div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Our Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <Card className="p-8 mb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Built for Modern Volunteering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Pricing Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
          Pricing Plans
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Choose the plan that best fits your organization's needs. All plans include our core features to help you make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our community of changemakers and start your volunteering journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to='/events' className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Find Opportunities <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
            Partner With Us <Building2 className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;