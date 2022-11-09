// Nesta etapa os valores que são declarados como arrays que são definidos como "[]" são tipo uma lista  e dentro de conchetes ficam as chaves e dentro das chaves ficam os objetos por exemplo:
//O nome, nota, turma, Que são caracteristicas fundamentais para o codigo
const alunos = [
    {nome: 'joão',
    nota: 5,
    turma: '1B',
    },
    {nome: 'Sofia',
     nota: 4,
     turma: '1B',
    },
    {nome: 'Paulo',
     nota: 6,
     turma: '2C',
    }
];
// A função function serve para executa uma tarefa ou calcula um valor, dentro do function têm o for que é literalmente "Para" e o if que é "se" o if é ultilizado como um complemnto do for.
function alunosAprovados(alunos, media) {
    let aprovados = [];
    for (let i = 0; i < alunos.length; i++){
        let {nota, nome} = alunos[i];
        if (nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));
alert(alunosAprovados(alunos, 5));
// E por ultimo o console.log que serve para chamar as funções e aparecer no console do seu navegador mas só aparecera os alunos aprovados e colocamos um alert para que apareça os nomes dos alunos que foram aprovados na tela inicial e no console