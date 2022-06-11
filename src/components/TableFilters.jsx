import React from "react";
import MySelect from "../common/MySelect/MySelect";
import MyInput from "../common/MyInput/MyInput";

const TableFilters = ({sort, setSort}) => {
    return (
        <div>
            <MySelect
                value={sort.attrSort}
                defaultValue={"Сортировать по:"}
                options={[
                    {value: "name", name: "Названию"},
                    {value: "count", name: "Количеству"},
                    {value: "distance", name: "Расстоянию"},
                ]}
                onChange={attrSort => setSort({...sort, attrSort})}
            />
            <MySelect
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
                onChange={evt => setSort({...sort, input: evt.target.value})}
                value={sort.input}
                placeholder={"Фильтровать по"}/>
        </div>
    );
};

export default TableFilters;