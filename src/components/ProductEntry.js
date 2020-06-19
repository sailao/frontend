import React from 'react'

const ProductEntry = () => <form>
<h2>Product Entry</h2>
<div>
    <label htmlFor="productName">Product Name</label>
    <input type="text" id="productName"/>
</div>
<div>
    <label htmlFor="productCategoryName">Product Category Name</label>
    <select name="productCategory" id="productCategory">
        <option value="1">Max</option>
        <option value="1">Myanmar</option>
    </select>
</div>
<div>
    <label htmlFor="image">Image</label>
    <input type="file" id="image"/>
</div>
<div>
    <label htmlFor="price">Price</label>
    <input type="number" id="price"/>
</div>
<div>
    <label htmlFor="description">Description</label>
    <textarea name="description" id="description" cols="30" rows="10"></textarea>
</div>
<button>CREATE</button>
</form>

export default ProductEntry
