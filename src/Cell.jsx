

export default function Cell({value, handleClick}){
    if(value == 'X'){
        return (
            <button className="cell x" onClick={handleClick}> {value} </button>
        )
    }else{
        return (
            <button className="cell o" onClick={handleClick}> {value} </button>
        )
    };
}