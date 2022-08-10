import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const activeLink = { opacity: 1 };

export default function WhatCourseGive() {
  return (
    <div className=" px-[30px] py-[60px] bg-[#FBFBFB]">
      <div className="py-[40px] lg:pt-[120px] lg:pb-[90px] text-center bg-[#0F1214] rounded-[24px]">
        <motion.h2
          initial={{ opacity: 0.2, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-[24px] md:text-[54px] mb-[40px] font-bold"
        >
          Что тебе даст прохождение курса?
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0.2, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-[30px] lg:flex justify-center"
        >
          <li className="mb-[20px] lg:mr-[40px]">
            <NavLink
              to="/"
              className="text-[18px] md:text-[24px] font-semibold text-[#FFFFFF] opacity-50"
              style={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              SKILLS UPGRADE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="hardSkills"
              className="text-[18px] md:text-[24px] font-semibold text-[#FFFFFF] opacity-50"
              style={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              STRONG HARD SKILLS
            </NavLink>
          </li>
        </motion.ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
