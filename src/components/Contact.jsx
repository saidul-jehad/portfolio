import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nhxyzn2', 'template_hex7pbu', form.current, 'EJash9mJpSC0ouYnU')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Thanks For contact",
          showConfirmButton: false,
          timer: 1500
        });
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset(); // Reset form after submission
  };


  return (
    <div className=" py-12 m-4 border border-yellow-400 mx-auto" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-8">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-700">Contact Information</h3>
            <p className="mt-4">My Email: <a href="jihadh32978@gmail.com" className="text-blue-600">jihadh32978@gmail.com</a></p>
            <p className="mt-2">LinkedIn: <a target='blank' href="https://www.linkedin.com/in/md-jehad-hasan-back" className="text-blue-600">LinkedIn Profile</a></p>
            <p className="mt-2">Facebook: <a target='blank' href="https://www.facebook.com/saidul.h.jihad" className="text-blue-600">Facebook Profile</a></p>
            <p className="mt-2">GitHub: <a target='blank' href="https://github.com/saidul-jehad" className="text-blue-600">GitHub Profile</a></p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-700">Email</h3>
            <form ref={form} onSubmit={sendEmail} className="mt-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-md font-medium text-gray-300">Name</label>
                <input type="text" name="user_name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-md font-medium text-gray-300">Email</label>
                <input type="email" name="user_email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-md font-medium text-gray-300">Message</label>
                <textarea name="message" id="message" rows="4" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
              </div>

              <div>
                <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;