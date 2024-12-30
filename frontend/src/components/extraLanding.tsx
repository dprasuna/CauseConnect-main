import { 
  Calendar,
  Users,
  ArrowRight,
  Leaf,
  BookOpen,
  Activity,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const extraLanding = () => {
  const impactStats = {
    totalHours: 12420,
    treesPlanted: 1890,
    mealsServed: 5600,
    volunteers: 2300
  };

  const featuredEvents = [
    {
      title: "City Park Clean-up",
      date: "Nov 15",
      participants: 45,
      image: "/api/placeholder/600/400",
      category: "Environment"
    },
    {
      title: "Food Bank Distribution",
      date: "Nov 18",
      participants: 28,
      image: "/api/placeholder/600/400",
      category: "Community"
    },
    {
      title: "Youth Mentorship Program",
      date: "Nov 20",
      participants: 32,
      image: "/api/placeholder/600/400",
      category: "Education"
    }
  ];

  const categories = [
    {
      title: "Environmental",
      description: "Plant trees, clean beaches, protect wildlife",
      icon: Leaf,
      gradient: "from-emerald-400 to-green-500",
      opportunities: 45
    },
    {
      title: "Education",
      description: "Mentor students, teach skills, support schools",
      icon: BookOpen,
      gradient: "from-blue-400 to-indigo-500",
      opportunities: 32
    },
    {
      title: "Healthcare",
      description: "Support medical camps, elderly care, wellness programs",
      icon: Activity,
      gradient: "from-rose-400 to-red-500",
      opportunities: 28
    },
    {
      title: "Community",
      description: "Food banks, homeless shelters, local events",
      icon: Users,
      gradient: "from-violet-400 to-purple-500",
      opportunities: 53
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Volunteers working together" 
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white">Join 2,300+ volunteers making a difference</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
            Create Positive<br />
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">Change Today</span>
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl">
            Be part of a global community dedicated to creating meaningful impact through volunteering
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl">
              Start Volunteering
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{impactStats.volunteers.toLocaleString()}+</div>
              <div className="text-lg opacity-90">Active Volunteers</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{impactStats.totalHours.toLocaleString()}</div>
              <div className="text-lg opacity-90">Hours Contributed</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{impactStats.treesPlanted.toLocaleString()}</div>
              <div className="text-lg opacity-90">Trees Planted</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{impactStats.mealsServed.toLocaleString()}</div>
              <div className="text-lg opacity-90">Meals Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800">
              Featured Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition border-0 bg-gradient-to-b from-white to-slate-50">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    {event.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex justify-between items-center text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.participants} joined
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div> */}

      {/* Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Ways to Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-square mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90 group-hover:opacity-100 transition`} />
                  <div className="absolute inset-0 p-8 text-white flex flex-col justify-between">
                    <category.icon className="w-12 h-12" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{category.description}</p>
                      <div className="flex items-center text-sm font-semibold">
                        {category.opportunities} opportunities
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default extraLanding;