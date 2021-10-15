import React from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ComputerIcon from '@mui/icons-material/Computer';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';

const Categories = [
    {
      category: 'Space and Science',
      url: '/category/science-and-space',
      tagName: 'science-and-space',
      icon: <ScienceIcon />,
    },
    {
      category: 'Computer Science',
      url: '/category/computer-science',
      tagName:'computer-science',
      icon: <CodeIcon />,
    },
    {
      category: 'React and UI',
      url: '/category/react-and-ui',
      tagName: 'react-and-ui',
      icon: <ComputerIcon />,
    },
    {
      category: 'Engineering',
      url: '/category/engineering',
      tagName:'engineering',
      icon: <EngineeringIcon />,
    },
  ];

export default Categories;