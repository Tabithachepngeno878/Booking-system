import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Baraka Hotel Booking System</title>
        <meta name="description" content="Learn about our hotel booking platform and our mission to simplify your travel experience" />
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-blue-700 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Baraka Booking</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Simplifying hotel reservations with seamless technology and exceptional service
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform skew-y-1 -mb-6"></div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2023, Baraka Booking System emerged from a simple idea: hotel bookings should be effortless,
                  transparent, and enjoyable. Our team of travel enthusiasts and tech experts came together to build a
                  platform that removes the friction from the booking process.
                </p>
                <p>
                  The name "Baraka" means blessing in several languages, reflecting our commitment to being a blessing
                  to both travelers and hotel partners. We believe that technology should enhance human experiences,
                  not complicate them.
                </p>
                <p>
                  Today, we partner with hundreds of hotels worldwide to offer you the best selection of accommodations
                  at competitive prices, all with our signature user-friendly experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Mission & Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Simplicity</h3>
                <p className="text-gray-600">
                  We eliminate complexity in travel planning, offering intuitive tools that make booking effortless.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l8-8m0 0l-8-8m8 8H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees, no surprises. We believe in clear pricing and honest communication.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Value</h3>
                <p className="text-gray-600">
                  We negotiate the best rates with hotels so you get exceptional accommodations at fair prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Alex Johnson', role: 'Founder & CEO', img: '/team1.jpg' },
                { name: 'Sarah Williams', role: 'Head of Technology', img: '/team2.jpg' },
                { name: 'Michael Chen', role: 'Product Manager', img: '/team3.jpg' },
                { name: 'Emma Davis', role: 'Customer Experience', img: '/team4.jpg' },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                    {/* Replace with actual images */}
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to experience better hotel bookings?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have discovered the Baraka difference.
            </p>
            <Link to="/" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Book Your Stay Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;