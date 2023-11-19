function ativ1(str){
const n = str.replace(/[t+]/ig, "7");
return(n)
}
console.log(ativ1("teste 12 teste"))


function ativ2(texto, palavra){
    const regex = new RegExp(`\\b${palavra}\\b`, 'gi');
    return (texto.match(regex) || []).length;
}
const texto = 'O sol está brilhando. O céu está azul. O sol é muito quente.';
const palavra = 'sol';
const vezes = ativ2(texto, palavra);


console.log(`A palavra "${palavra}" aparece ${vezes} vez(es) no texto.`);


console.log("Não sei fazer a terceira")