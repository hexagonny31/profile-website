import styles from '../css/Button.module.css'
import { Link } from 'react-router-dom';

function Button({link, className = "", toTarget = false, label, i, showIcon = true, ext = true, type}){
    const combinedClassName = [styles.btn, className && styles[className]].filter(Boolean).join(" ");

    if(type === "text"){
        if(ext){
            return(
                <a draggable="false" href={link} className={combinedClassName} {...(toTarget ? {target: "_blank", rel: "noopener noreferrer"} : {})}>
                    {showIcon && <i className={i}/>} {label}
                </a>
            );
        }

        return(
            <Link draggable="false" to={link} className={combinedClassName}>
                {showIcon && <i className={i}/>} {label}
            </Link>
        );
    }

    if(type === "ico"){
        if(link !== ""){
            return(
                <Link draggable="false" to={link} className={combinedClassName}>
                    {showIcon && <i className={i}/>}
                </Link>
            );
        }

        return(
            <div className={combinedClassName}>
                {showIcon && <i className={i}/>}
            </div>
        );
    }
}
export default Button