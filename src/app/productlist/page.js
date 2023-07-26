async function productList() {
  let data = await fetch("https://dummyjson.com/products");

  data = await data.json();

  return data.products;
}

export default async function product() {
  let products = await productList();
  console.log(products);
  return (
    <div className="prod">
      <h1>Product List</h1>

      <div className="cards-head">
      {products.map((item) => (
        <div className="allcontent">
        
            <img className="productImage" src={item.images[0]}></img>
            <h3>Name:
            {item.title.slice(0,10)}<br/> price:{item.price}
          </h3>
        </div>
      ))}
      </div>
    </div>
  );
}
