import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);

      const response = await fetch("https://formsubmit.co/hello@clearnode.co.uk", {
        method: "POST",
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within one business day.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try emailing us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 grid gap-4">
      <input type="hidden" name="_subject" value="New Message From Clearnode.co.uk" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <input
        required
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Name"
        className="h-11 px-3 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        required
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="Email"
        className="h-11 px-3 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <textarea
        required
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        placeholder="Project details"
        rows={6}
        className="px-3 py-2 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
