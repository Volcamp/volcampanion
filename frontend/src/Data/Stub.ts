import {Talk} from "./DTO/Talk";
import {TalkPlan} from "./DTO/TalkPlan";

export const TALK_DATA: TalkPlan[] = [
  {
    room: {
      name: "Room A",
      description: "A large room with a projector and whiteboard",
      capacity: 50,
      id: 1,
      conference: {
        name: "Conference X",
        startDate: "2022-03-10",
        endDate: "2022-03-12",
        id: 1
      }
    },
    talk: {
      id: 1,
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript",
      level: "Beginner",
      language: "English",
      conference: {
        id: 1
      },
      theme: {
        name: "Web & Mobile",
        description: "Web development tools, frameworks, and languages",
        id: 1
      },
      format: {
        name: "Lecture",
        type: "REX",
        description: "A talk with slides and code examples",
        durationUnit: "MINUTES",
        durationTime: 45,
        duration: 45,
        id: 1
      },
      speakers: [
        {
          name: "John Doe",
          email: "johndoe@example.com",
          twitter: "@johndoe",
          linkedin: "https://www.linkedin.com/in/johndoe",
          biography: "John is a software engineer with 10 years of experience",
          photo: "https://example.com/johndoe.jpg",
          conference: {
            id: 1
          },
          id: 1
        }
      ]
    },
    schedule:new Date('2022-03-03T12:15:00')
  },
  {
    room: {
      name: "Room B",
      description: "A large room with a projector and whiteboard",
      capacity: 50,
      id: 1,
      conference: {
        name: "Conference X",
        startDate: "2022-03-10",
        endDate: "2022-03-12",
        id: 1
      }
    },
    talk: {
      id: 1,
      title: "Introduction to Anigular",
      description: "Learn the basics of TypeScript",
      level: "Beginner",
      language: "English",
      conference: {
        id: 1
      },
      theme: {
        name: "DevOps & Cloud",
        description: "Web development tools, frameworks, and languages",
        id: 1
      },
      format: {
        name: "Lecture",
        type: "Workshop",
        description: "A talk with slides and code examples",
        durationUnit: "MINUTES",
        durationTime: 60,
        duration: 60,
        id: 1
      },
      speakers: [
        {
          name: "John Doe",
          email: "johndoe@example.com",
          twitter: "@johndoe",
          linkedin: "https://www.linkedin.com/in/johndoe",
          biography: "John is a software engineer with 10 years of experience",
          photo: "https://example.com/johndoe.jpg",
          conference: {
            id: 1
          },
          id: 1
        },
        {
          name: "Camille Doe",
          email: "johndoe@example.com",
          twitter: "@johndoe",
          linkedin: "https://www.linkedin.com/in/johndoe",
          biography: "John is a software engineer with 10 years of experience",
          photo: "https://example.com/johndoe.jpg",
          conference: {
            id: 1
          },
          id: 1
        }
      ]
    },
    schedule:new Date('2022-03-03T12:00:00')
  },
  {
    room: {
      name: "Room C",
      description: "A large room with a projector and whiteboard",
      capacity: 50,
      id: 1,
      conference: {
        name: "Conference X",
        startDate: "2022-03-10",
        endDate: "2022-03-12",
        id: 1
      }
    },
    talk: {
      id: 1,
      title: "Introduction to Java",
      description: "Learn the basics of Java",
      level: "Beginner",
      language: "English",
      conference: {
        id: 1
      },
      theme: {
        name: "BigData & AI",
        description: "Web development tools, frameworks, and languages",
        id: 1
      },
      format: {
        name: "Lecture",
        type: "Lightning",
        description: "A talk with slides and code examples",
        durationUnit: "MINUTES",
        durationTime: 80,
        duration: 80,
        id: 1
      },
      speakers: [
        {
          name: "John Doe",
          email: "johndoe@example.com",
          twitter: "@johndoe",
          linkedin: "https://www.linkedin.com/in/johndoe",
          biography: "John is a software engineer with 10 years of experience",
          photo: "https://example.com/johndoe.jpg",
          conference: {
            id: 1
          },
          id: 1
        },
        {
          name: "Camille Doe",
          email: "johndoe@example.com",
          twitter: "@johndoe",
          linkedin: "https://www.linkedin.com/in/johndoe",
          biography: "John is a software engineer with 10 years of experience",
          photo: "https://example.com/johndoe.jpg",
          conference: {
            id: 1
          },
          id: 1
        },
        {
          name: "Cheval Doe",
          email: "johndoe@example.com",
          twitter: "@johndoe",
          linkedin: "https://www.linkedin.com/in/johndoe",
          biography: "John is a software engineer with 10 years of experience",
          photo: "https://example.com/johndoe.jpg",
          conference: {
            id: 1
          },
          id: 1
        }
      ]
    },
    schedule:new Date('2022-10-10T22:40:00')
  }

];

