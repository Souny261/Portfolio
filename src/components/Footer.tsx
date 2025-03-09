import { MailIcon, PhoneIcon } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold">Contact Me</h2>
          <div className="mt-2 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <MailIcon className="w-5 h-5 text-gray-300" />
              <p className="text-gray-300">sounymlv@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5 text-gray-300" />
              <p className="text-gray-300">+8562055889758</p>
            </div>
          </div>
          <p className="mt-4 text-gray-300">
            Feel free to reach out for collaborations or job opportunities. I
            look forward to hearing from you.
          </p>
        </div>
        <div className="flex space-x-6">
          <div className="overflow-hidden rounded-full w-20 h-23">
            <img src="/K2208013.jpg" alt="Souny MALYVANH" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} Souny MALYVANH. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>;
};
export default Footer;