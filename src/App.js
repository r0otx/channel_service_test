import React, {useEffect, useState} from "react";
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {getData, setSortActionCreator} from "./redux/actions/items";
import Table from "./components/Table";
import TableFilters from "./components/TableFilters";
import Pagination from "./common/Pagination/Pagination";


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    const data = useSelector(state => state.items);

    const [pagination, setPagination] = useState({
        firstIndex: '',
        lastIndex: ''
    });

    const paginationData = data.data.slice(pagination.firstIndex, pagination.lastIndex);

    const setSort = (data) => {
        dispatch(setSortActionCreator(data));
    }

    return (
        <main className="main">
            <div className="main__container">
                <div className="main__sort-items">
                    <TableFilters sort={data.sort} setSort={setSort}/>
                </div>
                <div className="main__table">
                    <Table data={paginationData}/>
                </div>
                <div className="main__pagination">
                    <Pagination
                        totalItemsCount={data.data.length}
                        pagination={pagination}
                        setPagination={setPagination}
                    />
                </div>
            </div>
        </main>
    );
}

export default App;
