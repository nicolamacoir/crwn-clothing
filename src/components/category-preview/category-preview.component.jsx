import React from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

import {CategoryPreviewContainer, CategoryTitle, Preview} from './category-preview.style'

const CategoryPreview = ( { title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryTitle>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </CategoryTitle>
      <Preview>
        {
          products
            .filter( (_, idx) => idx < 4)
            .map( (product) => 
              <ProductCard key={product.id} product={product} />
            )
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview