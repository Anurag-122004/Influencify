"use client";
import AgentPulse from "@/components/AgentPulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import {
  Brain,
  SpellCheck,
  Image as ImageIcon,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Video,
  UserPlus,
  Upload,
  Mail,
  ArrowRight,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const steps = [
  {
    title: "1. Create an Account",
    description:
      "Create an account on Influencify to get started with creating content.",
    icon: UserPlus,
  },
  {
    title: "2. Add Content",
    description:
      "Add your content to Influencify to get suggestions and improvements.",
    icon: ImageIcon,
  },
  {
    title: "3. Get Suggestions",
    description:
      "Get suggestions and improvements for your content from Influencify.",
    icon: Sparkles,
  },
  {
    title: "4. Publish Content",
    description:
      "Publish your content with the suggestions and improvements from Influencify.",
    icon: Upload,
  },
];

const features = [
  {
    title: "Grammer & Readability Enhancement",
    description:
      "Influencify helps you improve the readability and grammar of your content.",
    icon: SpellCheck,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Video Analysis",
    description:
      "Influencify helps you analyze your video content to understand how your audience is engaging with it.",
    icon: Video,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    title: "Smart Transcription",
    description:
      "Influencify helps you schedule your content to be published at the right time.",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    title: "Hashtag & Trend Suggestions",
    description:
      "Influencify helps you find the right hashtags and trends to use in your content.",
    icon: Brain,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    title: "Image Generation",
    description:
      "Influencify helps you generate images for your content in seconds.",
    icon: ImageIcon,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    title: "Script Generation",
    description:
      "Influencify helps you generate scripts for your video content in seconds.",
    icon: TrendingUp,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Title Generation",
    description:
      "Influencify helps you generate engaging titles for your content in seconds.",
    icon: Sparkles,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
];

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Testimonials", "FAQ", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["Blog", "Documentation", "Guides", "API", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
];

const socialLinks = [
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Github, url: "#", label: "GitHub" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        toast.success("Subscribed successfully!");
        setEmail("");
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <Toaster position="bottom-right" />
      {/* hero section */}
      <section className="py-18 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="large" color="blue" />

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 ">
              Here is your Personal{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                AI Content Agent
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Influencify is an AI-powered content agent that helps you create
              engaging content for your audience in seconds.
            </p>

            {/* youtube video */}
            <YoutubeVideoForm />
          </div>
        </div>
      </section>

      {/* feature section */}
      <section className="py-18 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerfull Features for Your Content
          </h2>

          {/* features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 transition duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.iconBg}`}
                  >
                    <Icon className={`w-5 h-6 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* how it works section */}
      <section className="py-18 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Influencify Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all "
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* footer section */}

      <footer className="bg-gradient-to-r from-blue-50 to-purple-50 pt-16 pb-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div
            className="absolute w-64 h-64 rounded-full bg-blue-200 -top-20 -left-20 animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute w-96 h-96 rounded-full bg-purple-200 -bottom-40 -right-20 animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
          <div
            className="absolute w-48 h-48 rounded-full bg-pink-200 top-1/3 right-1/4 animate-pulse"
            style={{ animationDuration: "7s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Newsletter subscription */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-600">
                Get the latest news and updates from Influencify
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-grow relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 group"
                disabled={isSubmitting}
              >
                Subscribe
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            {isSubmitting && (
              <div className="mt-4 text-center text-green-600 font-medium animate-fadeIn">
                Subscribing...
              </div>
            )}
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-gray-800 mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social links and copyright */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-2">
                {/* <Sparkles className="w-6 h-6 text-blue-500" /> */}
                <AgentPulse size="small" color="blue" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Influencify
              </span>
            </div>

            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all hover:text-blue-500"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Influencify. All rights reserved.
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:bg-gray-50 focus:outline-none z-20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="text-gray-700" />
        </button>
      </footer>
    </div>
  );
}
