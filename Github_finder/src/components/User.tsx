import { UserProps } from "../types/user"
import { MdLocationPin } from "react-icons/md"
import classes from "./User.module.css"

export const User = ({login, avatar_url,followers, following, location}:UserProps) => {
    return(
        <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && (
            <p className={classes.location}>
            <MdLocationPin />
            <span>{location}</span>
        </p>
        )}
    <div className={classes.stats}>
        <div>
            <p>seguidores:</p>
            <p className={classes.number}>{followers}</p>
        </div>
        <div>
            <p>seguindo:</p>
            <p className={classes.number}>{following}</p>
        </div>
    </div>
        <a href={`https://github.com/${login}`}>visite {login}</a>
    </div>
    )
}