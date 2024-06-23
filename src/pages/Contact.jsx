import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6735b361-2a6a-42cb-ae44-47e2c94e5890");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Message has been Send",
                showConfirmButton: false,
                timer: 2000
              });
        }
        document.getElementById("myForm").reset();
      };
    return (
        <div className="bg-gray-900 md:h-screen flex items-center justify-center md:pt-0 pt-20 px-4">
            <Helmet>
                <title>SJNR. | Contact</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center container mx-auto">
                <div className="py-6 text-white">
                    <h1 className="text-4xl font-bold">Get in <span className="text-yellow-500">touch</span></h1>
                    <p className="pt-2 pb-4 text-lg font-semibold">{`I'm currenlty available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact any time.`}</p>
                    <div className="space-y-4">
                        <p className="flex items-center text-lg font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Ramgait, Sirajganj Sadar, Sirajgnaj, Bangladesh</span>
                        </p>
                        <p className="flex items-center text-lg font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+880 1798 769363</span>
                        </p>
                        <p className="flex items-center text-lg font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>shofiqul.sujon2021@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
                <div>
                    <div className="p-4 mx-auto max-w-xl  font-[sans-serif]">
                        <h1 className="text-3xl text-white font-extrabold text-center">Contact Me</h1>
                        <form id="myForm" onSubmit={onSubmit} className="mt-8 space-y-4">
                            <input type='text' placeholder='Your Name' name="name"
                                className="w-full rounded-md py-3 px-4 text-white  bg-transparent text-sm border border-yellow-500" />
                            <input type='email' required placeholder='Your Email'name="email"
                                className="w-full rounded-md py-3 px-4 text-white  bg-transparent text-sm border border-yellow-500" />
                            
                            <textarea name="message" placeholder='Message With Subject' rows="6"
                                className="w-full rounded-md px-4 text-white  bg-transparent text-sm pt-3 border border-yellow-500"></textarea>
                            <button type='submit'
                                className="text-white text-lg font-bold bg-yellow-600 hover:bg-yellow-500 duration-300 tracking-wide rounded-md px-4 py-3 w-full">Message Me</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;