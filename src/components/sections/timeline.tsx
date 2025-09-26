"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "FinWage was founded with the mission to provide workers instant access to their earned wages."
  },
  {
    year: "2021",
    title: "First Enterprise Partnership",
    description: "Secured our first major enterprise client and processed over $1M in wage advances."
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $15M Series A to expand our platform and reach more employees nationwide."
  },
  {
    year: "2023",
    title: "100+ Company Milestone",
    description: "Partnered with over 100 companies, serving more than 500,000 employees."
  },
  {
    year: "2024",
    title: "1 Million Employees Served",
    description: "Reached the milestone of serving over 1 million employees across the United States."
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Planning international expansion to bring earned wage access to workers worldwide."
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            From startup to industry leader, see how we've grown to serve millions of workers.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease }}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-secondary mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Center Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}