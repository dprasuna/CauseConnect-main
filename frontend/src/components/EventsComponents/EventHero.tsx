import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Cloud,
  CircleDot,
  Heart,
  Star,
  Zap,
  Leaf,
  Sun,
  Droplets,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function EventHero({onScrollToEvents}) {
  const [icons, setIcons] = useState<JSX.Element[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const iconComponents = [Heart, Star, Zap, Leaf, Sun, Droplets];
    const newIcons = Array.from({ length: 30 }, (_, i) => ({
      Icon: iconComponents[i % iconComponents.length],
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      },
    }));

    setIcons(
      newIcons.map(({ Icon, style }, index) => (
        <div
          key={index}
          className="absolute animate-float text-blue-900/10"
          style={style}
        >
          <Icon size={24} />
        </div>
      ))
    );
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-300 py-24">
      <div className="absolute left-4 top-4 text-blue-900/20 animate-pulse">
        <Cloud size={64} />
      </div>
      <div className="absolute right-4 top-4 text-blue-900/20 animate-pulse">
        <Cloud size={64} />
      </div>
      <div className="absolute bottom-4 left-4 text-blue-900/20 animate-spin-slow">
        <CircleDot size={64} />
      </div>
      <div className="absolute bottom-4 right-4 text-blue-900/20 animate-spin-slow">
        <CircleDot size={64} />
      </div>

      <div className="absolute inset-0 overflow-hidden">{icons}</div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
              COMMUNITY DRIVES
            </h1>
            <p className="max-w-[600px] text-xl  font-medium text-blue-900/80 md:text-2xl">
              MAKE A DIFFERENCE IN THE COMMUNITY!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl cursor-pointer">
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 ">
              <Users className="w-12 h-12 mb-4 text-blue-900" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Connect</h3>
              <p className="text-blue-900/80">
                Join a community of like-minded individuals passionate about
                making a change.
              </p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <Calendar className="w-12 h-12 mb-4 text-blue-900" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Participate
              </h3>
              <p className="text-blue-900/80">
                Engage in various events and activities designed to create
                positive impact.
              </p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <MapPin className="w-12 h-12 mb-4 text-blue-900" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Impact</h3>
              <p className="text-blue-900/80">
                See the direct results of your efforts in your local community
                and beyond.
              </p>
            </Card>
          </div>
          <div className="flex gap-4">
            <Button onClick={onScrollToEvents} className="h-14 rounded-full bg-blue-900 px-10 text-xl font-semibold text-yellow-400 hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              VOLUNTEER NOW!
            </Button>
            <Button 
              onClick={() => navigate('/create-event')} 
              className="h-14 rounded-full bg-yellow-500 px-10 text-xl font-bold text-blue-900 hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              CREATE EVENT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
