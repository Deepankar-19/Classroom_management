"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  GraduationCap,
  Calendar,
  FileText,
  BarChart3,
  Home,
  Clock,
  Download,
  Play,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Star,
  Award,
  Target,
  Send,
  Bot,
  User,
} from "lucide-react"

export default function StudentDashboard() {
  const [selectedWeek, setSelectedWeek] = useState("current")
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hello! I'm your AI study assistant. I have access to all your class transcripts and can help you with doubts about any topic covered in your classes. What would you like to know?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const mockAIResponses = [
    "Based on your Computer Science class transcript from January 15th, algorithm complexity analysis involves measuring time and space requirements. Big O notation helps us understand worst-case scenarios.",
    "From your Data Structures lecture on Binary Search Trees, remember that BST operations have O(log n) average time complexity, but can degrade to O(n) in worst case with unbalanced trees.",
    "Your Database Systems class covered SQL optimization. Key points: use indexes wisely, avoid SELECT *, and understand query execution plans for better performance.",
    "In your Software Engineering class on Design Patterns, we discussed Singleton, Factory, and Observer patterns. Each solves specific architectural problems.",
    "From your recent Machine Learning session, supervised learning requires labeled training data, while unsupervised learning finds patterns in unlabeled data.",
    "Your Operating Systems class explained process scheduling algorithms like Round Robin, FCFS, and Priority Scheduling. Each has different use cases and performance characteristics.",
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    setTimeout(() => {
      const randomResponse = mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)]
      const botMessage = {
        id: messages.length + 2,
        type: "bot",
        content: randomResponse,
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const todaySchedule = [
    {
      id: 1,
      subject: "Computer Science",
      time: "09:00 - 10:30",
      room: "Room 101",
      teacher: "Prof. Johnson",
      status: "completed",
    },
    {
      id: 2,
      subject: "Data Structures",
      time: "11:00 - 12:30",
      room: "Lab 201",
      teacher: "Dr. Smith",
      status: "current",
    },
    {
      id: 3,
      subject: "Database Systems",
      time: "14:00 - 15:30",
      room: "Lab 301",
      teacher: "Prof. Davis",
      status: "upcoming",
    },
    {
      id: 4,
      subject: "Software Engineering",
      time: "16:00 - 17:30",
      room: "Room 205",
      teacher: "Ms. Wilson",
      status: "upcoming",
    },
  ]

  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        { subject: "Computer Science", time: "09:00-10:30", room: "Room 101" },
        { subject: "Data Structures", time: "11:00-12:30", room: "Lab 201" },
        { subject: "Database Systems", time: "14:00-15:30", room: "Lab 301" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { subject: "Software Engineering", time: "09:00-10:30", room: "Room 205" },
        { subject: "Operating Systems", time: "11:00-12:30", room: "Room 301" },
        { subject: "Web Development", time: "14:00-15:30", room: "Lab 401" },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { subject: "Computer Science", time: "09:00-10:30", room: "Room 101" },
        { subject: "Data Structures", time: "11:00-12:30", room: "Lab 201" },
        { subject: "Machine Learning", time: "14:00-15:30", room: "Studio 1" },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { subject: "Database Systems", time: "09:00-10:30", room: "Lab 301" },
        { subject: "Software Engineering", time: "11:00-12:30", room: "Room 205" },
        { subject: "Network Security", time: "14:00-15:30", room: "Gymnasium" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { subject: "Web Development", time: "09:00-10:30", room: "Lab 401" },
        { subject: "Operating Systems", time: "11:00-12:30", room: "Room 301" },
        { subject: "Computer Science", time: "14:00-15:30", room: "Room 101" },
      ],
    },
  ]

  const attendanceData = [
    { subject: "Computer Science", present: 18, total: 20, percentage: 90 },
    { subject: "Data Structures", present: 16, total: 18, percentage: 89 },
    { subject: "Database Systems", present: 17, total: 19, percentage: 89 },
    { subject: "Software Engineering", present: 19, total: 20, percentage: 95 },
    { subject: "Operating Systems", present: 15, total: 17, percentage: 88 },
    { subject: "Web Development", present: 16, total: 18, percentage: 89 },
  ]

  const gradesData = [
    {
      subject: "Computer Science",
      currentGrade: "A-",
      percentage: 92,
      cgpa: 9.2,
      assignments: [
        {
          name: "Algorithm Analysis",
          score: 95,
          cgpa: 9.5,
          date: "2024-01-15",
          feedback: "Excellent work on complexity analysis!",
        },
        {
          name: "Programming Fundamentals",
          score: 88,
          cgpa: 8.8,
          date: "2024-01-08",
          feedback: "Good understanding, minor logic errors.",
        },
        {
          name: "Object-Oriented Design",
          score: 94,
          cgpa: 9.4,
          date: "2024-01-01",
          feedback: "Clear design patterns demonstrated.",
        },
      ],
    },
    {
      subject: "Data Structures",
      currentGrade: "B+",
      percentage: 87,
      cgpa: 8.7,
      assignments: [
        {
          name: "Binary Trees",
          score: 89,
          cgpa: 8.9,
          date: "2024-01-14",
          feedback: "Good grasp of tree traversal, work on balancing.",
        },
        {
          name: "Hash Tables",
          score: 85,
          cgpa: 8.5,
          date: "2024-01-07",
          feedback: "Solid foundation, practice collision handling.",
        },
        {
          name: "Graph Algorithms",
          score: 87,
          cgpa: 8.7,
          date: "2023-12-30",
          feedback: "Well-implemented DFS and BFS solutions.",
        },
      ],
    },
    {
      subject: "Database Systems",
      currentGrade: "A",
      percentage: 95,
      cgpa: 9.5,
      assignments: [
        {
          name: "SQL Queries",
          score: 96,
          cgpa: 9.6,
          date: "2024-01-13",
          feedback: "Outstanding understanding of complex joins!",
        },
        {
          name: "Database Design",
          score: 94,
          cgpa: 9.4,
          date: "2024-01-06",
          feedback: "Excellent normalization and ER diagrams.",
        },
        {
          name: "Transaction Management",
          score: 95,
          cgpa: 9.5,
          date: "2023-12-29",
          feedback: "Perfect understanding of ACID properties.",
        },
      ],
    },
    {
      subject: "Software Engineering",
      currentGrade: "A",
      percentage: 96,
      cgpa: 9.6,
      assignments: [
        {
          name: "System Design",
          score: 98,
          cgpa: 9.8,
          date: "2024-01-12",
          feedback: "Insightful architecture with excellent scalability.",
        },
        {
          name: "Testing Strategies",
          score: 94,
          cgpa: 9.4,
          date: "2024-01-05",
          feedback: "Good test coverage, work on edge cases.",
        },
        {
          name: "Agile Development",
          score: 96,
          cgpa: 9.6,
          date: "2023-12-28",
          feedback: "Creative and effective sprint planning.",
        },
      ],
    },
  ]

  const transcripts = [
    {
      id: 1,
      subject: "Computer Science",
      topic: "Algorithm Complexity Analysis",
      date: "2024-01-15",
      duration: "1h 25m",
      status: "available",
      teacher: "Prof. Johnson",
    },
    {
      id: 2,
      subject: "Data Structures",
      topic: "Binary Search Trees",
      date: "2024-01-14",
      duration: "1h 30m",
      status: "processing",
      teacher: "Dr. Smith",
    },
    {
      id: 3,
      subject: "Database Systems",
      topic: "SQL Query Optimization",
      date: "2024-01-13",
      duration: "1h 20m",
      status: "available",
      teacher: "Prof. Davis",
    },
    {
      id: 4,
      subject: "Software Engineering",
      topic: "Design Patterns",
      date: "2024-01-12",
      duration: "1h 15m",
      status: "available",
      teacher: "Ms. Wilson",
    },
  ]

  const overallAttendance = Math.round(
    attendanceData.reduce((acc, curr) => acc + curr.percentage, 0) / attendanceData.length,
  )

  const overallCGPA = (gradesData.reduce((acc, curr) => acc + curr.cgpa, 0) / gradesData.length).toFixed(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => (window.location.href = "/")}>
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Student Portal</h1>
                  <p className="text-sm text-gray-600">Welcome back, Alex Thompson</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                Sem 5
              </Badge>
              <Badge variant="secondary" className="text-xs bg-gray-200 text-gray-700">
                Student ID: ST2024001
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Today's Classes</CardTitle>
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">4</div>
              <p className="text-xs text-gray-500">1 in progress</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Overall Attendance</CardTitle>
                <BarChart3 className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{overallAttendance}%</div>
              <p className="text-xs text-gray-500">This semester</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Current CGPA</CardTitle>
                <Award className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{overallCGPA}</div>
              <p className="text-xs text-gray-500">Out of 10.0</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">This Week</CardTitle>
                <TrendingUp className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">15</div>
              <p className="text-xs text-gray-500">Total classes</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-gray-100">
            <TabsTrigger value="today">Today's Schedule</TabsTrigger>
            <TabsTrigger value="timetable">Weekly Timetable</TabsTrigger>
            <TabsTrigger value="grades">My Grades</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="transcripts">Class Transcripts</TabsTrigger>
            <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
          </TabsList>

          {/* Today's Schedule */}
          <TabsContent value="today" className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Today's Classes</CardTitle>
                <CardDescription className="text-gray-600">Your schedule for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaySchedule.map((classItem) => (
                    <div
                      key={classItem.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-gray-50/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-gray-900">{classItem.subject}</h3>
                          <p className="text-sm text-gray-600">
                            {classItem.teacher} • {classItem.room}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          {classItem.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            classItem.status === "current"
                              ? "default"
                              : classItem.status === "completed"
                                ? "secondary"
                                : "outline"
                          }
                          className={
                            classItem.status === "current"
                              ? "bg-blue-600"
                              : classItem.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-200 text-gray-700"
                          }
                        >
                          {classItem.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {classItem.status}
                        </Badge>
                        {classItem.status === "current" && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Join Class
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Weekly Timetable */}
          <TabsContent value="timetable" className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Weekly Timetable</CardTitle>
                <CardDescription className="text-gray-600">Your complete weekly schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  {weeklySchedule.map((day) => (
                    <div key={day.day} className="space-y-3">
                      <h3 className="font-semibold text-gray-900 text-center p-2 bg-gray-100 rounded-lg">{day.day}</h3>
                      <div className="space-y-2">
                        {day.classes.map((classItem, index) => (
                          <div key={index} className="p-3 rounded-lg border border-gray-200 bg-white text-center">
                            <div className="font-medium text-gray-900 text-sm">{classItem.subject}</div>
                            <div className="text-xs text-gray-600">{classItem.time}</div>
                            <div className="text-xs text-gray-500">{classItem.room}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Grades */}
          <TabsContent value="grades" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {gradesData.map((subject) => (
                <Card key={subject.subject} className="bg-white border-gray-200 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-gray-600">{subject.subject}</CardTitle>
                      <Target className="h-4 w-4 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{subject.currentGrade}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">CGPA: {subject.cgpa}/10</span>
                    </div>
                    <Progress value={subject.percentage} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Detailed Grade Report</CardTitle>
                <CardDescription className="text-gray-600">Your performance across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {gradesData.map((subject) => (
                    <div key={subject.subject} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-4 w-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{subject.subject}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {subject.present}/{subject.total} classes
                          </span>
                          <Badge
                            variant={subject.currentGrade.startsWith("A") ? "default" : "secondary"}
                            className={
                              subject.currentGrade.startsWith("A")
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }
                          >
                            {subject.currentGrade} (CGPA: {subject.cgpa}/10)
                          </Badge>
                        </div>
                      </div>
                      <Progress value={subject.percentage} className="h-2" />
                      {subject.percentage < 75 && (
                        <div className="flex items-center gap-2 text-sm text-red-600">
                          <AlertTriangle className="h-4 w-4" />
                          <span>Attendance below minimum requirement</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attendance */}
          <TabsContent value="attendance" className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Attendance Summary</CardTitle>
                <CardDescription className="text-gray-600">Your attendance record across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {attendanceData.map((subject) => (
                    <div key={subject.subject} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-4 w-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{subject.subject}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {subject.present}/{subject.total} classes
                          </span>
                          <Badge
                            variant={
                              subject.percentage >= 90
                                ? "default"
                                : subject.percentage >= 75
                                  ? "secondary"
                                  : "destructive"
                            }
                            className={
                              subject.percentage >= 90
                                ? "bg-green-100 text-green-700"
                                : subject.percentage >= 75
                                  ? "bg-gray-200 text-gray-700"
                                  : "bg-red-100 text-red-700"
                            }
                          >
                            {subject.percentage}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={subject.percentage} className="h-2" />
                      {subject.percentage < 75 && (
                        <div className="flex items-center gap-2 text-sm text-red-600">
                          <AlertTriangle className="h-4 w-4" />
                          <span>Attendance below minimum requirement</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Class Transcripts */}
          <TabsContent value="transcripts" className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Class Transcripts</CardTitle>
                <CardDescription className="text-gray-600">
                  Access recorded class sessions and transcripts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transcripts.map((transcript) => (
                    <div
                      key={transcript.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-gray-50/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{transcript.topic}</h3>
                          <p className="text-sm text-gray-600">
                            {transcript.subject} • {transcript.teacher} • {transcript.date}
                          </p>
                          <p className="text-xs text-gray-500">Duration: {transcript.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={transcript.status === "available" ? "default" : "secondary"}
                          className={
                            transcript.status === "available"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-200 text-gray-700"
                          }
                        >
                          {transcript.status === "available" ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {transcript.status}
                        </Badge>
                        {transcript.status === "available" && (
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Play className="h-4 w-4 mr-2" />
                              Play Audio
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Assistant */}
          <TabsContent value="ai-assistant" className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <Bot className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900">AI Study Assistant</CardTitle>
                    <CardDescription className="text-gray-600">
                      Ask questions about your class topics and get help with doubts
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col h-[500px]">
                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto max-h-[400px] pr-4 mb-4 border border-gray-200 rounded-lg p-4 bg-gray-50/30">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`flex gap-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : ""}`}
                          >
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                message.type === "bot" ? "bg-purple-100" : "bg-blue-100"
                              }`}
                            >
                              {message.type === "bot" ? (
                                <Bot className="h-4 w-4 text-purple-600" />
                              ) : (
                                <User className="h-4 w-4 text-blue-600" />
                              )}
                            </div>
                            <div
                              className={`rounded-lg p-3 ${
                                message.type === "bot" ? "bg-gray-100 text-gray-900" : "bg-blue-600 text-white"
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                              <p
                                className={`text-xs mt-1 ${message.type === "bot" ? "text-gray-500" : "text-blue-100"}`}
                              >
                                {message.timestamp}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex gap-3 justify-start">
                          <div className="flex gap-3 max-w-[80%]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                              <Bot className="h-4 w-4 text-purple-600" />
                            </div>
                            <div className="rounded-lg p-3 bg-gray-100 text-gray-900">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2 border-t border-gray-200 pt-4">
                    <Input
                      placeholder="Ask me about any topic from your classes..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Quick Suggestions */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">Quick Questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Explain algorithm complexity",
                      "What are design patterns?",
                      "SQL optimization tips",
                      "Binary search trees",
                      "Machine learning basics",
                    ].map((suggestion) => (
                      <Button
                        key={suggestion}
                        variant="outline"
                        size="sm"
                        onClick={() => setInputMessage(suggestion)}
                        className="text-xs"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
