import { useState } from 'react'
import { ContactCard } from './ui/contact-card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Mail, Phone, MapPin, Send, Globe, Link } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="relative z-10 py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ContactCard
          title="Let's Build Something"
          description="Have a project in mind? Let's collaborate and create something amazing together. Feel free to reach out!"
          contactInfo={[
            {
              icon: Mail,
              label: 'Email',
              value: 'musashikk99@gmail.com',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '+91 8697845183',
            },
            {
              icon: MapPin,
              label: 'Location',
              value: 'Kolkata, India',
            },
            {
              icon: Globe,
              label: 'GitHub',
              value: 'github.com/Musashi-99',
              href: 'https://github.com/Musashi-99',
            },
            {
              icon: Link,
              label: 'LinkedIn',
              value: 'linkedin.com/in/krrishbuilds',
              href: 'https://linkedin.com/in/krrishbuilds',
            },
          ]}
        >
          <form action="" className="w-full space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input 
                type="text" 
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input 
                type="email" 
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Phone</Label>
              <Input 
                type="tel" 
                placeholder="+91 1234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Message</Label>
              <Textarea 
                placeholder="Let's talk about..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              variant="default"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </ContactCard>
      </div>
    </section>
  )
}
