import { useState } from 'react'
import CategoryButton from '../../ui/CategoryButton/CategoryButton'
import styles from './styles.module.css'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <nav>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            title={category}
            categoryIndex={index}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </ul>
    </nav>
  )
}
export default Categories
