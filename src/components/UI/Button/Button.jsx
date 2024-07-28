import classes from './Button.module.css'

export function MyButton({...props}) {
    return(
        <button {...props} className={classes.myBtn}>
        </button>
    )
}