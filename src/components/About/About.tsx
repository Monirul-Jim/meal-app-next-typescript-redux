import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-0">
        {/* Left Side: Image */}
        <div className="flex-1 relative">
          <Image
            width={400}
            height={400}
            src="https://plus.unsplash.com/premium_photo-1664640733890-17acaf0529a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mess Meal System"
            className="rounded-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex-1 h-full bg-white shadow-lg rounded-lg p-8">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            আমাদের মেস সিস্টেম সম্পর্কে
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            আমাদের মেস সিস্টেম হল একটি আধুনিক এবং স্বয়ংক্রিয় ব্যবস্থা যা
            **খাবারের ব্যবস্থাপনা**, **খরচ হিসাব** এবং **পুষ্টি সুরক্ষা** সহজে
            পরিচালনা করে। এই সিস্টেমে, আপনি আর **কাগজ কলমের ঝামেলা** পোহাতে হবে
            না।
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            মেস সিস্টেমে সবকিছু স্বয়ংক্রিয়ভাবে হিসাব করা হয়, যেমন প্রতি
            সদস্যের খাবারের খরচ, বাজারের মূলধন, এবং অন্যান্য খরচ। সিস্টেমটি
            স্বয়ংক্রিয়ভাবে **মোট খরচ** এবং **অন্য আউটপুট** হিসাব করে, যাতে
            ম্যানুয়াল হিসাবের প্রয়োজন পড়ে না।
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            শুধু খাবারের ব্যবস্থা নয়, এটি **মেস সদস্যদের জন্য পেমেন্ট** এবং
            **খরচের হিসাব** সব কিছু অটোমেটিক্যালি নির্ধারণ করে, যাতে আপনি পুরো
            প্রক্রিয়া **সহজ** এবং **দ্রুত** চালাতে পারেন। এটি ছাত্রদের জন্য
            সময় বাঁচায় এবং সঠিক হিসাব নিশ্চিত করে।
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            আমাদের মেস সিস্টেমের মাধ্যমে, আপনি ম্যানুয়াল হিসাব রাখার আর কোনো
            প্রয়োজন নেই। বাজারের খরচ, খাওয়া-দাওয়া এবং অন্যান্য খরচ সব কিছু
            **অটোমেটিক্যালি** পরিমাণ হিসাব করে সিস্টেম, যা আপনাকে শুধুমাত্র
            **সম্ভাব্য খরচ** এবং **পেমেন্ট** সম্পর্কে ধারণা দেয়।
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            সিস্টেমটি **সহজ ব্যবস্থাপনা**, **অটোমেটিক হিসাব**, এবং
            **শিক্ষার্থীদের জন্য দক্ষ সমাধান** প্রদান করে, যাতে তারা পড়াশোনায়
            মনোযোগ দিতে পারে এবং কোনো ধরনের বিভ্রান্তির শিকার না হয়।
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
