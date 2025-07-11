
import AnimatedTitle from "../components/AnimatedTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Building, Eye, Users, Wrench, GraduationCap, Plane } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Civil and Construction Product Display",
      description: "Design & configure whole project, individual house, kitchen, hall, office etc. Experience the outcome before it builds. A must have tool for your sales and marketing team. Convincing customer is so easy like never before."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real Time Interior Design with All Leading Brands",
      description: "2D and 3D interior design images are older and not convincing. Now design & configure your house, kitchen, hall, office's interior live in our VR platform with all leading household brands from paint to tiles, electrical equipments to electronic items. Experience the outcome before it builds."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Industrial Training for All Industries",
      description: "Providing training to new hirings or enhancing skills of existing employees or spotting faulty areas of your plant & machinery without going to real field can be done so efficiently and accurately by our AR/VR/MR platform. Hi'Ds provides trainer less training platform and seamless content access."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industrial Internship Programs",
      description: "Providing internship to talented students are now not restricted to a fixed number of seat's availability. Hi'Ds AR/VR platform supports organizations to avail internship program for all aspirants. Same way anyone can apply and avail internship from reputed organizations at their doorstep."
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Aviation Training Models",
      description: "Aviation training models with animation and all contents for comprehensive learning experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-rose-200/20 to-pink-200/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200/10 to-rose-200/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <AnimatedTitle
            title="About HiDs Technologies"
            containerClass="mb-8"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8"></div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                Our mission is what drives us to do everything possible virtually with reality. We do that by creating quality Augmented Reality (AR), Virtual Reality (VR) and Mixed Reality (MR) contents, by making our products easily accessible, by building a creative and diverse team and by making a positive impact in education, skill training, real estate, hospitality and many more industries.
              </p>
              <p className="mb-4">
                We not only make the world's best AR VR MR contents, but through training and sustainable job creation, we empower technical and non-technical students and their families to break the cycle of poverty and build a brighter future.
              </p>
              <p>
                HiDs offers learning, training, branding, marketing, advertising and sales solutions by providing customized, worry-free, cost-effective, trainer less and time-saving AR VR MR contents for students, educational institutions, builders, promoters, real estate agents, hospitality, tourism and many more– building thoughtful solutions based on our industries' unique needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Location Section */}
        <div className="text-center mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg inline-block">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-gray-800">
                Based in <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Bhubaneswar, Odisha, India</span>
              </p>
              <p className="text-gray-600 mt-2">HiDs Technologies Pvt Ltd. serves the world.</p>
            </CardContent>
          </Card>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            What You Can Do with Hi'Ds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mx-auto mb-4 text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-center text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Industry?</h3>
              <p className="text-lg mb-6">
                Experience the future of AR, VR, and MR technology with HiDs Technologies.
              </p>
              <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
