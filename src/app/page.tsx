"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Calendar, ChefHat, MessageSquare, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
          button={{ text: "Reserve Table", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Cuisine"
          description="Experience the finest flavors of Italy in an elegant atmosphere with dishes crafted from traditional recipes and fresh ingredients"
          tag="Fine Dining"
          tagIcon={ChefHat}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant modern bar with lush indoor greenery and stylish furnishings in Baghdad."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 2010, Bella Vista brings authentic Italian flavors to the heart of the city with recipes passed down through generations.",
            "Our passionate chefs use only the finest imported ingredients and local seasonal produce to create memorable dining experiences for every guest."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Signature Dishes"
          description="Discover our most beloved creations, crafted with passion and authentic Italian techniques"
          tag="Chef's Selection"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Signature",
              name: "Truffle Risotto Milano",
              price: "$28.00",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/750071/pexels-photo-750071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of a savory Italian pasta dish garnished with parmesan cheese and herbs."
            },
            {
              id: "2",
              brand: "Fresh Daily",
              name: "Grilled Branzino",
              price: "$32.00",
              rating: 5,
              reviewCount: "98",
              imageSrc: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Delicious grilled salmon served with vibrant vegetables on a plate."
            },
            {
              id: "3",
              brand: "House Special",
              name: "Tiramisu della Casa",
              price: "$12.00",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/34104119/pexels-photo-34104119.png?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of a decadent dessert with chocolate and strawberry topping, set on an elegant table."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read reviews from our valued customers who have experienced our authentic Italian cuisine"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Food Critic",
              company: "City Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of a smiling senior woman wearing glasses against a bright indoor background."
            },
            {
              id: "2",
              name: "James Thompson",
              role: "Local Resident",
              company: "Regular Customer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Top view of a stylish home office desk with a laptop, planner, and coffee cup, showing hands on a blueprint."
            },
            {
              id: "3",
              name: "Sophia Chen",
              role: "Food Blogger",
              company: "Taste Adventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34519507/pexels-photo-34519507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Free stock photo of adventure, beach, beautiful"
            },
            {
              id: "4",
              name: "David Miller",
              role: "Business Executive",
              company: "Corporate Client",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7562140/pexels-photo-7562140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Studio portrait of a man in a mustard shirt with a neutral expression and facial hair."
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Achievement"
          description="Numbers that showcase our commitment to culinary excellence and customer satisfaction"
          tag="Success"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "15",
              title: "years",
              description: "Serving authentic Italian cuisine",
              icon: Calendar
            },
            {
              id: "2",
              value: "50k+",
              title: "guests",
              description: "Satisfied customers served",
              icon: Users
            },
            {
              id: "3",
              value: "4.8",
              title: "rating",
              description: "Average customer review score",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about dining with us"
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations especially for dinner service. You can call us or use our online reservation system."
            },
            {
              id: "2",
              title: "What are your operating hours?",
              content: "We're open Tuesday through Sunday from 5:00 PM to 10:30 PM. We're closed on Mondays for staff training and menu development."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We offer vegetarian, vegan, and gluten-free options. Please inform us of any allergies or dietary needs when making your reservation."
            },
            {
              id: "4",
              title: "Is there parking available?",
              content: "We offer complimentary valet parking for all our guests. Street parking is also available, and we're located near several public parking garages."
            }
          ]}
          textPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Reserve Your Table Today"
          description="Join us for an unforgettable dining experience. Book your table or contact us for special events and private dining options."
          inputPlaceholder="Your email address"
          buttonText="Make Reservation"
          termsText="By making a reservation, you agree to our dining policies and cancellation terms."
          imageSrc="https://images.pexels.com/photos/7552321/pexels-photo-7552321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A baker arranges a freshly made cake on a glass stand, with cupcakes nearby, in a bright kitchen."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bella Vista"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "contact" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Reviews", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}