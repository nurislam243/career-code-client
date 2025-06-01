import { motion } from "motion/react"
import React from 'react';
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[86vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-1">
                <motion.img
                src={team1}
                animate={{y: [100, 150, 100]}}
                transition={{duration: 5, repeat: Infinity}}
                className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                />
                <motion.img
                src={team2}
                animate={{x: [100, 150, 100]}}
                transition={{duration: 10, delay:2, repeat: Infinity}}
                className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                />
            </div>
            <div className="flex-1">
            {/* <motion.h1
            animate={{
                transition: {duration: 2},
                rotate: 180,
                x: 200,
                y: -240
            }}
            className="text-5xl font-bold">Latest Jobs For You</motion.h1> */}
            <motion.h1
            initial={{scale: 0}}
            animate={{scale: 1, transition: {duration:4}}}
            className="text-5xl font-bold">Remote <motion.span animate={
                {
                    color: ['#93dba6', '#ede7be', '#91aed9', '#b07fd4'],
                    transition: {duration: 2, repeat: Infinity}
                }
                }>Jobs</motion.span> For You</motion.h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;