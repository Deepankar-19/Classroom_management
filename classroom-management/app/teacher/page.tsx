"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  BookOpen,
  Calendar,
  Users,
  Mic,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Play,
  Square,
  Home,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Save,
} from "lucide-react"

export default function TeacherDashboard() {
  const [isRecording, setIsRecording] = useState(false)
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedStudent, setSelectedStudent] = useState("")
  const [gradeValue, setGradeValue] = useState("")
  const [gradeComments, setGradeComments] = useState("")

  // Mock data
  const todayClasses = [
    { id: 1, subject: "Computer Science", time: "09:00 - 10:30", room: "Room 101", students: 28, status: "upcoming" },
    { id: 2, subject: "Data Structures", time: "11:00 - 12:30", room: "Lab 201", students: 24, status: "current" },
    { id: 3, subject: "Database Systems", time: "14:00 - 15:30", room: "Lab 301", students: 26, status: "upcoming" },
  ]

  const mySubjects = [
    { id: 1, name: "Computer Science", grade: "Year 1", students: 28, schedule: "Mon, Wed, Fri" },
    { id: 2, name: "Data Structures", grade: "Year 2", students: 24, schedule: "Tue, Thu" },
    { id: 3, name: "Database Systems", grade: "Year 3", students: 26, schedule: "Mon, Thu" },
  ]

  const attendanceData = [
    { student: "Alice Johnson", computerScience: 95, dataStructures: 88, databaseSystems: 92 },
    { student: "Bob Smith", computerScience: 87, dataStructures: 94, databaseSystems: 89 },
    { student: "Carol Davis", computerScience: 92, dataStructures: 85, databaseSystems: 96 },
    { student: "David Wilson", computerScience: 78, dataStructures: 91, databaseSystems: 83 },
  ]

  const studentsForGrading = [
    {
      id: 1,
      name: "Alice Johnson",
      subject: "Computer Science",
      currentGrade: "A",
      currentCGPA: 9.0,
      lastAssignment: "Algorithm Analysis",
      score: 95,
      cgpa: 9.5,
    },
    {
      id: 2,
      name: "Bob Smith",
      subject: "Computer Science",
      currentGrade: "B+",
      currentCGPA: 8.5,
      lastAssignment: "Algorithm Analysis",
      score: 87,
      cgpa: 8.7,
    },
    {
      id: 3,
      name: "Carol Davis",
      subject: "Data Structures",
      currentGrade: "A-",
      currentCGPA: 8.8,
      lastAssignment: "Binary Trees",
      score: 92,
      cgpa: 9.2,
    },
    {
      id: 4,
      name: "David Wilson",
      subject: "Data Structures",
      currentGrade: "B",
      currentCGPA: 7.8,
      lastAssignment: "Binary Trees",
      score: 78,
      cgpa: 7.8,
    },
    {
      id: 5,
      name: "Emma Brown",
      subject: "Database Systems",
      currentGrade: "A",
      currentCGPA: 9.6,
      lastAssignment: "SQL Queries",
      score: 96,
      cgpa: 9.6,
    },
    {
      id: 6,
      name: "Frank Miller",
      subject: "Database Systems",
      currentGrade: "B-",
      currentCGPA: 7.2,
      lastAssignment: "SQL Queries",
      score: 82,
      cgpa: 8.2,
    },
  ]

  const recordings = [
    {
      id: 1,
      subject: "Computer Science",
      topic: "Algorithm Complexity Analysis",
      date: "2024-01-15",
      duration: "1h 25m",
      status: "processed",
    },
    {
      id: 2,
      subject: "Data Structures",
      topic: "Binary Search Trees",
      date: "2024-01-14",
      duration: "1h 30m",
      status: "processing",
    },
    {
      id: 3,
      subject: "Database Systems",
      topic: "SQL Query Optimization",
      date: "2024-01-13",
      duration: "1h 20m",
      status: "processed",
    },
  ]

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
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Teacher Dashboard</h1>
                  <p className="text-sm text-gray-600">Welcome back, Prof. Sarah Johnson</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
              Online
            </Badge>
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
              <div className="text-2xl font-bold text-gray-900">3</div>
              <p className="text-xs text-gray-500">1 in progress</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Total Students</CardTitle>
                <Users className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">78</div>
              <p className="text-xs text-gray-500">Across 3 subjects</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Avg Attendance</CardTitle>
                <BarChart3 className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">89%</div>
              <p className="text-xs text-gray-500">This week</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Recordings</CardTitle>
                <Mic className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <p className="text-xs text-gray-500">This month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-muted">
            <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
            <TabsTrigger value="subjects">My Subjects</TabsTrigger>
            <TabsTrigger value="grading">Student Grading</TabsTrigger>
            <TabsTrigger value="recording">Class Recording</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
          </TabsList>

          {/* Today's Schedule */}
          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Today's Classes</CardTitle>
                <CardDescription className="text-gray-600">Your schedule for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayClasses.map((classItem) => (
                    <div
                      key={classItem.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-gray-50/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-gray-900">{classItem.subject}</h3>
                          <p className="text-sm text-gray-600">{classItem.room}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          {classItem.time}
                        </div>
                        <Badge
                          variant={classItem.status === "current" ? "default" : "secondary"}
                          className={classItem.status === "current" ? "bg-blue-600" : "bg-gray-200 text-gray-700"}
                        >
                          {classItem.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{classItem.students} students</span>
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

          {/* My Subjects */}
          <TabsContent value="subjects" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">My Subjects</h2>
                <p className="text-gray-600">Manage your teaching subjects</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Subject
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mySubjects.map((subject) => (
                <Card key={subject.id} className="bg-white border-gray-200 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-gray-900">{subject.name}</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{subject.grade}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Students:</span>
                        <span className="text-gray-900">{subject.students}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Schedule:</span>
                        <span className="text-gray-900">{subject.schedule}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Student Grading */}
          <TabsContent value="grading" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Student Grading</h2>
                <p className="text-gray-600">Grade assignments and manage student performance</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Grade
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-gray-900">Add New Grade</DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Enter grade information for a student
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-select">Student</Label>
                      <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select student" />
                        </SelectTrigger>
                        <SelectContent>
                          {studentsForGrading.map((student) => (
                            <SelectItem key={student.id} value={student.name}>
                              {student.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade-input">Grade (CGPA out of 10)</Label>
                      <Input
                        id="grade-input"
                        placeholder="Enter CGPA (e.g., 8.5, 9.2)"
                        value={gradeValue}
                        onChange={(e) => setGradeValue(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comments">Comments</Label>
                      <Textarea
                        id="comments"
                        placeholder="Add feedback or comments"
                        value={gradeComments}
                        onChange={(e) => setGradeComments(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Grade
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Recent Student Grades</CardTitle>
                <CardDescription className="text-gray-600">Overview of student performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-900">Student</TableHead>
                      <TableHead className="text-gray-900">Subject</TableHead>
                      <TableHead className="text-gray-900">Current CGPA</TableHead>
                      <TableHead className="text-gray-900">Last Assignment</TableHead>
                      <TableHead className="text-gray-900">Assignment CGPA</TableHead>
                      <TableHead className="text-gray-900">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {studentsForGrading.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium text-gray-900">{student.name}</TableCell>
                        <TableCell className="text-gray-700">{student.subject}</TableCell>
                        <TableCell>
                          <Badge
                            variant={student.currentCGPA >= 8.5 ? "default" : "secondary"}
                            className={
                              student.currentCGPA >= 8.5 ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                            }
                          >
                            {student.currentCGPA}/10
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-700">{student.lastAssignment}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-gray-900">{student.cgpa}/10</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Class Recording */}
          <TabsContent value="recording" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recording Control */}
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Record Class Session</CardTitle>
                  <CardDescription className="text-gray-600">
                    Start recording for automatic transcription
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="class-select">Select Class</Label>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="ds">Data Structures</SelectItem>
                        <SelectItem value="db">Database Systems</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic</Label>
                    <Input id="topic" placeholder="Enter today's topic" />
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <Button
                      onClick={() => setIsRecording(!isRecording)}
                      className={`${isRecording ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}`}
                    >
                      {isRecording ? (
                        <>
                          <Square className="h-4 w-4 mr-2" />
                          Stop Recording
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Start Recording
                        </>
                      )}
                    </Button>
                    {isRecording && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                        Recording in progress...
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Recordings */}
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Recent Recordings</CardTitle>
                  <CardDescription className="text-gray-600">Your latest class recordings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recordings.map((recording) => (
                      <div
                        key={recording.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50/50"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">{recording.topic}</h4>
                          <p className="text-sm text-gray-600">
                            {recording.subject} • {recording.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={recording.status === "processed" ? "default" : "secondary"}
                            className={
                              recording.status === "processed"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-200 text-gray-700"
                            }
                          >
                            {recording.status === "processed" ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <AlertCircle className="h-3 w-3 mr-1" />
                            )}
                            {recording.status}
                          </Badge>
                          <span className="text-xs text-gray-500">{recording.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Attendance */}
          <TabsContent value="attendance" className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Student Attendance Overview</CardTitle>
                <CardDescription className="text-gray-600">Attendance percentages across your subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-900">Student</TableHead>
                      <TableHead className="text-gray-900">Computer Science</TableHead>
                      <TableHead className="text-gray-900">Data Structures</TableHead>
                      <TableHead className="text-gray-900">Database Systems</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceData.map((student, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-gray-900">{student.student}</TableCell>
                        <TableCell>
                          <Badge
                            variant={student.computerScience >= 90 ? "default" : "secondary"}
                            className={
                              student.computerScience >= 90
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-200 text-gray-700"
                            }
                          >
                            {student.computerScience}%
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={student.dataStructures >= 90 ? "default" : "secondary"}
                            className={
                              student.dataStructures >= 90 ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                            }
                          >
                            {student.dataStructures}%
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={student.databaseSystems >= 90 ? "default" : "secondary"}
                            className={
                              student.databaseSystems >= 90
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-200 text-gray-700"
                            }
                          >
                            {student.databaseSystems}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timetable Management */}
          <TabsContent value="timetable" className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Timetable Input</CardTitle>
                <CardDescription className="text-gray-600">
                  Input your availability and subjects for AI timetable generation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="ds">Data Structures</SelectItem>
                        <SelectItem value="db">Database Systems</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Year 1</SelectItem>
                        <SelectItem value="2">Year 2</SelectItem>
                        <SelectItem value="3">Year 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability Notes</Label>
                  <Textarea
                    id="availability"
                    placeholder="Enter your availability constraints (e.g., not available on Fridays after 2 PM)"
                    rows={3}
                  />
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Timetable
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
