const express = require('express');

const app = express();
const PORT = 3000;

// Configuração do EJS
app.set('view engine', 'ejs');

// Banco de dados
const db = {
    cursos: [
        { nome: "Node.js", horas: "40h" },
        { nome: "React", horas: "30h" },
        { nome: "JavaScript", horas: "50h" }
    ],

    certificados: [
        { titulo: "Full Stack", ano: 2025 },
        { titulo: "Scrum Master", ano: 2026 },
        { titulo: "Desenvolvimento Web", ano: 2026 }
    ]
};

// Rota principal
app.get('/', (req, res) => {
    res.render('portfolio', { dados: db });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});