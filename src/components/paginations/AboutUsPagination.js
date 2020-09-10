import React from 'react'
import {
    Pagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap';
import { useLocation, useHistory } from 'react-router-dom';


function AboutUsPagination() {
    
    const location = useLocation();
    const history = useHistory();
    const search = new URLSearchParams(location.search);
    const handleClick = (id)=>{
        search.set("page", id);
        history.replace("/?"+search.toString());
    }

    const createPaginations = ()=>{
        const total = parseInt(localStorage.getItem("totalCount"));
        let arr = [];
        for(let i = 1; i <= Math.round(total/6); i++){
            arr.push(
                <PaginationItem key={i + "-pagination-item"} active={search.get("page") === i.toString()}>
                    <PaginationLink onClick={()=>handleClick(i)} className="HomePaginationLinks">
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        return arr;
    }
    return (
        <div>
            <Pagination aria-label="Page navigation example" className="HomeMainPagination">

                {createPaginations(10)}

            </Pagination>
        </div>
    )
}

export default AboutUsPagination
