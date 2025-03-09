import { Mail, Github, MessageCircle, Linkedin, FileDownIcon } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-10">
                    If you have any questions, need help with a project, or just want to say hi, feel free to reach out to me.
                </p>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
                    <a
                        href="mailto:sounymlv@gmail.com"
                        className="flex flex-col items-center p-4 bg-white shadow-md rounded-xl transition hover:shadow-lg hover:bg-blue-600 hover:text-white"
                    >
                        <Mail size={32} />
                        <span className="mt-2 font-semibold">Email</span>
                    </a>
                    <a
                        href="https://github.com/Souny261"
                        className="flex flex-col items-center p-4 bg-white shadow-md rounded-xl transition hover:shadow-lg hover:bg-black hover:text-white"
                    >
                        <Github size={32} />
                        <span className="mt-2 font-semibold">GitHub</span>
                    </a>
                    <a
                        href="https://wa.me/8562055889758"
                        className="flex flex-col items-center p-4 bg-white shadow-md rounded-xl transition hover:shadow-lg hover:bg-green-600 hover:text-white"
                    >
                        <MessageCircle size={32} />
                        <span className="mt-2 font-semibold">WhatsApp</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/souny-mlv-1a98702bb"
                        className="flex flex-col items-center p-4 bg-white shadow-md rounded-xl transition hover:shadow-lg hover:bg-blue-700 hover:text-white"
                    >
                        <Linkedin size={32} />
                        <span className="mt-2 font-semibold">LinkedIn</span>
                    </a>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1zvOjNO-vr_hhEJ_mGVxRG4ibkRqXTHIF" // Update this with the actual path to the CV
                        className="flex flex-col items-center p-4 bg-white shadow-md rounded-xl transition hover:shadow-lg hover:bg-gray-800 hover:text-white"
                        download
                    >
                        <FileDownIcon size={32} />
                        <span className="mt-2 font-semibold">Download CV</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
