import React from "react";
import {useId} from "react";

const Table = ({data, sortedAndSearchedItem}) => {
    const key = useId();
    return (
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
    );
};

export default Table;