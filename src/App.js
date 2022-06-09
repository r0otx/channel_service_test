import React, {useEffect, useId, useMemo, useState} from "react";
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./redux/actions/items";
import MyInput from "./common/MyInput/MyInput";
import MySelect from "./common/MySelect/MySelect";


const App = () => {

    const dispatch = useDispatch();
    const key = useId();
    useEffect(() => {
        dispatch(getData());
    }, []);
    const data = useSelector(state => state.items);

    const [input, setInput] = useState('');
    const [attrSort, setAttrSort] = useState('');
    const [logicSort, setLogicSort] = useState('');

    const sortByAttr = (sort) => {
        setAttrSort(sort);
    }

    const sortByInputAndLogic = (sort) => {
        setLogicSort(sort);
    }

    const sortedItem = useMemo(() => {
        if (attrSort) {
            return [...data.data].sort((a, b) => a[attrSort].toString().localeCompare(b[attrSort].toString()));
        }
        return data.data;
    }, [attrSort, data.data])

    const sortedAndSearchedItem = useMemo(() => {
        if (logicSort === 'contain') {
            if (attrSort === 'name') {
                return sortedItem.filter(el => el.name.toString().toLowerCase().includes(input))
            } else if (attrSort === 'count') {
                return sortedItem.filter(el => el.count.toString().toLowerCase().includes(input))
            } else if (attrSort === 'distance') {
                return sortedItem.filter(el => el.distance.toString().toLowerCase().includes(input))
            }
        } else if (logicSort === 'more') {
            if (attrSort === 'name') {
                return sortedItem;
            } else if (attrSort === 'count') {
                return sortedItem.filter(el => el.count > input)
            } else if (attrSort === 'distance') {
                return sortedItem.filter(el => el.distance > input)
            }
        } else if (logicSort === 'less') {
            if (attrSort === 'name') {
                return sortedItem;
            } else if (attrSort === 'count') {
                return sortedItem.filter(el => el.count < input)
            } else if (attrSort === 'distance') {
                return sortedItem.filter(el => el.distance < input)
            }
        } else if (logicSort === 'equals') {
            if (attrSort === 'name') {
                return sortedItem;
            } else if (attrSort === 'count') {
                return sortedItem.filter(el => el.count == input)
            } else if (attrSort === 'distance') {
                return sortedItem.filter(el => el.distance == input)
            }
        }
        return sortedItem;
    }, [input, sortedItem, logicSort])


    return (
        <main className="main">
            <div className="main__container">
                <div className="main__sort-items">
                    <MySelect
                        className="main__sort-item"
                        value={attrSort}
                        defaultValue={"Сортировать по:"}
                        options={[
                            {value: "name", name: "Названию"},
                            {value: "count", name: "Количеству"},
                            {value: "distance", name: "Расстоянию"},
                        ]}
                        onChange={sortByAttr}
                    />
                    <MySelect
                        className="main__sort-item"
                        value={logicSort}
                        defaultValue={"Сортировать по:"}
                        options={[
                                  {value: "contain", name: "Содержит"},
                                  {value: "more", name: "Больше"},
                                  {value: "less", name: "Меньше"},
                                  {value: "equals", name: "Равно"},
                              ]}
                              onChange={sortByInputAndLogic}
                    />
                    <MyInput
                        onChange={evt => setInput(evt.target.value)}
                        value={input}
                        placeholder={"Фильтровать по"}/>
                </div>
                <table className="main__table table">
                    <tbody className="main__table table__body">
                    <tr className="main__table table__tr">
                        <th className="main__table table__th">Дата</th>
                        <th className="main__table table__th">Название</th>
                        <th className="main__table table__th">Количество</th>
                        <th className="main__table table__th">Расстояние</th>
                    </tr>
                    {data.isLoading
                        ? <tr key={key} className="main__table table__tr">
                            <td className="main__table table__td">Loading...</td>
                        </tr>
                        : sortedAndSearchedItem.map(el =>
                            <tr key={el._id} className="main__table table__tr">
                                <td className="main__table table__td">{el.date}</td>
                                <td className="main__table table__td">{el.name}</td>
                                <td className="main__table table__td">{el.count}</td>
                                <td className="main__table table__td">{el.distance}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default App;
