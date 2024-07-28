import cl from "../../../Styles/PostFilter.module.css"

export function MySelect({value, options, onChange,defaultValue}){
    return(
        <div className={cl.selectMain}>
            <select className={cl.select}
                value={value}
                onChange={event=> onChange(event.target.value)}
            >
                <option disabled value= "">{defaultValue}</option>
                {options.map(option=>
                    <option key={option.value} value = {option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    )
}