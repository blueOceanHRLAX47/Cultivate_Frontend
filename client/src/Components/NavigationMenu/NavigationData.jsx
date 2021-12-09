import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const NavigationData = [
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <AiIcons.AiOutlineCalendar />,
    className: 'nav-text'
  },
  {
    title: 'Workout',
    path: '/workout',
    icon: <AiIcons.AiOutlineCalendar />,
    className: 'nav-text'
  },
  {
    title: 'Recipes',
    path: '/recipes',
    icon: <GiIcons.GiMeal />,
    className: 'nav-text'
  },
  {
    title: 'Forum',
    path: '/forum',
    icon: <IoIcons.IoIosPeople />,
    className: 'nav-text'
  },
]