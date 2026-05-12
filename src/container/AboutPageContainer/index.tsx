"use client";

import {
  Award,
  CheckCircle,
  Users,
  Heart,
} from "lucide-react";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutStory from "./components/AboutStory";
import AboutMilestones from "./components/AboutMilestones";
import AboutTechnology from "./components/AboutTechnology";
import AboutTeam from "./components/AboutTeam";
import AboutValues from "./components/AboutValues";
import AboutAccreditations from "./components/AboutAccreditations";

export default function AboutPageContainer() {
  const stats = [
    { label: "Procedures", value: "2,500+", icon: Award, color: "text-sky-500", bg: "bg-sky-500/10" },
    { label: "Happy Patients", value: "10k+", icon: Heart, color: "text-rose-500", bg: "bg-rose-500/10" },
    { label: "Excellence", value: "15yrs", icon: CheckCircle, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { label: "Specialists", value: "12+", icon: Users, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal Dentist",
      specialty: "Cosmetic & Implant Dentistry",
      education: "University of Excellence",
      color: "from-sky-400 to-sky-600"
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      specialty: "Invisalign Expert",
      education: "State Dental Academy",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Pediatric Dentist",
      specialty: "Gentle Care Specialist",
      education: "City Health Medical",
      color: "from-cyan-400 to-cyan-600"
    },
  ];

  return (
    <div className="bg-white">
      <AboutHero />
      <AboutStats stats={stats} />
      <AboutStory />
      <AboutMilestones />
      <AboutTechnology />
      <AboutTeam team={team} />
      <AboutValues />
      <AboutAccreditations />
    </div>
  );
}
