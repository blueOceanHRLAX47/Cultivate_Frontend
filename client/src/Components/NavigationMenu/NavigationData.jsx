import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const NavigationData = [
  {
    title: 'Calendar',
    path: '/',
    icon: <AiIcons.AiOutlineCalendar />,
    className: 'nav-text'
  },
  {
    title: 'Workout',
    path: '/',
    icon: <AiIcons.AiOutlineCalendar />,
    className: 'nav-text'
  },
  {
    title: 'Recipes',
    path: '/',
    icon: <GiIcons.GiMeal />,
    className: 'nav-text'
  },
  {
    title: 'Forum',
    path: '/',
    icon: <IoIcons.IoIosPeople />,
    className: 'nav-text'
  },
]