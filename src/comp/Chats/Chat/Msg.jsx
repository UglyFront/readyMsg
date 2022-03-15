import { useSelector } from "react-redux";

function Msg(props) {


if (props.idsend === useSelector(state => state.user.id)) {
    return (
        <div className="msg">
             <p className = "my">
                 <p className="text">{props.text}</p>
             <span>{props.time}</span>
             </p>
        </div>
        )
}

else {
    return (
        <div className="msg_not">
            <p className = "my_not">
                 <p className="text">{props.text}</p>
                <span>{props.time}</span>
            </p>
       </div>
        )
}
  }
  
  export default Msg;