import util from 'util';

const pausar = util.promisify(setTimeout);

let sequencial = 0;
const tarefas = [];

export async function cadastrarTarefa (tarefa) {
  await pausar(25);
  throw new Error('erro forçado');
  sequencial++;
  tarefas.push({
    id: sequencial,
    descricao: tarefa.descricao
  });
  return sequencial;
}
