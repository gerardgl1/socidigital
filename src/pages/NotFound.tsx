import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Add noindex meta tag for 404 pages
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex';
    document.head.appendChild(metaRobots);
    
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-navy">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Aquesta pàgina no existeix</p>
        <Button
          onClick={() => window.location.href = "/"}
          className="bg-coral hover:bg-navy text-white"
        >
          <Home className="mr-2 h-4 w-4" />
          Torna a l'inici
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
