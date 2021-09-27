import Header from './Header';
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchProduct() {
    const [ data, setData ] = useState([]);

    async function search(key) {
        console.warn(key);
        let result = await fetch("http://localhost:8000/api/search/" + key);
        result = await result.json();
        setData(result);
    }

    async function deleteOperation(id) {
        if (
            window.confirm(
                "Are you sure you want to delete product with id = " + id + "?"
            )
        ) {
            let result = await fetch("http://localhost:8000/api/delete/" + id, {
            method: "DELETE",
        });
        result = await result.json();
        console.warn(result);
        search();
        alert("Product has been deleted");
        } else {
            search();
        }
    }

    {/* const [ name, setName ] = useState("");
    const [ file, setFile ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    async function addProduct() {
        console.warn(name, file, price, description);
        const formData = new FormData;
        formData.append('file', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        let result = await fetch("http://localhost:8000/api/addProduct",
        {
            method: "POST",
            body: formData,
        });
        alert("Product Added!");
    } */}

    return(
        <div>
            <Header />
            <br />
            <br />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Product</h1>
                <br />
                <input onChange={(e) => search(e.target.value)} type="text" className="form-control" placeholder="Type here to search for a product" />
                <br />
                <Table striped bordered hover variant="info">
                    <thead>
                        <tr>
                        <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        data.map((item) => (
                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <img style={{ width:100 }} src={"http://localhost:8000/" + item.file_path}></img>
                                    </td>
                                    <td>
                                        <span className="btnDelete" onClick={() => deleteOperation(item.id)}>Delete</span>
                                        <Link to={"update/" + item.id}>
                                            <span className="btnUpdate">Update</span>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </Table>
            </div>
        </div>
    );

            {/* <div className="col-sm-6 offset-sm-3">
                <br />
                <br />
                <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
                <br />
                <input type="file" className="form-control" placeholder="File" onChange={(e)=>setFile(e.target.files[0])}></input>
                <br />
                <input type="text" className="form-control" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}></input>
                <br />
                <textarea type="text" className="form-control" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
                <br />
                <button className="btn btn-dark" onClick={addProduct}>Add Product</button>
            </div> */}
        
}

export default SearchProduct;