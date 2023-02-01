// variaveis explicitas
function ticket(user: string | null, ticket: number){
    console.log(`Olá ${user ?? 'Teste'}, esse é o seu ticket: ${ticket}.`)
}

ticket(null, 123)

// any
let info: any 

info = [1,2,3]
info = "Hello"
info = true

// Tipos primitivos
let loading: boolean
loading = true

let email: string
email = "abraao@email.com"

let price: number 
price = 20

// Matriz
let numbers: number[]
numbers = [1,2,3,4]

let users: Array<string>
users = ['a','b']

// Union
function printUserId(id: number | string){
    console.log(`O Id do usúario é: ${id}`)
}

printUserId("10020")

// Generics
/*
S => state
T => type
k => key
V => value
E => element
*/
function useState<T extends string | number = string>(){ // Generics T, com uma estensão, podendo ser tanto number como string, se não for definido pelo dev, por padrão vai ser string.
    let state: T
    function get(){
        return state
    }
    function set(newValue: T){
        state = newValue
    }
    return { get, set}
}

let newState = useState<string>() // Criando uma variavel para puxar as funcoes get e set, e determinando o tipo o Generics, no caso string.
newState.get()
newState.set("Hello")

// Reaproveitando Types
type IdType = string | number | undefined

let userId: IdType
let adminId: IdType

// Type Assertions
type UserResponse ={
    id: number
    name: string
    avatar_user: string
}
let userResponse ={} as UserResponse

// Types for Objects 
type Point ={
    x: number
    y: number
}
function printCoord( points: Point){
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 102, y: 56})

// Opcional
type User ={
    name: string
    email: string
    age: number
    isAdm?: boolean // deixando com que ele seja opcional
} 

let newUser: User ={
    name: "Abraão Oliveira",
    email: "abraao@gmail.com",
    age: 20,
    //isAdm: true
}

// Intersecção de Tipos
type User01 ={
    id: number
    name: string
}
type Char ={
    nickName: string
    level: number
}

type PlayerInfo = User01 & Char // união de tipos
let inf0: PlayerInfo ={
    id: 0,
    name: "Abraão Oliveira",
    nickName: "L1n",
    level: 100
}

// Interface
interface User02 {
    name: string
    id: number
} // usando uma interface para criar uma tipagem

function registerNewUser(newUser: User02){
    newUser.id
    newUser.name
}

// Type Vs Interface 
type TUser ={
    id: number
    name: string 
}
type TPayment ={
    method: string
}

type TAccount = TUser & TPayment

interface IUser {
    id: number 
    name: string 
}
interface IPayment {
    method: string
}

interface IAccount extends IUser, IPayment {}
// Elas servem para  mesmo proposito, criar tipagens
