
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { apiClient } from '@/utils/api';
import { useToast } from '@/hooks/use-toast';

interface Apartment {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  amenities: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
}

export default function ApartmentDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchApartment = async () => {
      if (!id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setLoading(true);
      
      try {
        const response = await apiClient.getApartment(parseInt(id));
        
        if (response.error) {
          console.log('API Error, using fallback data:', response.error);
          // Fallback to mock data for development
          const mockApartments = [
            {
              id: 1,
              name: 'Deluxe Sea View Suite',
              description: 'Luxurious suite with panoramic sea views, modern amenities, and a private balcony.',
              price: 180,
              images: [
                'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop'
              ],
              amenities: ['WiFi', 'Parking', 'Kitchen', 'Gym Access'],
              capacity: 2,
              bedrooms: 1,
              bathrooms: 1,
              location: 'Diani Beach, Kenya'
            },
            {
              id: 2,
              name: 'Premium Family Apartment',
              description: 'Spacious apartment ideal for families, with full kitchen and stunning coastal views.',
              price: 250,
              images: [
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop'
              ],
              amenities: ['WiFi', 'Parking', 'Kitchen', 'Gym Access', 'Washing Machine'],
              capacity: 4,
              bedrooms: 2,
              bathrooms: 2,
              location: 'Diani Beach, Kenya'
            }
          ];
          
          const foundApartment = mockApartments.find(apt => apt.id === parseInt(id));
          if (foundApartment) {
            setApartment(foundApartment);
          } else {
            setNotFound(true);
          }
        } else if (response.data) {
          setApartment(response.data);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching apartment:', error);
        toast({
          title: "Error",
          description: "Failed to load apartment details",
          variant: "destructive",
        });
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [id, toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !apartment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Apartment Not Found</h2>
            <p className="text-muted-foreground mb-6">The apartment you're looking for doesn't exist.</p>
            <Link to="/apartments">
              <Button>Back to Apartments</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const amenityIcons = {
    'WiFi': Wifi,
    'Parking': Car,
    'Kitchen': Coffee,
    'Gym Access': Dumbbell
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/apartments" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Apartments
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={apartment.images[0]} 
                  alt={apartment.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {apartment.images.slice(1).map((image: string, index: number) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${apartment.name} view ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Apartment Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{apartment.name}</h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {apartment.location}
                </div>
                <p className="text-lg text-muted-foreground">{apartment.description}</p>
              </div>

              {/* Room Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Room Details</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">{apartment.capacity} Guests</p>
                    </div>
                    <div className="text-center">
                      <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">{apartment.bedrooms} Bedrooms</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">{apartment.bathrooms} Bathrooms</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {apartment.amenities.map((amenity: string) => {
                      const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
                      return (
                        <div key={amenity} className="flex items-center">
                          {IconComponent && <IconComponent className="h-4 w-4 mr-2 text-primary" />}
                          <span className="text-sm">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing and Booking */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold">${apartment.price}</p>
                      <p className="text-sm text-muted-foreground">per night</p>
                    </div>
                  </div>
                  
                  {isAuthenticated ? (
                    <Button asChild className="w-full">
                      <Link to="/booking" state={{ apartmentId: apartment.id, apartmentName: apartment.name, apartmentPrice: apartment.price }}>
                        Book Now
                      </Link>
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <Button asChild className="w-full">
                        <Link to="/login">Sign In to Book</Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        New to Baraka Hotel? <Link to="/signup" className="text-primary hover:underline">Create account</Link>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
