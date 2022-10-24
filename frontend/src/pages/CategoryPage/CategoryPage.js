import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CategoryPage = (props) => {
    const [showCategory, setShowCategory] = useState([]);
    const [token] = useAuth();

    const findCategories = async () => {

        const categories = {
            method: 'GET',
            url: 'https://world-of-quotes.p.rapidapi.com/v1/quotes/category',
            headers: {
              'X-RapidAPI-Key': 'a458f757b1msh266ef0c36ac49d2p11578bjsnfaff63368b71',
              'X-RapidAPI-Host': 'world-of-quotes.p.rapidapi.com'
            }, headers: {
                Authorization: "Bearer " + token,
            }
        };
        try {
            axios.request(categories).then(function (response) {
                console.log(response.data);
                setShowCategory(response.data)
            }).catch(function (error) {
                console.error(error);
            });
            } catch(error) {
                console.log(error.response.data)
            }
    };
    


    return(
        <form onSubmit={findCategories} className='form-inline'>
        <div className='form-group mx-sm-3 mb-2'>
            <label className="sr-only"><b>SEARCH</b></label>
            <input placeholder='Search Category' className="form-control" type='text' value={showCategory} onChange={(event) => setShowCategory(event.target.value)} />
        </div>
        <div>
            <button type='submit' className="btn btn-primary mb-2">Submit</button>
        </div>

    </form>
    ); 
};
export default CategoryPage;