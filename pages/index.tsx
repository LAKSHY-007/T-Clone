import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle, BiBell, BiBookmark, BiMessageSquareDetail, BiUser, BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdExplore } from 'react-icons/md';
import { Inter } from "next/font/google";
import Feedcard from '@/components/FeedCard';
import { BiMoney } from "react-icons/bi";


const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: "Home", icon: <BiHomeCircle size={28} /> },
  { title: "Explore", icon: <MdExplore size={28} /> },
  { title: "Notifications", icon: <BiBell size={28} /> },
  { title: "Messages", icon: <BiMessageSquareDetail size={28} /> },
  { title: "Bookmarks", icon: <BiBookmark size={28} /> },
  { title: "Twitter Blue", icon: <BiMoney size={28} /> },
  { title: "Profile", icon: <BiUser size={28} /> },
  { title: "More", icon: <BiDotsHorizontalRounded size={28} /> },
  
];

export default function Home() {
  return (
    <div className={`${inter.className} bg-black text-white`}>
      <div className="grid grid-cols-12 h-screen w-screen">
        {/* Left Column */}
        <div className="col-span-3 flex flex-col place-items-baseline justify-start pt-10 pl-8">
          {/* Twitter Logo */}
          <div className=" hover:bg-gray-600 rounded-full p-3 cursor-pointer transition-all duration-300">
            <BsTwitter size={40} color="white" />
          </div>

          {/* Sidebar Menu */}
          <ul className="flex flex-col space-y-6 mt-8">
            {sidebarMenuItems.map((item) => (
              <li key={item.title} className="flex place-items-end space-x-3 text-white text-xl font-semibold hover:text-gray-400 transition-colors duration-300">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>

          {/* Tweet Button */}
          <button className=" start-8 mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full transition-all duration-300">
            Tweet
          </button>
        </div>

        {/* Middle Column */}
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-500">
           <Feedcard/>
        </div>

        {/* Right Column */}
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}









