
export default function Message({winner}){
    let classWin = winner == 'X' ? 'x' : 'o';
    return(
        <div className="win-message show">
            <p>The winner is: <span className={classWin}>{winner}</span></p>
                <p>Play Again ?</p>
            <div>
                <button onClick={() => {
                    let msg = document.querySelector(".win-message.show").classList;
                    msg.remove("show");
                    msg.add("hidden");
                }}>No !</button>
                <button onClick={() => {window.location.reload()}}>Play</button>
            </div>
        </div>
    )
}