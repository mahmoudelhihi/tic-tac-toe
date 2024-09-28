

export default function Cell({value, handleClick}){
    return (
        <button className="cell" onClick={handleClick}> {value} </button>
    );
}