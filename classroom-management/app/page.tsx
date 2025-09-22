"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BookOpen,
  Mic,
  BarChart3,
  Settings,
  GraduationCap,
  UserCheck,
  Clock,
  Sparkles,
  Award,
  TrendingUp,
} from "lucide-react"

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const roles = [
    {
      id: "student",
      title: "Student Portal",
      description: "Access your timetable, attendance records, and class transcripts",
      icon: GraduationCap,
      color: "bg-primary",
      features: ["View Timetable", "Check Attendance", "Access Transcripts", "Class Materials"],
    },
    {
      id: "teacher",
      title: "Teacher Dashboard",
      description: "Manage classes, input subjects, and track student attendance",
      icon: UserCheck,
      color: "bg-accent",
      features: ["Create Timetables", "Record Classes", "Manage Attendance", "Generate Reports"],
    },
    {
      id: "admin",
      title: "Admin Panel",
      description: "Oversee system resources, generate reports, and manage users",
      icon: Settings,
      color: "bg-chart-3",
      features: ["System Management", "User Administration", "Analytics Dashboard", "Resource Planning"],
    },
  ]

  const systemFeatures = [
    {
      icon: Clock,
      title: "Dynamic Timetable Generation",
      description: "AI-powered scheduling with automatic conflict resolution and teacher availability tracking",
    },
    {
      icon: Mic,
      title: "Class Audio Transcription",
      description: "Automated recording and transcription of class sessions for absent students",
    },
    {
      icon: BarChart3,
      title: "Real-time Attendance",
      description: "Live attendance tracking with visual summaries and historical data",
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Separate dashboards for students, teachers, and administrators",
    },
  ]

  const stats = [
    { icon: Award, value: "98%", label: "Attendance Accuracy" },
    { icon: TrendingUp, value: "45%", label: "Time Saved" },
    { icon: Sparkles, value: "500+", label: "Schools Using" },
  ]

  if (selectedRole) {
    // Redirect to role-specific dashboard
    window.location.href = `/${selectedRole}`
    return null
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-lg">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EduFlow</h1>
                <p className="text-sm text-muted-foreground">Smart Classroom Management</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs bg-primary/20 text-primary-foreground border-primary/30">
              Demo Version
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/50 bg-primary/5">
              AI-Powered Education
            </Badge>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Revolutionize Your
            <span className="text-primary"> Classroom Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            AI-powered timetable generation, real-time attendance tracking, and automated class transcription for modern
            educational institutions.
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <stat.icon className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* System Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {systemFeatures.map((feature, index) => (
            <Card key={index} className="bg-white border-border card-hover shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Role Selection */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-3">Choose Your Role</h3>
          <p className="text-lg text-muted-foreground">Select your role to access the appropriate dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role) => (
            <Card
              key={role.id}
              className="bg-white border-border card-hover cursor-pointer group shadow-sm"
              onClick={() => setSelectedRole(role.id)}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl ${role.color} mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <role.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{role.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">{role.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {role.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all">
                  Access Dashboard
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white/50 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="font-medium">EduFlow Demo - Smart Classroom Management System</p>
            <p className="mt-1">Built with modern web technologies for educational excellence</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
