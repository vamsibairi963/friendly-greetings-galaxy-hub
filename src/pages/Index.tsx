
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-white mb-8 animate-fade-in">
          Welcome to Your App
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the most beautiful and animated login page designed with modern UI/UX principles.
        </p>
        <Button 
          onClick={() => navigate('/login')}
          className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
        >
          View Login Page
        </Button>
      </div>
    </div>
  );
};

export default Index;
