
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Dumbbell, Waves, Activity, Utensils, Wine, Coffee, Clock, Car, Plane, Car as CarIcon, MapPin, Users, Music, BookOpen } from "lucide-react";

// Amenities gallery images
const amenitiesImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1584132905271-512c958d674a?w=400&h=400&fit=crop",
    alt: "Swimming pool"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=400&fit=crop",
    alt: "Hotel lobby"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=400&fit=crop",
    alt: "Restaurant dining area"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop",
    alt: "Spa and wellness center"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&h=400&fit=crop",
    alt: "Fitness center"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=400&fit=crop",
    alt: "Hotel bar"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=400&h=400&fit=crop",
    alt: "Rooftop lounge"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    alt: "Conference room"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1520637836862-4d197d17c89a?w=400&h=400&fit=crop",
    alt: "Tropical garden"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop",
    alt: "Beachfront access"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=400&fit=crop",
    alt: "Beach sunset view"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop",
    alt: "Luxury bathroom"
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    alt: "Scenic coastline"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    alt: "Ocean view terrace"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=400&fit=crop",
    alt: "Beach pathway"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop",
    alt: "Beach umbrellas"
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=400&fit=crop",
    alt: "Fine dining restaurant"
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&h=400&fit=crop",
    alt: "Resort entrance"
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop",
    alt: "Modern hotel exterior"
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    alt: "Relaxation area"
  }
];

export default function Amenities() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Helper function to get the appropriate icon for each amenity
  const getIcon = (categoryName: string, index: number) => {
    const icons = {
      wellness: [<Heart key={0} />, <Dumbbell key={1} />, <Waves key={2} />, <Activity key={3} />],
      dining: [<Utensils key={0} />, <Coffee key={1} />, <Wine key={2} />, <Clock key={3} />],
      services: [<Clock key={0} />, <Plane key={1} />, <CarIcon key={2} />, <MapPin key={3} />],
      entertainment: [<Waves key={0} />, <Users key={1} />, <Music key={2} />, <BookOpen key={3} />]
    };
    
    return icons[categoryName as keyof typeof icons]?.[index] || <Coffee />;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative section bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="max-w-none">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Baraka Hotel Services
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
                {t.amenitiesPage.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.amenitiesPage.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Description Section */}
        <section className="section-narrow">
          <div className="container">
            <div className="max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.amenitiesPage.description}
              </p>
            </div>
          </div>
        </section>
        
        {/* Categories Sections */}
        {Object.keys(t.amenitiesPage.categories).map((category, categoryIndex) => {
          const categoryData = t.amenitiesPage.categories[category as keyof typeof t.amenitiesPage.categories];
          const isEven = categoryIndex % 2 === 0;
          
          return (
            <section key={category} className={`section ${isEven ? 'bg-card' : ''}`}>
              <div className="container">
                <div className="max-w-none mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {categoryData.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {categoryData.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                  {categoryData.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-6 rounded-xl flex flex-col items-start animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                        {getIcon(category, index)}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
        
        {/* Gallery Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-none mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.gallery.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.gallery.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 lg:gap-6">
              {amenitiesImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="aspect-square rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
