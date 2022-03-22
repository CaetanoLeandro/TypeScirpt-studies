//accuntInfo
//charInfo
// playerInfo

type AccountInfo = {
    id : number;
    name: string;
    email?: string; //* ? -> Torna o parâmetro opcional , para ser chamado na impelentação do objeto
}
const account: AccountInfo ={
    id : 123,
    name : "Leandro",
    email : "l@gmail.com" //*
}

type CharInfo = {
    nickname : string;
    level : number
}
const char: CharInfo = {
    nickname: "Caetano",
    level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo // -> União de dois objetos

const  player: PlayerInfo = {
    id : 123,
    name : "Leandro",
    email : "l@gmail.com",
    nickname: "Caetano",
    level: 100
}