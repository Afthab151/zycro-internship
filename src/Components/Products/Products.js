import React, { useEffect, useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
function Products() {

    const [addedProducts, setAddedProducts] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showAddProducts, setShowAddProducts] = useState(false);
    const [showForms, setShowForms] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleAddProducts = () => {
        setShowAddProducts(true);
    };

    const showForm = () => {
        setShowAddProducts(false)
        setShowForms(true)
    }

    const handleAddProductChanges = (e) => {
        e.preventDefault();
        const pnameInput = document.getElementById('pname');
        const categoryInput = document.getElementById('category');
        const priceInput = document.getElementById('price');
        const mrpInput = document.getElementById('mrp');

        if (editingProduct) {
            const updatedProducts = addedProducts.map((items) =>
                items.id === editingProduct.id
                    ? {
                        ...items,
                        pname: pnameInput.value,
                        category: categoryInput.value,
                        price: priceInput.value,
                        mrp: mrpInput.value
                    }
                    : items
            );
            setAddedProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(addedProducts));
            setEditingProduct(null);
        } else {
            const newProduct = {
                id: Date.now(),
                pname: pnameInput.value,
                category: categoryInput.value,
                price: priceInput.value,
                mrp: mrpInput.value
            };
            const updatedProducts = [...addedProducts, newProduct];
            setAddedProducts(updatedProducts);

            localStorage.setItem('products', JSON.stringify(addedProducts));
        }
        pnameInput.value = '';
        categoryInput.value = '';
        priceInput.value = '';
        mrpInput.value = '';
        showForm();
    };

    const handleDelete = (id) => {
        const updatedProducts = addedProducts.filter((obj) => obj.id !== id);
        setAddedProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const handleEdit = (id) => {
        const productToEdit = addedProducts.find((items) => items.id === id);
        setEditingProduct(productToEdit);
        setShowAddProducts(true);
    };

    // const handleInputChange = (field, value) => {
    //     setEditingProduct((prevProduct) => ({
    //         ...prevProduct,
    //         [field]: value,
    //     }));
    // };

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setAddedProducts(storedProducts);
        }
    }, []);

    console.log(addedProducts)

    return (
        <div className='main_container4'>
            <div className="left_container">
                <div className='side_logo'>
                    <img className='logo_img' src="/Images/logo.svg" alt="" />
                </div>
                <div className="side_container">
                    <div className='first_part'>
                        <Link to='/dashboard' className='a_link1'>
                            <div className='dash'>
                                <div className='inside_dash'>

                                    <img className='home' src="/Images/home - filled.svg" alt="" />
                                    <label className='label_home' htmlFor="">Dashboard</label>
                                </div>
                            </div>
                        </Link>
                        <div className='contact' >
                            <div className='inside_contact'>
                                <img className='user' src="/Images/user-square.svg" alt="" />
                                <label className='label_user' htmlFor="">Contacts</label>
                                <img className='icon5' src="/Images/chevron-down.svg" alt="" onClick={toggleDropdown} />
                            </div>
                        </div>


                        {showDropdown && (
                            <div className='dropdown_content'>
                                <div className='lists'>

                                    <div className='inside_lists'>
                                        <img className='list_filled' src="/Images/List-filled.svg" alt="" />
                                        <label className='label_user' htmlFor="">Lists</label>

                                    </div>
                                </div>
                                <div className='contents'>

                                    <div className='inside_contents'>
                                        <img className='chart_pie' src="/Images/chart-pie.svg" alt="" />
                                        <label className='label_user' htmlFor="">Contents</label>

                                    </div>
                                </div>
                            </div>
                        )}


                        <div className="formz">
                            <div className='inside_formz'>

                                <img className='for' src="/Images/Forms-2-rec.svg" alt="" />
                                <label className='label_formz' htmlFor="">Forms</label>

                            </div>
                        </div>
                        <div className='landing_page'>
                            <div className="inside_landing">
                                <img className='file' src="/Images/file.svg" alt="" />
                                <label className='label_file' htmlFor="">Landing Page</label>
                            </div>
                        </div>
                        <div className="camp">
                            <div className='inside_camp'>
                                <img className='phone' src="/Images/Megaphone.svg" alt="" />
                                <label className='label_phone' htmlFor="">Campaign</label>
                            </div>
                        </div>
                    </div>
                    <div className='second_part'>
                        <div className="settings">
                            <div className='inside_settings'>
                                <img className='vector' src="/Images/Vector.svg" alt="" />
                                <label className='label_vector' htmlFor="">Settings</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='side_profile'>
                    <div className='all_profile'>
                        <div className="avatar">
                            <img src="/Images/box.svg" alt="" />
                        </div>
                        <div className="profile_name">
                            <p className='profile_text'>
                                Corey Bergson
                            </p>
                        </div>
                        <div className='profile_icon'>
                            <img src="/Images/chevron-right.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='right_container4'>
                <div className="head">
                    <h1 className='heading3'>Products</h1>
                </div>


                {showAddProducts ? (

                    <div className="right_down4">
                        <div className='user_lists1'>
                            <div className="under_list1">
                                {!editingProduct ? (

                                    <p className="parad7">New Products</p>
                                ) : (
                                    <p className="parad7">Edit Products</p>
                                )
                                }
                            </div>
                            <div className="domain_form">
                                <form onSubmit={handleAddProductChanges}>
                                    <input
                                        type="text"

                                        id="pname"
                                        placeholder="Enter product name"
                                        defaultValue={editingProduct ? editingProduct.pname : ''}
                                        required
                                    />
                                    <input
                                        type="text"

                                        id="category"
                                        placeholder="Enter category"

                                        defaultValue={editingProduct ? editingProduct.category : ''}
                                        required
                                    />
                                    <input
                                        type="number"
                                        inputMode="decimal"
                                        min="0"

                                        id="price"

                                        defaultValue={editingProduct ? editingProduct.price : ''}
                                        placeholder="Enter price"
                                        required
                                    />
                                    <input
                                        type="number"
                                        inputMode="decimal"
                                        min="0"

                                        id="mrp"

                                        defaultValue={editingProduct ? editingProduct.mrp : ''}
                                        placeholder="Enter MRP"
                                        required
                                    />

                                    <input className='add_products'
                                        type="submit"
                                        value={editingProduct ? 'Update Products' : 'Add Products'} />
                                </form>
                            </div>
                        </div>
                    </div>

                ) : (

                    <div className='right_down4'>
                        <div className="user_lists">
                            <div className="under_list">
                                <p className="parad7">Products Lists</p>
                                <button className='btn' onClick={handleAddProducts}>
                                    <img className='btn_img' src="/Images/plus.svg" alt="" />
                                    Add Products
                                </button>
                            </div>
                            <div className='lists_content'>
                                <table>
                                    <tr className='head_row'>
                                        <td>Products</td>
                                        <td>Category</td>
                                        <td>Actual Price(₹)</td>
                                        <td>MRP(₹)</td>
                                        <td>Actions</td>
                                    </tr>

                                    {addedProducts.map((items, index) => (
                                        <tr key={index}>
                                            <td>{items.pname}</td>
                                            <td>{items.category}</td>
                                            <td>{items.price}</td>
                                            <td>{items.mrp}</td>
                                            <td>
                                                <img className='edit'
                                                    src="/Images/edit-3.svg"
                                                    alt=""
                                                    onClick={() => handleEdit(items.id)}
                                                />
                                                <img className='delete'
                                                    src="/Images/trash.svg"
                                                    alt=""
                                                    onClick={() => handleDelete(items.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}

export default Products
