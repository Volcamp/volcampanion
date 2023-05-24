import {Planning, PlanningType} from "../dto/input/Planning";
import {Speaker} from "../dto/input/Speaker";
import {DividerPlanning} from "../dto/input/DividerPlanning";
import {TalkPlanning} from "../dto/input/TalkPlanning";
import {BreakPlanning} from "../dto/input/BreakPlanning";
import {PlanningTheme} from "../dto/input/Theme";

export const TALK_DATA: Planning[] = [
  new DividerPlanning(new Date("2022-03-03T00:00:00")),
  new DividerPlanning(new Date("2022-10-10T00:00:00")),
  new DividerPlanning(new Date("2022-10-11T00:00:00")),

  new TalkPlanning(
    {
      name: "Room A",
      description: "A large room with a projector and whiteboard",
      capacity: 50,
      id: 1,
      conference: {
        name: "Conference X",
        startDate: new Date("2022-03-10"),
        endDate: new Date("2022-03-12"),
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
        name: PlanningTheme.WEB_AND_MOBILE,
        description: "Web development tools, frameworks, and languages",
        id: 1
      },
      format: {
        name: "Lecture",
        type: PlanningType.REX,
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
          conference: {
            id: 1
          },
          id: 1
        }
      ]
    },
    new Date('2022-03-03T12:15:00')),
  new TalkPlanning(
    {
      name: "Room B",
      description: "A large room with a projector and whiteboard",
      capacity: 50,
      id: 2,
      conference: {
        name: "Conference X",
        startDate: new Date("2022-03-10"),
        endDate: new Date("2022-03-12"),
        id: 1
      }
    },
    {
      id: 2,
      title: "Introduction to Angular",
      description: "Learn the basics of TypeScript",
      level: "Beginner",
      language: "English",
      conference: {
        id: 1
      },
      theme: {
        name: PlanningTheme.DEVOPS_AND_CLOUD,
        description: "Web development tools, frameworks, and languages",
        id: 1
      },
      format: {
        name: "Lecture",
        type: PlanningType.WORKSHOP,
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
          conference: {
            id: 1
          },
          id: 1
        }
      ]
    },
    new Date('2022-03-03T13:15:00')),

  new TalkPlanning(
    {
      name: "Room C",
      description: "A large room with a projector and whiteboard",
      capacity: 50,
      id: 3,
      conference: {
        name: "Conference X",
        startDate: new Date("2022-03-10"),
        endDate: new Date("2022-03-12"),
        id: 1
      }
    },
    {
      id: 3,
      title: "Introduction to Java",
      description: "Learn the basics of Java",
      level: "Beginner",
      language: "English",
      conference: {
        id: 1
      },
      theme: {
        name: PlanningTheme.BIGDATA_AND_AI,
        description: "Web development tools, frameworks, and languages",
        id: 1
      },
      format: {
        name: "Lecture",
        type: PlanningType.LIGHTNING,
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
          conference: {
            id: 1
          },
          id: 1
        }
      ]
    },
    new Date('2022-10-10T09:40:00')),
  new TalkPlanning(
    {
      name: "Room C",
      description: "A large room with a projector and whiteboard",
      capacity: 50,
      id: 4,
      conference: {
        name: "Conference X",
        startDate: new Date("2022-03-10"),
        endDate: new Date("2022-03-12"),
        id: 1
      }
    },
    {
      id: 4,
      title: "Introduction to Java",
      description: "Learn the basics of Java",
      level: "Beginner",
      language: "English",
      conference: {
        id: 1
      },
      theme: {
        name: PlanningTheme.BIGDATA_AND_AI,
        description: "Web development tools, frameworks, and languages",
        id: 1
      },
      format: {
        name: "Lecture",
        type: PlanningType.LIGHTNING,
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
          conference: {
            id: 1
          },
          id: 1
        }
      ]
    },
    new Date('2022-10-10T22:40:00')
  ),

  new TalkPlanning(
    {
      name: "Room C",
      description: "A large room with a projector and whiteboard",
      capacity: 50,
      id: 5,
      conference: {
        name: "Conference X",
        startDate: new Date("2022-03-10"),
        endDate: new Date("2022-03-12"),
        id: 1
      }
    },
    {
      id: 5,
      title: "Introduction to Java",
      description: "Learn the basics of Java",
      level: "Beginner",
      language: "English",
      conference: {
        id: 1
      },
      theme: {
        name: PlanningTheme.BIGDATA_AND_AI,
        description: "Web development tools, frameworks, and languages",
        id: 1
      },
      format: {
        name: "Lecture",
        type: PlanningType.LIGHTNING,
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
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
          photo: "https://picsum.photos/1000/1000",
          company: "agaetis",
          conference: {
            id: 1
          },
          id: 1
        },
      ]
    },
    new Date('2022-10-11T22:40:00')
  ),

  new BreakPlanning(
    {
      id: 6,
      title: "Accueil et Croissants",
      description: "",
      level: "",
      language: "",
      conference: {
        id: 0
      },
      format: {
        name: "BREAK",
        type: PlanningType.BREAK,
        description: "string",
        durationUnit: "NANOS",
        durationTime: 0,
        duration: 0,
        id: 0
      }
    },
    new Date("2023-10-10T12:15:50"))
  ,
  new BreakPlanning(
    {
      id: 7,
      title: "Accueil et Croissants",
      description: "",
      level: "",
      language: "",
      conference: {
        id: 0
      },
      format: {
        name: "BREAK",
        type: PlanningType.BREAK,
        description: "string",
        durationUnit: "NANOS",
        durationTime: 15,
        duration: 15,
        id: 0
      }
    },
    new Date("2022-03-03T13:00:50")),

];


export const SPEAKER_DATA: Speaker[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    twitter: '@johnsmith',
    linkedin: 'linkedin.com/in/johnsmith',
    biography: 'John Smith is a software engineer with over 10 years of experience...',
    photo: 'https://picsum.photos/1000/1000',
    company: "agaetis",
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: new Date('2023-08-15'),
      endDate: new Date('2023-08-17')
    }
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    twitter: '@janedoe',
    linkedin: 'linkedin.com/in/janedoe',
    biography: 'Jane Doe is a UX designer with a passion for creating intuitive user interfaces...',
    photo: 'https://picsum.photos/1000/1000',
    company: "agaetis",
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: new Date('2023-08-15'),
      endDate: new Date('2023-08-17')
    }
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    twitter: '@bobjohnson',
    linkedin: 'linkedin.com/in/bobjohnson',
    biography: 'Bob Johnson is a data scientist with expertise in machine learning and data analysis...',
    photo: 'https://picsum.photos/1000/1000',
    company: "agaetis",
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: new Date('2023-08-15'),
      endDate: new Date('2023-08-17')
    }
  },
  {
    id: 4,
    name: 'Sarah Lee',
    email: 'sarah.lee@example.com',
    twitter: '@sarahlee',
    linkedin: 'linkedin.com/in/sarahlee',
    biography: 'Sarah Lee is a software engineer and open-source enthusiast...',
    photo: 'https://picsum.photos/1000/1000',
    company: "agaetis",
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: new Date('2023-08-15'),
      endDate: new Date('2023-08-17')
    }
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david.kim@example.com',
    twitter: '@davidkim',
    linkedin: 'linkedin.com/in/davidkim',
    biography: 'David Kim is a cybersecurity expert with a focus on network security...',
    photo: 'https://picsum.photos/1000/1000',
    company: "agaetis",
    conference: {
      id: 1,
      name: 'Tech Conference 2023',
      startDate: new Date('2023-08-15'),
      endDate: new Date('2023-08-17')
    }
  }]
