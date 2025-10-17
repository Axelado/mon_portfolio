interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "C/C++",
    description: "Programmation embarquée et temps réel, développement de systèmes robotiques",
    icon: "tools-fill"
  },
  {
    name: "Python",
    description: "Computer Vision avec OpenCV, développement ROS, interfaces graphiques PyQt",
    icon: "tools-fill"
  },
  {
    name: "FreeRTOS",
    description: "Développement de systèmes temps réel sur microcontrôleurs",
    icon: "time-fill"
  },
  {
    name: "ROS 1/2",
    description: "Développement de systèmes robotiques, SLAM, navigation autonome",
    icon: "tools-fill"
  },
  {
    name: "Systèmes Embarqués",
    description: "ESP32, Arduino, STM32, Raspberry Pi, intégration capteurs/actionneurs",
    icon: "tools-fill"
  },
  {
    name: "OpenCV",
    description: "Computer Vision temps réel, traitement d'images, détection d'objets",
    icon: "tools-fill"
  }
];

export default hardSkills;