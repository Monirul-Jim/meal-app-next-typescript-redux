import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          কেন আমাদের ওয়েবসাইট বেছে নেবেন?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition-all duration-500">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2910/2910766.png"
              alt="Automation Icon"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ১০০% স্বয়ংক্রিয়
            </h3>
            <p className="text-gray-700">
              আমাদের সিস্টেম সম্পূর্ণ স্বয়ংক্রিয়ভাবে আপনার মেসের যাবতীয় কাজ
              পরিচালনা করে। পেন এবং পেপারের ঝামেলা থেকে মুক্তি দিন।
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition-all duration-500">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2490/2490417.png"
              alt="Manager Icon"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ম্যানেজার-মেস ব্যবস্থাপনা
            </h3>
            <p className="text-gray-700">
              একজন ম্যানেজার নিজের মেস তৈরি করতে পারবেন এবং সদস্য যোগ বা সরাতে
              পারবেন। মেস পরিচালনা এখন আরও সহজ।
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition-all duration-500">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2673/2673044.png"
              alt="Member Management Icon"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              সদস্য পরিচালনা
            </h3>
            <p className="text-gray-700">
              একটি সদস্য একই সময়ে একাধিক মেসে যোগ দিতে পারবে না। ম্যানেজার
              সদস্য সরানোর পরে তিনি অন্য মেসে যোগ দিতে পারবেন।
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition-all duration-500">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3534/3534074.png"
              alt="Meal Unit Icon"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              খাওয়ার একক এবং খরচ দেখুন
            </h3>
            <p className="text-gray-700">
              সদস্যরা তাদের খাওয়ার একক, মাসিক খরচ এবং অন্যান্য খরচের তথ্য সহজেই
              দেখতে পারবেন। সব তথ্য এক জায়গায়।
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition-all duration-500">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5455/5455805.png"
              alt="Transparency Icon"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              স্বচ্ছ তথ্য শেয়ারিং
            </h3>
            <p className="text-gray-700">
              ম্যানেজার সদস্যদের সাথে খাবারের হিসাব এবং ব্যয়ের তথ্য শেয়ার করতে
              পারবেন, যা সবাই সহজে দেখতে পারে।
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition-all duration-500">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
              alt="User-Friendly Icon"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ব্যবহারকারী বান্ধব ডিজাইন
            </h3>
            <p className="text-gray-700">
              একটি সহজ এবং আকর্ষণীয় ডিজাইন যা সকল ব্যবহারকারীর জন্য সহজে
              ব্যবহারযোগ্য এবং দ্রুত সমাধান প্রদান করে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
