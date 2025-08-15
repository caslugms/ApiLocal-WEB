import exemploDados from './data/sample.data';

export const getAllDados = (req, res) => {
    console.log("Função getDados foi chamada");
    res.json(exemploDados);
};