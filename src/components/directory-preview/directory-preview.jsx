import ProductCard from '../product-card/product-card'

import './directory-preview.styles.scss'

const DirectoryPreview = ({ title, products }) => {
  // const shopTitle = (title) => {
  //   return title
  //     .replace(/_/g, ' ')
  //     .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())
  // }

  return (
    <div className="directory-container">
      <h2 className="directory-title">{title}</h2>
      {/* <h2 className="directory-title">{shopTitle(categoryName)}</h2> */}
      <div className="directory-preview">
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  )
}

export default DirectoryPreview
