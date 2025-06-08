
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign,
  BarChart3,
  Zap,
  TestTube,
  Brain,
  Rocket,
  CheckCircle,
  Star,
  ChevronRight,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/16feb171-4bbe-41e3-a6ad-43e119e00520.png" 
                alt="Guiding Wave Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-foreground">Guiding Wave</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('method')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Method
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700">
              Free Growth Audit
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Drive Scalable Growth with 
              <span className="text-blue-600"> Data-Driven Decisions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              <strong>Guiding Wave:</strong> Your Scientific Growth Agency & Product Hackers Partner
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              We help SaaS and app businesses achieve sustainable growth through rigorous experimentation, 
              funnel optimization, and data-driven growth strategy.
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              Get Your Free Growth Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Growth Management Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Growth Management Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's competitive landscape, successful tech products require more than great features. 
              They need a scientific growth strategy that systematically optimizes every stage of the user journey 
              through data-driven decisions and continuous experimentation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">First Users</h3>
                <p className="text-muted-foreground">
                  Acquisition & Activation channels to get your first valuable users and validate product-market fit
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">1,000th User</h3>
                <p className="text-muted-foreground">
                  Growth Levers & Conversion Rate Optimization to scale your user base efficiently
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Millionth User</h3>
                <p className="text-muted-foreground">
                  Retention, Revenue & Referral optimization for sustainable, scalable growth
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Monetization</h3>
                <p className="text-muted-foreground">
                  Pricing experiments, upsells, and maximizing LTV through strategic business growth initiatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Growth Marketing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive growth solutions powered by experimentation and data-driven decisions 
              to accelerate your product's success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Brain className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Growth Strategy</h3>
                <p className="text-muted-foreground">
                  Market research, user segmentation, and custom growth strategy development tailored to your business objectives and growth culture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Funnel Optimization</h3>
                <p className="text-muted-foreground">
                  Complete optimization of Acquisition, Activation, Retention, Revenue, and Referral stages for maximum conversion rates.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TestTube className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">CRO & A/B Testing</h3>
                <p className="text-muted-foreground">
                  Conversion Rate Optimization with rigorous A/B testing and real case studies to improve performance across all touchpoints.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">High-Frequency Experimentation</h3>
                <p className="text-muted-foreground">
                  Iterative testing cycles with rapid experimentation to identify and scale winning growth levers quickly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
                <p className="text-muted-foreground">
                  Advanced analytics dashboards, comprehensive audits, and OKR implementation for measurable business growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Rocket className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">On-Demand Growth Hackers</h3>
                <p className="text-muted-foreground">
                  Embedded Product Hackers team providing continuous innovation and growth hacking expertise for scalable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Guiding Wave Method */}
      <section id="method" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Guiding Wave Method
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven SOLID Growth framework ensures systematic, scalable growth through 
              scientific methodology and data-driven decision making.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Diagnose</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive audit of metrics and identification of key Growth Levers for optimization opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Design</h3>
              <p className="text-muted-foreground text-sm">
                Create SOLID Growth plan with personalized experiments tailored to your growth strategy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Deploy</h3>
              <p className="text-muted-foreground text-sm">
                Execute tests across paid, organic, and referral channels with systematic experimentation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3">Decipher</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous statistical analysis of results to ensure data-driven decisions and reliable insights.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold mb-3">Double-Down</h3>
              <p className="text-muted-foreground text-sm">
                Scale winning strategies and foster a growth culture for sustained scalable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real case studies demonstrating the power of our growth marketing and 
              conversion rate optimization approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-2xl font-bold">AppCo</h3>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">0 → 10,000 users</div>
                  <div className="text-muted-foreground">in 6 months</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <strong className="text-foreground">Challenge:</strong>
                    <span className="text-muted-foreground ml-2">New app struggling with user acquisition and retention in competitive market.</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Approach:</strong>
                    <span className="text-muted-foreground ml-2">Implemented funnel optimization with viral referral loop and growth levers experimentation.</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Outcome:</strong>
                    <span className="text-muted-foreground ml-2">Achieved scalable growth with 10,000 active users and 40% month-over-month growth rate.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-2xl font-bold">SaaSy</h3>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25% lift</div>
                  <div className="text-muted-foreground">in trial-to-paid conversion</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <strong className="text-foreground">Challenge:</strong>
                    <span className="text-muted-foreground ml-2">Low trial-to-paid conversion rates despite strong product engagement metrics.</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Approach:</strong>
                    <span className="text-muted-foreground ml-2">Comprehensive pricing experiments and conversion rate optimization across the trial experience.</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Outcome:</strong>
                    <span className="text-muted-foreground ml-2">Achieved 25% improvement in conversion rates and 40% increase in business growth revenue.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Guiding Wave */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Guiding Wave?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Deep Growth Strategy Expertise</h3>
              <p className="text-muted-foreground">
                Our team combines advanced product management skills with proven growth marketing techniques, 
                delivering innovation-driven results for sustainable business growth.
              </p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sustainable, Scalable Results</h3>
              <p className="text-muted-foreground">
                We focus on building long-term growth culture and scalable growth systems, 
                not just short-term wins through scientific growth methodology.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">True Partnership Approach</h3>
              <p className="text-muted-foreground">
                We work as an extension of your team, providing dedicated product hackers and 
                growth marketing expertise to drive continuous innovation and experimentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Launch Your Next Growth Wave?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Get your free growth audit and discover untapped opportunities for scalable growth 
              through data-driven decisions and scientific growth methodology.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    Book Your Free Growth Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="bg-background" />
                    <Input placeholder="Your Email" type="email" className="bg-background" />
                  </div>
                  <Input placeholder="Company Name" className="bg-background" />
                  <Textarea 
                    placeholder="What's your biggest growth challenge?" 
                    className="bg-background min-h-[120px]"
                  />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/16feb171-4bbe-41e3-a6ad-43e119e00520.png" 
                  alt="Guiding Wave Logo" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">Guiding Wave</span>
              </div>
              <p className="text-gray-300 text-sm">
                Scientific Growth Agency empowering SaaS and app businesses through data-driven growth strategy and innovative product management.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('method')} className="hover:text-white transition-colors">Method</button></li>
                <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-white transition-colors">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Growth Strategy</li>
                <li>Funnel Optimization</li>
                <li>CRO & A/B Testing</li>
                <li>Growth Hacking</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hello@guidingwave.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2024 Guiding Wave. All rights reserved. | Privacy Policy | Terms of Service</p>
            <p className="mt-2">
              <strong>Growth Agency • Product Hackers • Scientific Growth • SOLID Growth • Growth Marketing</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
