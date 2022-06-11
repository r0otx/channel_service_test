import React, {useEffect} from "react";
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {getData, setSortActionCreator} from "./redux/actions/items";
import Table from "./components/Table";
import TableFilters from "./components/TableFilters";


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    const data = useSelector(state => state.items);

    const setSort = (data) => {
        dispatch(setSortActionCreator(data));
    }

    // const [sort, setSort] = useState({
    //     input: '',
    //     attrSort: '',
    //     logicSort: ''
    // });
    //
    // // const sortedItem = useMemo(() => {
    // //     if (sort.attrSort) {
    // //         return [...data.data].sort((a, b) => a[sort.attrSort].toString().localeCompare(b[sort.attrSort].toString()));
    // //     }
    // //     return data.data;
    // // }, [sort.attrSort, data.data])
    // //
    // // const sortedAndSearchedItem = useMemo(() => {
    // //     if (sort.logicSort === 'contain') {
    // //         if (sort.attrSort === 'name') {
    // //             return sortedItem.filter(el => el.name.toString().toLowerCase().includes(sort.input.toString().toLowerCase()))
    // //         } else if (sort.attrSort === 'count') {
    // //             return sortedItem.filter(el => el.count.toString().toLowerCase().includes(sort.input.toString().toLowerCase()))
    // //         } else if (sort.attrSort === 'distance') {
    // //             return sortedItem.filter(el => el.dist.toString().toLowerCase().includes(sort.input.toString().toLowerCase()))
    // //         }
    // //     } else if (sort.logicSort === 'more') {
    // //         if (sort.attrSort === 'name') {
    // //             return sortedItem;
    // //         } else if (sort.attrSort === 'count') {
    // //             return sortedItem.filter(el => el.count > parseInt(sort.input))
    // //         } else if (sort.attrSort === 'distance') {
    // //             return sortedItem.filter(el => el.dist > parseInt(sort.input))
    // //         }
    // //     } else if (sort.logicSort === 'less') {
    // //         if (sort.attrSort === 'name') {
    // //             return sortedItem;
    // //         } else if (sort.attrSort === 'count') {
    // //             return sortedItem.filter(el => el.count < parseInt(sort.input))
    // //         } else if (sort.attrSort === 'distance') {
    // //             return sortedItem.filter(el => el.dist < parseInt(sort.input))
    // //         }
    // //     } else if (sort.logicSort === 'equals') {
    // //         if (sort.attrSort === 'name') {
    // //             return sortedItem;
    // //         } else if (sort.attrSort === 'count') {
    // //             return sortedItem.filter(el => el.count === parseInt(sort.input))
    // //         } else if (sort.attrSort === 'distance') {
    // //             return sortedItem.filter(el => el.dist === parseInt(sort.input))
    // //         }
    // //     }
    // //     return sortedItem;
    // // }, [sort.input, sortedItem, sort.logicSort])


    return (
        <main className="main">
            <div className="main__container">
                <div className="main__sort-items">
                    <TableFilters sort={data.sort} setSort={setSort}/>
                </div>
                <div className="main__table">
                    <Table data={data} />
                </div>
            </div>
        </main>
    );
}

export default App;
