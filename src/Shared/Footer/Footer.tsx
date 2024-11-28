const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">About Our Mess</h2>
            <p className="mb-4">
              Our meal system provides fresh, nutritious, and affordable meals
              for students, professionals, and families. We are committed to
              offering a diverse menu that caters to all tastes.
            </p>
            <a href="/about" className="text-blue-400 hover:underline">
              Learn More About Us
            </a>
          </div>

          {/* Menu Highlights */}
          <div>
            <h2 className="text-lg font-bold mb-4">Todays Highlights</h2>
            <ul className="space-y-2">
              <li>🍛 Spicy Butter Chicken with Naan</li>
              <li>🥗 Vegan Buddha Bowl</li>
              <li>🍝 Classic Italian Pasta</li>
              <li>🥤 Refreshing Mint Lemonade</li>
            </ul>
            <a
              href="/menu"
              className="text-blue-400 hover:underline mt-4 inline-block"
            >
              View Full Menu
            </a>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p>
              We’d love to hear from you! Reach out for any queries or feedback:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:messsupport@example.com"
                className="text-blue-400 hover:underline"
              >
                messsupport@example.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p>
              Address: <br />
              123 Meal Street, Food City, FC 45678
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-lg font-bold mb-4">Stay Updated</h2>
            <p className="mb-4">
              Subscribe to our newsletter for menu updates, special offers, and
              more!
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-2 rounded bg-gray-700 text-gray-300 placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-8 w-8" // Increased size for better visibility
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.926 0 0 .926 0 2.025v19.949C0 23.074.926 24 2.025 24h21.95C23.074 24 24 23.074 24 21.974V2.025C24 .926 23.074 0 22.675 0zM12 24h-4.036v-10.265h-3.964V12H8.964V9.75C8.964 7.962 9.684 6.495 11.571 6.495c1.024 0 2.221.169 2.221.169v2.637h-1.25c-1.036 0-1.353.645-1.353 1.305V12h2.644l-.414 1.735H10.5V24h-2.5z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-8 w-8" // Increased size for better visibility
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.643 4.937a10.081 10.081 0 01-2.828.775 4.926 4.926 0 002.164-2.724 10.036 10.036 0 01-3.127 1.184 4.913 4.913 0 00-8.38 4.48A13.947 13.947 0 011.671 3.149a4.918 4.918 0 001.523 6.565A4.897 4.897 0 01.96 9.97c0 .02 0 .041.001.062a4.916 4.916 0 003.946 4.816 4.929 4.929 0 01-2.223.085 4.927 4.927 0 004.59 3.417 9.865 9.865 0 01-6.099 2.104 9.83 9.83 0 01-1.174-.069 13.935 13.935 0 007.548 2.212c9.057 0 14.015-7.501 14.015-13.986 0-.213-.005-.425-.014-.637A10.051 10.051 0 0024 4.57a9.96 9.96 0 01-2.357.647z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-8 w-8" // Increased size for better visibility
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.002 2C5.24 2 4 3.238 4 4.988v14.024C4 20.762 5.24 22 7.002 22h14.024C20.762 22 22 20.762 22 18.012V3.988C22 1.238 20.762 0 18.026 0H7.002zm11.047 3.355c.688 0 1.253.565 1.253 1.253s-.565 1.253-1.253 1.253-1.253-.565-1.253-1.253.565-1.253 1.253-1.253zM12 4.428c3.228 0 5.841 2.607 5.841 5.841 0 3.228-2.613 5.841-5.841 5.841-3.229 0-5.841-2.613-5.841-5.841 0-3.234 2.612-5.841 5.841-5.841zm0 10.33c2.48 0 4.489-2.009 4.489-4.489 0-2.48-2.009-4.489-4.489-4.489s-4.489 2.009-4.489 4.489c0 2.48 2.009 4.489 4.489 4.489z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-8 w-8" // Increased size for better visibility
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.797v-5.54c0-1.323-.025-3.029-1.844-3.029-1.847 0-2.13 1.439-2.130 2.93v5.639H9.313V9.633h3.12v1.787h.045c.346-.654 1.187-1.346 2.443-1.346 2.614 0 3.096 1.725 3.096 3.96v6.418h-.001zM5.335 7.452c-1.22 0-2.166-.992-2.166-2.209s.945-2.209 2.166-2.209c1.221 0 2.166.992 2.166 2.209s-.945 2.209-2.166 2.209zm1.447 13h-2.894v-8.682h2.894v8.682zM12 2.023C6.48 2.023 2 6.479 2 10.985s4.48 8.963 10 8.963c5.52 0 10-4.466 10-8.963s-4.48-8.962-10-8.962z" />
              </svg>
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; 2024 Our Mess Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
