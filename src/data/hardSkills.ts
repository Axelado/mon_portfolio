interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "C++",
    description: "Programmation embarquée et temps réel, développement de systèmes robotiques",
    icon: "tools-fill"
  },
  {
    name: "Python",
    description: "Computer Vision avec OpenCV, Machine Learning, développement ROS",
    icon: "tools-fill"
  },
  {
    name: "ROS 2",
    description: "Développement de systèmes robotiques, SLAM, navigation autonome, Gazebo",
    icon: "tools-fill"
  },
  {
    name: "Vision & IA",
    description: "OpenCV, PCL, TensorFlow, PyTorch, YOLO, traitement d'images temps réel",
    icon: "tools-fill"
  },
  {
    name: "Linux & DevOps",
    description: "Docker, Git, CI/CD, WebSocket, TCP/IP, systèmes embarqués",
    icon: "tools-fill"
  },
  {
    name: "Intégration Système",
    description: "Tests V&V, documentation technique, Agile/Scrum, architectures distribuées",
    icon: "tools-fill"
  }
];

export default hardSkills;