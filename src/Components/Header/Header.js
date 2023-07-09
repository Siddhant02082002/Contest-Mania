import classes from './Header.module.css'
const Header = props => {
    return(
    <div className={classes.header}>
        <h2>All</h2>
        <h2>CodeForces</h2>
        <h2>AtCoders</h2>
        <h2>CodeChef</h2>
        <h2>HackerRank</h2>
        <h2>LeetCode</h2>
        <h2>HackerEarth</h2>
    </div>)
}
export default Header;