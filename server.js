const express = require('express');
const app = express();
const PORTA = 3000;

app.use(express.json());

let proximoId = 3;

let livros = [
    { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
    { id: 2, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry' }
];

app.get('/', (req, res) => {
    res.json({ mensagem: 'API de livros funcionando!' });
});

app.get('/livros', (req, res) => {
    res.json(livros);
});

app.get('/buscar', (req, res) => {
    const termo = String(req.query.termo || '').toLowerCase();

    const resultado = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termo) ||
        livro.autor.toLowerCase().includes(termo)
    );

    res.json(resultado);
});

app.get('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find(item => item.id === id);

    if (!livro) {
        return res.status(404).json({
            erro: 'Livro não encontrado'
        });
    }

    res.json(livro);
});

app.post('/livros', (req, res) => {
    const { titulo, autor } = req.body;

    if (
        typeof titulo !== 'string' || !titulo.trim() ||
        typeof autor !== 'string' || !autor.trim()
    ) {
        return res.status(400).json({
            erro: 'Informe um título e um autor válidos'
        });
    }

    const novoLivro = {
        id: proximoId++,
        titulo: titulo.trim(),
        autor: autor.trim()
    };

    livros.push(novoLivro);

    res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find(item => item.id === id);

    if (!livro) {
        return res.status(404).json({
            erro: 'Livro não encontrado'
        });
    }

    const { titulo, autor } = req.body;

    if (titulo === undefined && autor === undefined) {
        return res.status(400).json({
            erro: 'Informe o título ou o autor para atualizar'
        });
    }

    if (
        titulo !== undefined &&
        (typeof titulo !== 'string' || !titulo.trim())
    ) {
        return res.status(400).json({
            erro: 'Informe um título válido'
        });
    }

    if (
        autor !== undefined &&
        (typeof autor !== 'string' || !autor.trim())
    ) {
        return res.status(400).json({
            erro: 'Informe um autor válido'
        });
    }

    if (titulo !== undefined) {
        livro.titulo = titulo.trim();
    }

    if (autor !== undefined) {
        livro.autor = autor.trim();
    }

    res.json(livro);
});

app.delete('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const quantidadeAntes = livros.length;

    livros = livros.filter(item => item.id !== id);

    if (livros.length === quantidadeAntes) {
        return res.status(404).json({
            erro: 'Livro não encontrado'
        });
    }

    res.status(204).end();
});

app.listen(PORTA, () => {
    console.log(`API de livros ativa em http://localhost:${PORTA}`);
});
