import React, { useState } from "react";

const Product = () => {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productDesc, setproductDesc] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [allProduct, setallProduct] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [productImage, setProductImage] = useState("")

  // const updateProduct = () =>{
  // alert('i have click')
  // console.log(e.target.value)
  // setproductName(e.target.value)

  // }

  // const clearInputs = () => {
  //   setproductName("");
  //   setproductPrice("");
  //   setproductDesc("");
  //   setproductCategory("");
  //   setEditIndex(null);
  // };

  const addProduct = () => {
    let product = { productName, productPrice, productDesc, productCategory, productImage };

    if (editIndex === null) {
      setallProduct([...allProduct, product]);
    } else {
      const updatedProducts = [...allProduct];
      updatedProducts[editIndex] = product;
      setallProduct(updatedProducts);
      setEditIndex(null);
    }
    setproductName("");
    setproductPrice("");
    setproductDesc("");
    setproductCategory("");

    // let newProduct = { ...product, productTime: "18:00" };

    // console.log(allProduct);
  };

  const deleteProduct = (index) => {
    let newProducts = [...allProduct];
    newProducts.splice(index, 1);
    setallProduct(newProducts);
    // allProduct.splice(index, 1)

    if (editIndex == index) {
      setEditIndex(null);
      setproductName("");
      setproductPrice("");
      setproductDesc("");
      setproductCategory("");
    }
  };

  const editProduct = (index) =>{
    const product = allProduct[index]
    setproductName(product.productName)
    setproductPrice(product.productPrice)
    setproductDesc(product.productDesc)
    setproductCategory(product.productCategory)
    setEditIndex(index)
  }
  return (
    <>
      <h1>Create Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setproductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Price"
        onChange={(e) => setproductPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Description"
        onChange={(e) => setproductDesc(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Category"
        onChange={(e) => setproductCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Category"
        onChange={(e) => setProductImage(e.target.value)}
      />
      <button onClick={() => addProduct()}>Create product</button>
      {/* <button onClick={updateProduct}>Create product</button> */}
      <hr />

      <div>
        {allProduct.length === 0 ? (
          <div>
            <h1>no products yet</h1>
          </div>
        ) : (
          allProduct.map((product, index) => (
            <div key={index}>
              <h1>{product.productName}</h1>
              <h1>{product.productPrice}</h1>
              <h1>{product.productDesc}</h1>
              <h1>{product.productCategory}</h1>
              <img src={product.productImage} alt="" />
              <button onClick={() => deleteProduct(index)}>Delete</button>
              <button onClick={() => editProduct(index)}>Edit</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Product;
