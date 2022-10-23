import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const AuthorPage = (props) => {
    const [showAuthor, setShowAuthor] = useState([]);
    const[token] = useAuth();

        const findAuthors = async () => {

            const authors = {
                    method: 'GET',
                    url: 'https://world-of-quotes.p.rapidapi.com/v1/quotes/author',
                    headers: {
                      'X-RapidAPI-Key': 'a458f757b1msh266ef0c36ac49d2p11578bjsnfaff63368b71',
                      'X-RapidAPI-Host': 'world-of-quotes.p.rapidapi.com'
                    }, headers: {
                        Authorization: "Bearer " + token,
                    }
                  };  //authors const definines req type, endpoint, and access key

            try {
                axios.request(authors).then(function (response) {
                    console.log(response.data);
                    setShowAuthor(response.data)
                }); //makes req type, then console logs data
            } catch (error) {
                console.log(error.response.data)
            }
        };
        // findAuthors();
        
    
    return (
    <form onSubmit={findAuthors} className='form-inline'>
        <div className='form-group mx-sm-3 mb-2'>
            <label className="sr-only"><b>SEARCH</b></label>
            <input placeholder='Enter a Game Title:' className="form-control" type='text' value={showAuthor} onChange={(event) => setShowAuthor(event.target.value)} />
        </div>
        <div>
            <button type='submit' className="btn btn-primary mb-2">Submit</button>
        </div>
    </form>
    );
};
export default AuthorPage;

