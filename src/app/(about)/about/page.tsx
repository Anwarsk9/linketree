import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="https://via.placeholder.com/300"
            alt="Company Logo"
            className="rounded-lg mb-4"
          />
          <p className="text-lg mb-4">
            Welcome to our Linktree page! We're here to make it easy for you to
            connect with us and access all of our important links and
            information.
          </p>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            accumsan nisi id lectus dapibus, quis rutrum libero rutrum. Donec ac
            nisl nec odio hendrerit sagittis. Nulla facilisi. Integer eu metus
            magna.
          </p>
          <p className="text-lg mb-4">
            Nulla varius, est vel aliquam mattis, lorem ligula fringilla sapien,
            ut bibendum orci tortor ut justo. Duis et ligula ut sapien maximus
            blandit nec at odio. Vivamus ac sapien erat. Morbi nec elit a turpis
            tincidunt tempus.
          </p>
          <p className="text-lg mb-4">
            Our team is passionate about providing you with the best experience
            possible. Whether you're looking for our social media profiles,
            contact information, or just want to learn more about what we do,
            you'll find it all right here!
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            accumsan nisi id lectus dapibus, quis rutrum libero rutrum. Donec ac
            nisl nec odio hendrerit sagittis. Nulla facilisi. Integer eu metus
            magna.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg mb-2">Transparency</li>
            <li className="text-lg mb-2">Integrity</li>
            <li className="text-lg mb-2">Innovation</li>
            <li className="text-lg mb-2">Community</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Have questions or feedback? We'd love to hear from you! Feel free to
            reach out to us through any of our social media channels or via
            email.
          </p>
          <p className="text-lg">Follow us on:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-blue-500 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Instagram
            </a>
          </div>
          <p className="text-lg mt-2">Email: contact@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
