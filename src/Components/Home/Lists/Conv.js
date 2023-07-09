const Conv = props => {
    const contests = props.obj;
    const name = contests.map(item => item.title);
    console.log(name)
    return (
        <div>
            {name}
        </div>
    )
}
export default Conv;