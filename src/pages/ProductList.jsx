import React from 'react';
import { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import ProductService from '../services/productService';
export default function ProductList() {
  /*
  biz burada hook kullnaıyoruz. ne demek 
  ben products diye bi data kullanacağım diyorum bu sayfada
  ve setProducts ile bu datayı değiştireceğim diyorum
  default değer olarak da karşıda boş bi array olduğunu belirtiyoruz 
  */
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    let productService = new ProductService();
    productService.getProcuct().then
    (result=>setProducts(result.data.data)
    )
  },[])
// boş arrayi sürekli istek atmaması için yazdık
// use effect ile verilere erişimi sağladık
//değişim durumlarında kullanılan yeri renderlıyor
// sayfa yüklenince bunu çalıştırıyor
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ürün adı</th>
            <th>birim fiyat</th>
            <th>stok adet</th>
            <th>açıklama</th>
            <th>kategori</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(products => (
              <tr key={products.id}>
                <td>{products.productName}</td>
                <td>{products.unitPrice}</td>
                <td>{products.unitInStocks}</td>
                <td>{products.quantityPerUnit}</td>
                <td>{products.category.name}</td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  );
}
