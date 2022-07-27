
function Square({value, onClick}){

    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

export default Square


//012
//345
//678

//let x = [4, 1, 3, ];
//let o = [0, 7, 5, ];
//win conditions
//verticle +/- 3
    //middle has to have value 
//horizontal +/- 1
//left to right across +/- 4
//right to left across +/- 2