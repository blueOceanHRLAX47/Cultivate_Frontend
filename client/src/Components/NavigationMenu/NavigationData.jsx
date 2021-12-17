import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import { FaDumbbell } from "react-icons/fa";

export const NavigationData = [
  {
    title: 'Calendar',
    path: '/',
    icon: <AiIcons.AiOutlineCalendar size={30} />,
    className: 'nav-text'
  },
  {
    title: 'Workout',
    path: '/',
    icon: <FaDumbbell size={30} />,
    className: 'nav-text'
  },
  {
    title: 'Recipes',
    path: '/',
    icon: <GiIcons.GiMeal size={30} />,
    className: 'nav-text'
  },
  {
    title: 'Forum',
    path: '/',
    icon: <IoIcons.IoIosPeople size={30} />,
    className: 'nav-text'
  },
]