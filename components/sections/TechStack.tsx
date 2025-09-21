"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

// Map of technology names to icon URLs in public/tech_icons
const techIconMap: Record<string, string> = {
  "React.js": "/tech_icons/reactjs.svg",
  "React Native": "/tech_icons/reactjs.svg",
  "TypeScript": "/tech_icons/typescript.png",
  "JavaScript": "/tech_icons/javascript.svg",
  "HTML5": "/tech_icons/html5.svg",
  "Tailwind CSS": "/tech_icons/tailwindcss.png",
  "Bootstrap CSS": "/tech_icons/bootstrap.png",
  "Redux": "/tech_icons/redux.png",
  "Redux Thunk": "/tech_icons/redux-thunk.png",
  "jQuery": "/tech_icons/jQuery.png",
  "Directus": "/tech_icons/directus.png",
  "Strapi": "/tech_icons/strapi.png",
  "Node.js": "/tech_icons/nodejs.png",
  "Nest.js": "/tech_icons/nestjs.png",
  "Express.js": "/tech_icons/expressjs.png",
  "Fastify": "/tech_icons/fastify.png",
  "AdonisJS": "/tech_icons/adonisjs.png",
  "PHP": "/tech_icons/php.png",
  "CodeIgniter": "/tech_icons/codeignitor.png",
  "CakePHP": "/tech_icons/cakephp.png",
  "Supabase": "/tech_icons/supabase.png",
  "Supabase Core": "/tech_icons/supabase.png",
  "SpringBoot": "/tech_icons/springboot.png",
  "MySQL": "/tech_icons/mysql.png",
  "MongoDB": "/tech_icons/mongodb.png",
  "Prisma": "/tech_icons/prisma.png",
  "TypeORM": "/tech_icons/typeorm.png",
  "Realm": "/tech_icons/realm.png",
  "Docker": "/tech_icons/docker.png",
  "PM2": "/tech_icons/pm2.png",
  "Nginx": "/tech_icons/nginx.png",
  "Apache 2": "/tech_icons/apache.png",
  "Node-RED": "/tech_icons/node-red.png",
  "MQTT": "/tech_icons/mqtt.png",
  "Custom SAP API": "/tech_icons/sap.png",
  "Embedded Systems": "/tech_icons/embedded-systems.svg" // remove if no icon available
}

export function TechStackSection() {
  const techCategories = [
    {
      id: "frontend",
      title: "Frontend",
      color: "from-blue-500/10 to-cyan-500/10",
      technologies: [
        { name: "React.js", category: "Framework" },
        { name: "React Native", category: "Mobile" },
        { name: "TypeScript", category: "Language" },
        { name: "JavaScript", category: "Language" },
        { name: "HTML5", category: "Markup" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Bootstrap CSS", category: "Styling" },
        { name: "Redux", category: "State Management" },
        { name: "Redux Thunk", category: "Middleware" },
        { name: "jQuery", category: "Library" },
        { name: "Directus", category: "CMS" },
        { name: "Strapi", category: "CMS" },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      color: "from-green-500/10 to-emerald-500/10",
      technologies: [
        { name: "Node.js", category: "Runtime" },
        { name: "Nest.js", category: "Framework" },
        { name: "Express.js", category: "Framework" },
        { name: "Fastify", category: "Framework" },
        { name: "AdonisJS", category: "Framework" },
        { name: "PHP", category: "Language" },
        { name: "CodeIgniter", category: "PHP Framework" },
        { name: "CakePHP", category: "PHP Framework" },
        { name: "Supabase", category: "Backend Service" },
        { name: "SpringBoot", category: "Java Framework" },
      ],
    },
    {
      id: "database",
      title: "Database & ORM",
      color: "from-purple-500/10 to-pink-500/10",
      technologies: [
        { name: "MySQL", category: "SQL Database" },
        { name: "MongoDB", category: "NoSQL Database" },
        { name: "Supabase Core", category: "Database Service" },
        { name: "Prisma", category: "ORM" },
        { name: "TypeORM", category: "ORM" },
        { name: "Realm", category: "Mobile Database" },
      ],
    },
    {
      id: "infrastructure",
      title: "Infrastructure & IoT",
      color: "from-orange-500/10 to-red-500/10",
      technologies: [
        { name: "Docker", category: "Containerization" },
        { name: "PM2", category: "Process Manager" },
        { name: "Nginx", category: "Web Server" },
        { name: "Apache 2", category: "Web Server" },
        { name: "Node-RED", category: "IoT Development" },
        { name: "MQTT", category: "IoT Protocol" },
        { name: "Custom SAP API", category: "Integration" },
        { name: "Embedded Systems", category: "Hardware" },
      ],
    },
  ]

  return (
    <section id="technology" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Technology Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Our Robust
            <br />
            <span className="text-primary">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            MOCOIT Labs leverages a comprehensive and modern technology stack to build scalable, secure, and
            high-performing digital solutions across various domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto p-1 bg-muted/50">
              {techCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="hidden inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {techCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.32, delay: index * 0.05 }}
                    >
                      <Card className="group hover:shadow-lg transition-all duration-300 border bg-background/80 rounded-2xl h-full shadow-sm">
                        <CardContent className="p-5 text-center">
                          <div
                            className={`w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300`}
                          >
                            <Image
                              src={techIconMap[tech.name] || "/tech_icons/MOCOIT_Logo.png"}
                              alt={tech.name}
                              width={36}
                              height={36}
                              className="w-9 h-9 object-contain mx-auto bg-card"
                            />
                          </div>
                          <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                          <p className="text-xs text-muted-foreground">{tech.category}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Industrial OT/IT
                <span className="text-primary"> Integration</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Seamlessly integrating operational technology (OT) with information technology (IT) via web, Android,
                and iOS front ends for real-time decision-making.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">Data Conversion (OT to MQTT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">Real-Time Data Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">Condition Monitoring Systems</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-background/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">OT</div>
                <div className="text-sm text-muted-foreground">Operational Technology</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">IT</div>
                <div className="text-sm text-muted-foreground">Information Technology</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">IoT</div>
                <div className="text-sm text-muted-foreground">Internet of Things</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">AI</div>
                <div className="text-sm text-muted-foreground">Artificial Intelligence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
