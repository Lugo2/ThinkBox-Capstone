import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CategoryPage = (props) => {
    const[philInput, setPhilInput] = useState([]);
    const[foundCatregory, setFoundCategory] = useState([]);
    const[user, token] = useAuth();
    async function handleSubmit(event){
        
    };
    return(
        null
    );
};
export default CategoryPage;