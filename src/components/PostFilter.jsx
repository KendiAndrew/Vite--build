import {MySelect} from "./UI/select/MySelect";

export function PostFilter({filter, setFilter}){
    return (
        <div>
            <MySelect 
                value = {filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортування за:"
                options={[
                    {value: 'title', name: 'За назвою'},
                    {value: 'body', name: 'За описом'}
                ]}
            />
        </div>
    )
}