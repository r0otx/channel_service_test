import React from "react";
import MySelect from "../common/MySelect/MySelect";
import MyInput from "../common/MyInput/MyInput";

const TableFilters = ({sort, setSort}) => {


    return (
        <div>
            <MySelect
                className="main__sort-item"
                value={sort.attrSort}
                defaultValue={"Сортировать по:"}
                options={[
                    {value: "name", name: "Названию"},
                    {value: "count", name: "Количеству"},
                    {value: "dist", name: "Расстоянию"},
                ]}
                onChange={attrSort => setSort({...sort, attrSort})}
            />
            <MySelect
                className="main__sort-item"
                value={sort.logicSort}
                defaultValue={"Сортировать по:"}
                options={[
                    {value: "contain", name: "Содержит"},
                    {value: "more", name: "Больше"},
                    {value: "less", name: "Меньше"},
                    {value: "equals", name: "Равно"},
                ]}
                onChange={logicSort => setSort({...sort, logicSort})}
            />
            <MyInput
                className="main__sort-item"
                onChange={evt => setSort({...sort, searchQuery: evt.target.value})}
                value={sort.searchQuery}
                placeholder={"Фильтровать по"}/>
        </div>
    );
};

export default TableFilters;