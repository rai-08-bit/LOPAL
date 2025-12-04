// 1.escrevendo no node:
// console.log("Seja bem-vindo ao node Node.js!!!");

const { log } = require("console");
const fs = require("fs");
const { console } = require("inspector");
const path = require("path");
const promptSync = require("prompt-sync")();

// 2.criando arquivo e listando conteudo dele:
// let conteudo = fs.readFileSync("arquivo.txt", "utf8");
// console.log(conteudo);

// 3.criando novo arquivo (writeFileSync)
// let texto="Este é o conteúdo do novo arquivo.txt";
// fs.writeFileSync("novoArquivo.txt", texto, "utf-8"); 

// 4.editando textos (appendFileSync)
// let novoTexto = "\nSegunda parte do arquivo";
// fs.appendFileSync("novoArquivo.txt", novoTexto, "utf-8");

//5.Excluindo arquivos (unlinkSync)
//fs.unlinkSync("arquivo.txt");

//5.1) Excluindo arquivo. Caso ele não exista, ao invés de dar erro, o sistema dará um aviso de "Arquivo não encontrado"
// if (fs.existsSync("novoArquivo.txt")) {
//      fs.unlinkSync("novoArquivo.txt");   
// } else{
//      console.log("Arquivo não encontrado");
// }

// 6.Escrevendo seu nome
// let nome = promptSync("Digite seu nome");
// console.log(`Olá ${nome}`);

// 7. Criando arquivo e escrevendo conteúdos dentro dele, com loop de repetição
// let nomeArquivo = "";
// let nomeConteudo = "";
// for (let i = 0; i < 3; i++) {
//     nomeArquivo= promptSync("Digite o nome do arquivo: ");
//     nomeConteudo = promptSync("Digite o conteúdo deste arquivo: ");
//     fs.writeFileSync(nomeArquivo, nomeConteudo, "utf-8");
// }

// 8. Trabalhando com arquivos fora da pasta origem (ex.: arquivos da pasta R10)
// console.log(__dirname);
// const pasta = path.join(__dirname,"Meus arquivos"); -> Fazendo montagem do caminho
// fs.mkdirSync(pasta, {recursive:true});

//9. Criar caminhos
// const estruturaDePastas = path.join(__dirname, "Meus Arquivos", "Arquivos diversos", "Imagens");
// fs.mkdirSync(estruturaDePastas, {recursive:true});

// 10. copiando arquivo
// const origem = path.join(__dirname, "teste.txt");
// const destino = path.join("C:/Users/DES-I1HS/Documents", "copia_teste1.txt");

// fs.cpSync(origem, destino, {recursive:true});

// 11. mover arquivo
// const origem = path.join(__dirname, "teste2.txt");
// const destino = path.join(`${__dirname}/Meus Arquivos`, "copia_teste.txt");
// fs.renameSync(origem, destino, {recursive:true});

// 12. mover arquivo fora da pasta
// const origem = path.join(__dirname, "Meus arquivos");
// const destino = path.join("C:/Users/DES-I1HS/Desktop/Cópia meus arquivos");
// fs.renameSync(origem, destino);

// const destino = path.join("C:/Users/DES-I1HS/Desktop/Cópia meus arquivos");

// if (fs.existsSync(destino)) {
//     fs.rmSync(destino);
// } else {
//     console.log("Diretório não foi encontrado");
    
// }

let nomes = [];
let nome;
let pesos = [];
let peso;
let alturas = [];
let altura;

do {
    do {
        nomes=(promptSync(`Escreva o nome desejado, caso deseje parar, digite "!" `));
        if (nomes="!") {
            prompt(`Você deseja parar? digite "!" novamente`);
        } else {
            nomes[i]=nome;
        }
    } while (!isNaN(nomes));
    do {
        pesos=(promptSync(`Escreva o nome desejado, caso deseje parar, digite "!" `));
        if (pesos="!") {
            prompt(`Você deseja parar? digite "!" novamente`);
        } else {
            pesos[i]=peso;
        }
    } while (isNaN(pesos));
    do {
        alturas=(promptSync(`Escreva o altura desejada, caso deseje parar, digite "!" `));
        if (alturas="!") {
            prompt(`Você deseja parar? digite "!" novamente`);
        } else {
            alturas[i]=altura;
        }
    } while (isNaN(altura));

} while (isNaN(altura));
