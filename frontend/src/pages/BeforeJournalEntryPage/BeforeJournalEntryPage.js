import React from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";


const BeforeJournalEntryPage = () => {


    return (
        <body>
            <h1>Select author button to choose the quote for your entry, through a specific author</h1>
            <h2>Select category button to choose the quote for your entry, through a specific category</h2>
            <div class = "container">
                <a href="/author">
                    <button type="submit" className="btn btn-brimary mb-2">Define Author</button>
                </a>
            </div>
            <div class = "container">
                <a href="/category">
                    <button type="submit" className="btn btn-brimary mb-2">Define Category</button>
                </a>
            </div>
            <div class = "container">
            <a href="/journal">
              <button type="submit" className="btn btn-brimary mb-2">Start Entry</button>
            </a>
            </div>
        </body>
        //put links in buttons to route to author and category page
    );
};
export default BeforeJournalEntryPage;