// Skills data with proficiency levels
const skills = [
  {
    name: 'Vue',
    level: 'Advanced',
    percentage: 95
  },
  {
    name: 'Nuxt',
    level: 'Advanced',
    percentage: 90
  },
  {
    name: 'JavaScript',
    level: 'Advanced',
    percentage: 90
  },
  {
    name: 'TypeScript',
    level: 'High',
    percentage: 85
  },
  {
    name: 'PHP',
    level: 'Intermediate',
    percentage: 50
  },
  {
    name: 'Python',
    level: 'High',
    percentage: 65
  },
  {
    name: 'Node.js',
    level: 'Advanced',
    percentage: 80
  },
  {
    name: 'Express.js/Nest.js',
    level: 'High',
    percentage: 80
  },
  {
    name: 'C#',
    level: 'Intermediate',
    percentage: 50
  },
];

// Function to create and render skills
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  
  skills.forEach((skill, index) => {
    // Create skill item
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    
    // Create skill header
    const skillHeader = document.createElement('div');
    skillHeader.className = 'skill-header';
    
    // Create skill name
    const skillName = document.createElement('div');
    skillName.className = 'skill-name';
    skillName.textContent = skill.name;
    
    // Create skill level
    const skillLevel = document.createElement('div');
    skillLevel.className = 'skill-level';
    skillLevel.textContent = skill.level;
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    
    // Create progress value
    const progressValue = document.createElement('div');
    progressValue.className = 'progress-value';
    
    // Set progress value class based on level
    if (skill.level === 'Advanced') {
      progressValue.classList.add('advanced');
    } else if (skill.level === 'High') {
      progressValue.classList.add('expert');
    } else if (skill.level === 'Intermediate') {
      progressValue.classList.add('intermediate');
    } else {
      progressValue.classList.add('beginner');
    }
    
    // Set initial width to 0 for animation
    progressValue.style.width = '0%';
    
    // Append elements
    progressBar.appendChild(progressValue);
    skillHeader.appendChild(skillName);
    skillHeader.appendChild(skillLevel);
    skillItem.appendChild(skillHeader);
    skillItem.appendChild(progressBar);
    skillsContainer.appendChild(skillItem);
    
    // Animation delay for staggering
    setTimeout(() => {
      progressValue.style.width = `${skill.percentage}%`;
    }, 300 + (index * 100));
  });
}

document.addEventListener('DOMContentLoaded', renderSkills);