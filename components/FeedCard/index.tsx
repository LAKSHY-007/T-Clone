import React from 'react';
import Image from 'next/image';
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

const FeedCard: React.FC = () => {
    return (
        <div className="border-b border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-4">
                {/* User Image */}
                <div className="col-span-1">
                    <Image 
                        src="https://avatars.githubusercontent.com/u/55599878?v=4" 
                        alt="user-image" 
                        height={50} 
                        width={50} 
                        className="rounded-full"
                    />
                </div>
                
                {/* Content */}
                <div className="col-span-11">
                    <div className="flex items-center justify-between">
                        <h5 className="font-bold text-white text-lg">Lakshya Pendharkar</h5>
                        <span className="text-gray-400 text-sm">@lakshya_p · 2h</span>
                    </div>
                    
                    <p className="text-white mt-2">
                        Hey, it’s me, a learner from Amity University living my best life with a smile. Just killing it.
                    </p>
                    
                    {/* Interactions */}
                    <div className="flex justify-between mt-5 text-gray-500">
                        <div className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
                            <BiMessageRounded size={20} />
                            <span>45</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-green-500 transition-colors duration-200">
                            <AiOutlineRetweet size={20} />
                            <span>12</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-red-500 transition-colors duration-200">
                            <AiOutlineHeart size={20} />
                            <span>128</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
                            <BiUpload size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;
