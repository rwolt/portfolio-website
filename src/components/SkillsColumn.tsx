import styles from '../components/SkillsColumn.module.css';
import {Icon} from 'astro-icon';

type SkillsProps = {
  skills: [string, string][]
}

const SkillsColumn = ({skills}: SkillsProps)  => {
  return (
    <ul>
      {skills.map(([skillName, iconName], index) => (
        <div className={styles.skillContainer}>
        <img src={`/icons/${iconName}.svg`} alt={`${skillName} logo`} />
        <li key={index}>{skillName}</li>
        </div>
      ))}
    </ul>
  )
};

export default SkillsColumn;