import classes from './List.module.css'

const List = props => {
    return (
        <div className={classes.list}>
            <div>{props.title}</div>
            <div className={classes.start}>{props.startTime}</div>
        </div>

    );
}
export default List;