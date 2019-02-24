interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): SquareConfig {

    return config;
}

let mySquare = createSquare({color: "black", width:125});
console.log(mySquare)