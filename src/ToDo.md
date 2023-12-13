1.  Find the vertical images and place them into the img1 slot. 165 x 165 √
2.  Fix the tags so they all have a dash √
3.  Figure out why they aren't loading on the homepage √
4.  Map through and do a conditional that renders the price based on the size in the datababase √
5.  That needs to be rendered for teh product card like $22 - $45 (the first and the last object). √
6.  Fix styling.
7.  Then once all of that is done we jump into the product page.
8.  Finish Checkout page styles.
9.  Shop page is not responsive. √

                                          SHOP
                                          /  \
                              CATEGORY PAGE
                                 /      \

<div className="shop-container">
        <Routes>
          {/* this is the 4 items & header link*/}
          <Route index element={<CategoriesPreview />} />
          {/* this directs where the header link will go  */}
          <Route path=":category" element={<CategoryPage />} />
          {/* <Route path=":all-products" element={<AllProducts />} /> */}
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="all-products" element={<AllProducts />} />

          {/* <Route path="/categories/:categoryTitle" element={<CategoryPage />} /> */}
        </Routes>
      </div>
