import { getPagesArray } from "../../Utils/pages";

export function Pagination ({totalPages, page, changePage}){
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="changePageButton">
            {pagesArray.map(p=>
            <span
                className={page === p ? 'changePageButtonSpan currentPage' : 'changePageButtonSpan'}
                key={p}
                onClick={()=> changePage(p)}
            >{p}</span>
            )}
        </div>
    )
}