import "./category-menu.scss"
import CategoryItem from "./category-item/category-item";

const CategoryMenu = ({Categories}) => {
  return (
      <div className='categories-container'>
        {Categories.map((category) => (
            <CategoryItem key={category.id} category={category} />           
        ))}
      </div>
  );
};

export default CategoryMenu ;