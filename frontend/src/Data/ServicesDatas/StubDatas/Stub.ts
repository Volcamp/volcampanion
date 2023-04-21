import {Plan} from "../../DTO/Plan";
import {Speaker} from "../../DTO/Speaker";
import {TalkPlan} from "../../DTO/TalkPlan";
import {BreakPlan} from "../../DTO/BreakPlan";
import {DividerPlan} from "../../DTO/DividerPlan";

export const TALK_DATA: Plan[] = [
  new DividerPlan(new Date("2022-03-03T00:00:00")),
  new DividerPlan(new Date("2022-10-10T00:00:00")),
  new DividerPlan(new Date("2022-10-11T00:00:00")),

  new TalkPlan(
    {
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
    {
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
    new Date('2022-03-03T12:15:00') ) ,
  new TalkPlan(
     {
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
     {
      id: 1,
      title: "Introduction to Angular",
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
   new Date('2022-03-03T13:15:00')),

  new TalkPlan(
    {
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
    {
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
    new Date('2022-10-10T09:40:00')),
  new TalkPlan(
     {
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
     {
      id: 2,
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
    new Date('2022-10-10T22:40:00')
  ),

  new TalkPlan(
    {
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
     {
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
    new Date('2022-10-11T22:40:00')
  ),

  new BreakPlan(
    {
      id: 0,
      title: "Accueil et Croissants",
      description: "",
      level: "",
      language: "",
      conference: {
        id: 0
      },
      format: {
        name: "BREAK",
        type: "BREAK",
        description: "string",
        durationUnit: "NANOS",
        durationTime: 0,
        duration: 0,
        id: 0
      }
    },
    new Date("2023-10-10T12:15:50"))
  ,
  new BreakPlan(
    {
      id: 0,
      title: "Accueil et Croissants",
      description: "",
      level: "",
      language: "",
      conference: {
        id: 0
      },
      format: {
        name: "BREAK",
        type: "BREAK",
        description: "string",
        durationUnit: "NANOS",
        durationTime: 15,
        duration: 15,
        id: 0
      }
    },
    new Date("2022-03-03T13:00:50")),

];



const speakers: Speaker[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    twitter: '@johnsmith',
    linkedin: 'linkedin.com/in/johnsmith',
    biography: 'John Smith is a software engineer with over 10 years of experience...',
    photo: 'https://example.com/johnsmith.jpg',
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: '2023-08-15',
      endDate: '2023-08-17'
    }
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    twitter: '@janedoe',
    linkedin: 'linkedin.com/in/janedoe',
    biography: 'Jane Doe is a UX designer with a passion for creating intuitive user interfaces...',
    photo: 'https://example.com/janedoe.jpg',
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: '2023-08-15',
      endDate: '2023-08-17'
    }
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    twitter: '@bobjohnson',
    linkedin: 'linkedin.com/in/bobjohnson',
    biography: 'Bob Johnson is a data scientist with expertise in machine learning and data analysis...',
    photo: 'https://example.com/bobjohnson.jpg',
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: '2023-08-15',
      endDate: '2023-08-17'
    }
  },
  {
    id: 4,
    name: 'Sarah Lee',
    email: 'sarah.lee@example.com',
    twitter: '@sarahlee',
    linkedin: 'linkedin.com/in/sarahlee',
    biography: 'Sarah Lee is a software engineer and open-source enthusiast...',
    photo: 'https://example.com/sarahlee.jpg',
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: '2023-08-15',
      endDate: '2023-08-17'
    }
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david.kim@example.com',
    twitter: '@davidkim',
    linkedin: 'linkedin.com/in/davidkim',
    biography: 'David Kim is a cybersecurity expert with a focus on network security...',
    photo: 'https://example.com/davidkim.jpg',
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: '2023-08-15',
      endDate: '2023-08-17'
    }
  }]
