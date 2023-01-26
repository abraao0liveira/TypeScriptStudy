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
