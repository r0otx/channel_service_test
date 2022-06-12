import React from "react";
import {useId} from "react";

const Table = ({data, sortedAndSearchedItem}) => {

    const key = useId();
    return (
        <table className="table">
            <tbody className="table__body">
            <tr className="table__tr">
                <th className="table__th">Дата</th>
                <th className="table__th">Название</th>
                <th className="table__th">Количество</th>
                <th className="table__th">Расстояние</th>
            </tr>
            {data.isLoading
                ? <tr key={key} className="table__tr">
                    <td className="table__td">Loading...</td>
                </tr>
                : data.map(el =>
                    <tr key={el.id} className="table__tr">
                        <td className="table__td">{el.date}</td>
                        <td className="table__td">{el.name}</td>
                        <td className="table__td">{el.count}</td>
                        <td className="table__td">{el.dist}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;