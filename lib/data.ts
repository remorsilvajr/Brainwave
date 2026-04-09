export interface Activity {
  id: number;
  type: 'grade' | 'upload' | 'submission';
  title: string;
  time: string;
  detail: string;
}

export interface Assignment {
  id: number;
  title: string;
  course: string;
  due: string;
  status: 'Pending' | 'In Progress' | 'Not Started' | 'Submitted';
  description?: string;
  submission?: {
    fileName: string;
    comment: string;
    submittedAt: string;
  };
}

export const initialAssignments: Assignment[] = [
  { id: 1, title: "React Components Deep Dive", course: "Advanced Web Dev", due: "Tomorrow", status: "Pending" },
  { id: 2, title: "Neural Network Architecture", course: "Machine Learning", due: "In 3 days", status: "In Progress" },
  { id: 3, title: "Design System Documentation", course: "UI/UX Design", due: "Next Week", status: "Not Started" },
];

export const initialActivities: Activity[] = [
  { id: 1, type: "grade", title: "Assignment 3 Graded", time: "10 mins ago", detail: "85/100 in Web Dev" },
  { id: 2, type: "upload", title: "New Material Uploaded", time: "1 hour ago", detail: "Lecture notes on React 19" },
];
