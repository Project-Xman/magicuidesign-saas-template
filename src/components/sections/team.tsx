"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former VP of HR at Fortune 500 company. Passionate about employee financial wellness and workplace innovation.",
    avatar: "SJ",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer with 15+ years in fintech. Expert in secure payment systems and API integrations.",
    avatar: "MC",
    linkedin: "#"
  },
  {
    name: "Jennifer Rodriguez",
    role: "Head of Product",
    bio: "Former Intuit product manager. Specializes in user experience design for financial products.",
    avatar: "JR",
    linkedin: "#"
  },
  {
    name: "David Kim",
    role: "Head of Partnerships",
    bio: "20+ years in B2B sales and partnerships. Previously led enterprise sales at ADP and Paychex.",
    avatar: "DK",
    linkedin: "#"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Leadership Team
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Meet the experienced professionals building the future of workplace financial wellness.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-6">
                {member.avatar}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
              <div className="text-accent font-medium mb-4">{member.role}</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>
              <a
                href={member.linkedin}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>

        {/* Join Us Section */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Join Our Team</h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for improving financial wellness. Join us in building the future of work.
          </p>
          <a
            href="#careers"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View Open Positions
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}