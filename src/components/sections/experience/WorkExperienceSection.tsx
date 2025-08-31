"use client";

import { ExperienceItemType, WorkExperience } from "../../ui/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
	{
		id: "1",
		companyName: "Arramton Infotech Pvt. Ltd.",
		companyLogo: "/logos/arramton.png",
		isCurrentEmployer: true,
		positions: [
			{
				id: "1-1",
				title: "Sr. Full Stack Developer",
				employmentPeriod: "July 2025 – Present",
				employmentType: "Full-time",
				description: `• Leading development of multiple full-stack applications with a focus on scalability, performance, and security.\n\n• Architected robust system designs, implemented secure payment systems, and integrated AI-driven solutions for automation.\n\n• Built internal tools and customer-facing platforms using modern frameworks.\n\n• Mentored junior developers and collaborated closely with product, design, and business teams to deliver high-impact features under tight deadlines.`,
				icon: "code",
				skills: [
					"React",
					"Next.js",
					"TypeScript",
					"Tailwind CSS",
					"Express.js",
					"Node.js",
					"MongoDB",
					"Docker",
					"MySQL",
					"AI Integration",
					"Payment Systems",
					"System Design",
					"Agile Methodologies",
					"Data Migrations",
					"Team Management",
				],
				location: "Delhi, India",
				isExpanded: true,
			},
			{
				id: "1-2",
				title: "Full Stack Developer",
				employmentPeriod: "July 2024 – June 2025",
				employmentType: "Full-time",
				description: `• Designed and developed AI-powered tools to automate company workflows and enhance operational efficiency.\n\n• Implemented machine learning models and integrated them into existing applications for business decision support.\n\n• Built reusable React components and APIs to support product scalability.\n\n• Collaborated with engineering and data teams to deliver automation pipelines and AI-driven product features.`,
				icon: "code",
				skills: [
					"React",
					"TypeScript",
					"Next.js",
					"Node.js",
					"Express.js",
					"MongoDB",
					"AI Integration",
					"Machine Learning",
					"Python",
					"TensorFlow",
					"Automation",
					"Data Engineering"
				],
				location: "Delhi, India",
				isExpanded: true,
			},
			{
				id: "1-3",
				title: "MERN Stack Intern",
				employmentPeriod: "November 2022 – June 2024",
				employmentType: "Full-time (Remote)",
				description: `• Assisted in developing MERN stack applications, focusing on frontend UI and backend API development.\n\n• Implemented CRUD operations, authentication flows, and integrated third-party APIs.\n\n• Gained hands-on experience with MongoDB, React, Express, and Node.js in real-world projects.\n\n• Supported senior developers in debugging, testing, and documenting features while learning best coding practices.`,
				icon: "code",
				skills: [
					"React",
					"JavaScript",
					"TypeScript",
					"Node.js",
					"Express.js",
					"MongoDB",
					"REST APIs",
					"Git",
					"Agile Practices",
					"UI/UX Design (Basic)"
				],
				location: "Remote (Delhi, India)",
				isExpanded: true,
			},
		]

	},
	{
		id: "2",
		companyName: "Freelance",
		isCurrentEmployer: false,
		positions: [
			{
				id: "2-1",
				title: "Full Stack Engineer",
				employmentPeriod: "2021 – 2023",
				employmentType: "Contract",
				description:
					`• Delivered a complete **e-commerce platform** on a contract basis, including an **inventory management system**, **order tracking**, and a powerful **admin panel**.\n\n• Designed and developed the **user-facing website** to handle product browsing, cart, and checkout flows with a responsive and intuitive UI.\n\n• Implemented backend services for product management, order lifecycle tracking, and secure transactions.\n\n• Handled **end-to-end development**: architecture, frontend, backend, API integrations, deployment, and post-launch maintenance.`,
				icon: "code",
				skills: [
					"React",
					"Next.js",
					"Node.js",
					"Express.js",
					"MongoDB",
					"REST APIs",
					"VPS",
				],
				location: "Remote",
			},
		],
	},
	{
		id: "3",
		companyName: "Galgotias University",
		companyLogo: "/logos/galgotias-logo.png",
		isCurrentEmployer: false,
		positions: [
			{
				id: "3-1",
				title: "B.Tech in Computer Science Engineering",
				employmentPeriod: "Oct 2021 – 2025",
				employmentType: "Education",
				description: `• Pursuing a Bachelor's degree in Computer Science Engineering with a strong focus on software development, system design, and database management.\n\n• Built a solid foundation in algorithms, data structures, and modern programming practices.\n\n• Engaged in academic projects and collaborative learning, applying theoretical knowledge to practical solutions.\n\n• Consistently performed well with a current aggregate of 8.4 CGPA.`,
				icon: "education",
				skills: [
					"Software Engineering",
					"Database Systems",
					"System Architecture",
					"Algorithms & Data Structures",
					"Programming Practices",
					"Problem Solving"
				],
				location: "Greater Noida, Uttar Pradesh, India",
			},
		],
	}

];

export default function WorkSection() {
	return (
		<section className="w-full ibmsans">
			<h2 className="section-title">Experience</h2>
			<WorkExperience
				className="rounded-lg"
				experiences={WORK_EXPERIENCE}
			/>
		</section>
	);
}
