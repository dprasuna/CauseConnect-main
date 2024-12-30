import  { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Users, 
  Medal, 
  Crown, 
  Star, 
  Heart,
  Clock,
  Calendar
} from "lucide-react";

const LeaderBoard = () => {
  const [timeFilter, setTimeFilter] = useState('weekly');

  const topVolunteers = [
    { id: 1, name: "Sarah Johnson", points: 2500, hours: 48, events: 12, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
    { id: 2, name: "Mike Chen", points: 2350, hours: 45, events: 10, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
    { id: 3, name: "Emma Davis", points: 2200, hours: 42, events: 11, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
    { id: 4, name: "Alex Kim", points: 2100, hours: 40, events: 9, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
    { id: 5, name: "Lisa Patel", points: 2000, hours: 38, events: 8, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
  ];

  const topTeams = [
    { id: 1, name: "Green Warriors", points: 7500, members: 12, events: 25, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
    { id: 2, name: "Community Heroes", points: 7000, members: 10, events: 22, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
    { id: 3, name: "Impact Makers", points: 6800, members: 15, events: 20, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
    { id: 4, name: "City Volunteers", points: 6500, members: 8, events: 18, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
    { id: 5, name: "Hope Brigade", points: 6200, members: 11, events: 16, avatar: "https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740" },
  ];

  const getMedalColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-yellow-400";
      case 1:
        return "text-gray-400";
      case 2:
        return "text-amber-600";
      default:
        return "text-blue-900";
    }
  };

  const LeaderCard = ({ rank, data, type }: { rank: number; data: any; type: 'volunteer' | 'team' }) => (
    <div className="relative flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mb-3">
      {/* Rank */}
      <div className="flex-shrink-0 w-8 font-bold text-lg text-center">
        {rank <= 3 ? (
          <Medal className={`w-6 h-6 ${getMedalColor(rank - 1)}`} />
        ) : (
          rank
        )}
      </div>

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-12 h-12 rounded-full bg-gray-200"
        />
        {rank === 1 && (
          <Crown className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400" />
        )}
      </div>

      {/* Info */}
      <div className="flex-grow">
        <h3 className="font-semibold text-blue-900">{data.name}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4" /> {data.points} pts
          </span>
          {type === 'volunteer' ? (
            <>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {data.hours}h
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {data.events} events
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" /> {data.members} members
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {data.events} events
              </span>
            </>
          )}
        </div>
      </div>

      {/* Points badge */}
      <div className="flex-shrink-0 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
        {data.points.toLocaleString()} pts
      </div>
    </div>
  );

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl font-bold text-blue-900">Leaderboard</h2>
        </div>
        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
          <option value="yearly">This Year</option>
          <option value="allTime">All Time</option>
        </select>
      </div>

      <Tabs defaultValue="volunteers" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="volunteers" className="flex items-center gap-2">
            <Heart className="w-4 h-4" /> Top Volunteers
          </TabsTrigger>
          <TabsTrigger value="teams" className="flex items-center gap-2">
            <Users className="w-4 h-4" /> Top Teams
          </TabsTrigger>
        </TabsList>

        <TabsContent value="volunteers" className="mt-0">
          <div className="space-y-2">
            {topVolunteers.map((volunteer, index) => (
              <LeaderCard
                key={volunteer.id}
                rank={index + 1}
                data={volunteer}
                type="volunteer"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="teams" className="mt-0">
          <div className="space-y-2">
            {topTeams.map((team, index) => (
              <LeaderCard
                key={team.id}
                rank={index + 1}
                data={team}
                type="team"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default LeaderBoard;