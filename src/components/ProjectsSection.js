import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    projectUrl: 'https://ecommerce-project.com',
    githubUrl: 'https://github.com/johndoe/ecommerce-project',
  },
  {
    title: 'Task Management App',
    description: 'A React Native mobile app for efficient task management and collaboration.',
    projectUrl: 'https://taskmanager-app.com',
    githubUrl: 'https://github.com/johndoe/task-manager-app',
  },
  {
    title: 'AI-powered Chatbot',
    description: 'An intelligent chatbot built with Python and natural language processing.',
    projectUrl: 'https://ai-chatbot.com',
    githubUrl: 'https://github.com/johndoe/ai-chatbot',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Project image or additional details can be added here */}
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <Button asChild className="flex-1">
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="flex-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub Source
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
