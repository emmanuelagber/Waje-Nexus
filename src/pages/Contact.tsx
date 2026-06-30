import { useState, type ChangeEvent, type FormEvent } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Input, Textarea } from '@/components/ui/Input';

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left side */}
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-5 leading-tight">
              Get in touch <br />with the team
            </h1>
            <p className="text-neutral-500 leading-relaxed">
              For faster assistance, please use your business email and include a detailed note. We look forward to
              receiving your messages!
            </p>

            <div className="mt-10 lg:mt-auto pt-8 border-t border-neutral-200">
              <div>
                <p className="font-semibold text-neutral-900 mb-3">
                  To make requests for further information, contact us via
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-sm text-neutral-700">Office Address: </span>
                      <a
                        href="https://maps.google.com"
                        className="text-sm text-green-700 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        16a George Omonubi St, Maroko, Lekki 106104, Lagos
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-sm text-neutral-700">Phone Number: </span>
                      <a href="tel:+2349098634779" className="text-sm text-green-700 hover:underline">
                        +2349098634779
                      </a>
                      <span className="text-sm text-neutral-400 mx-1">|</span>
                      <a href="tel:+2348029450398" className="text-sm text-green-700 hover:underline">
                        +2348029450398
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-sm text-neutral-700">Email: </span>
                      <a href="mailto:info@wajesmart.com" className="text-sm text-green-700 hover:underline">
                        info@wajesmart.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16l5 5 11-11" stroke="#04A259" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                <p className="text-neutral-500">
                  Thanks for reaching out. Our team will get back to you within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Full Name"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Subject"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Please clearly describe what you need"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
