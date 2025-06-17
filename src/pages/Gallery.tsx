import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Expanded gallery images with more photos
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    alt: "Beachfront view",
    category: "exterior"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    alt: "Luxury suite interior",
    category: "rooms"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1584132905271-512c958d674a?w=800&h=600&fit=crop",
    alt: "Swimming pool",
    category: "amenities"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop",
    alt: "Premium apartment",
    category: "rooms"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop",
    alt: "Beach sunset",
    category: "exterior"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
    alt: "Dining area",
    category: "amenities"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    alt: "Bathroom",
    category: "rooms"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop",
    alt: "Beach pathway",
    category: "exterior"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
    alt: "Restaurant",
    category: "amenities"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop",
    alt: "Bedroom",
    category: "rooms"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    alt: "Beach umbrellas",
    category: "exterior"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    alt: "Spa",
    category: "amenities"
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    alt: "Modern hotel exterior",
    category: "exterior"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    alt: "Elegant living room",
    category: "rooms"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
    alt: "Hotel lobby",
    category: "amenities"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    alt: "Luxury bedroom",
    category: "rooms"
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Scenic coastline",
    category: "exterior"
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    alt: "Hotel bar",
    category: "amenities"
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1595846519845-68e298c0de30?w=800&h=600&fit=crop",
    alt: "Suite with balcony",
    category: "rooms"
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    alt: "Ocean view terrace",
    category: "exterior"
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    alt: "Conference room",
    category: "amenities"
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    alt: "Executive suite",
    category: "rooms"
  },
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&h=600&fit=crop",
    alt: "Resort entrance",
    category: "exterior"
  },
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&h=600&fit=crop",
    alt: "Fitness center",
    category: "amenities"
  },
  {
    id: 25,
    src: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=800&h=600&fit=crop",
    alt: "Penthouse view",
    category: "rooms"
  },
  {
    id: 26,
    src: "https://images.unsplash.com/photo-1520637836862-4d197d17c89a?w=800&h=600&fit=crop",
    alt: "Tropical garden",
    category: "exterior"
  },
  {
    id: 27,
    src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&h=600&fit=crop",
    alt: "Rooftop lounge",
    category: "amenities"
  },
  {
    id: 28,
    src: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=800&h=600&fit=crop",
    alt: "Designer bathroom",
    category: "rooms"
  },
  {
    id: 29,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Sunset view",
    category: "exterior"
  },
  {
    id: 30,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    alt: "Poolside bar",
    category: "amenities"
  }
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };
  
  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative section bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container">
            <div className="max-w-none animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t.gallery.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.gallery.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="section-narrow">
          <div className="container">
            <div className="flex flex-wrap gap-3 mb-12 animate-fade-in">
              {["all", "exterior", "rooms", "amenities"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterGallery(category)}
                  className={cn(
                    "px-6 py-3 rounded-full transition-all font-medium",
                    activeFilter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {category === "all" 
                    ? t.gallery.filters.all 
                    : category === "exterior" 
                      ? t.gallery.filters.exterior 
                      : category === "rooms" 
                        ? t.gallery.filters.rooms 
                        : t.gallery.filters.amenities}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 lg:gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find(img => img.id === selectedImage) && (
                <img 
                  src={filteredImages.find(img => img.id === selectedImage)?.src} 
                  alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
