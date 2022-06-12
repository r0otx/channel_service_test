import React, {useEffect, useState} from "react";
import s from "./Pagination.module.scss";
import MyButton from "../MyButton/MyButton";

const Pagination = ({pagination, setPagination, totalItemsCount}) => {

    const [page, setPage] = useState(1);

    const itemsPerPage = 15;
    const pagesCount = Math.ceil(totalItemsCount / itemsPerPage);

    const lastIndex = page * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const pagesNum = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNum.push([i]);
    }

    useEffect(() => {
        setPagination({...pagination, firstIndex, lastIndex});
    }, [totalItemsCount, page]);

    return (
        <div>
            {parseInt(page) === 1
                ? <div></div>
                : <MyButton className={s.pagination} onClick={() => setPage(parseInt(page) - 1)}>Prev</MyButton>
            }
            {pagesNum.map(el =>
                <MyButton className={s.pagination} key={el} onClick={() => setPage(el)}>{el}</MyButton>
            )}
            {parseInt(pagesCount) === parseInt(page)
                ? <div></div>
                : <MyButton className={s.pagination} onClick={() => setPage(parseInt(page) + 1)}>Next</MyButton>
            }
        </div>
    );
};

export default Pagination;