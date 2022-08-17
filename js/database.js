/* Number of total columns/semesters: */
window.semesters = 9;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ffdfa8", "#babce6", "#b52b42", "#92a8a6"];

// Order of courses matters: do not swap positions. Append at the end.
window.courses = [
    //0-5
    { name: "Programação de Computadores I", credits: 4, code: "ICP131", semester: 1},
    { name: "Num. Inteiros e Criptografia", credits: 4, code: "ICP134", semester: 1},
    { name: "Projeto de Carreira", credits: 4, code: "ICP135", semester: 1},
    { name: "Introdução ao Pensamento Dedutivo", credits: 4, code: "ICP136", semester: 1},
    { name: "Processos de Software", credits: 4, code: "ICP132", semester: 1},
    { name: "Fundamentos de Sistemas de Computação", credits: 4, code: "ICP133", semester: 1},
    //6-11
    { name: "Programação de Computadores II", credits: 4, code: "ICP141", semester: 2, requirements: [0]},
    { name: "Matemática Discreta", credits: 4, code: "ICP144", semester: 2, requirements: [1]},
    { name: "Habilidades sociais para o trabalho", credits: 2, code: "ICP145", semester: 2, requirements: [2]},
    { name: "Organização de Dados", credits: 2, code: "ICP142", semester: 2},
    { name: "Projeto Prático", credits: 2, code: "ICP143", semester: 2, requirements: [0,4,5]},
    { name: "Cálculo Infinitesimal I", credits: 6, code: "MAE111", semester: 2},
    //12-17
    { name: "Estrutura de Dados", credits: 4, code: "ICP116", semester: 3, requirements: [6]},
    { name: "Álgebra Linear Algorítmica", credits: 5, code: "ICP115", semester: 3},
    { name: "Introdução a Modelagem de Sistemas", credits: 4, code: "ICP211", semester: 3, requirements: [4]},
    { name: "Programação Orientada a Objetos", credits: 4, code: "ICP213", semester: 3, requirements: [6]},
    { name: "Introdução a Computação Numérica", credits: 2, code: "ICP212", semester: 3, requirements: [0,5]},
    { name: "Cálculo Infinitesimal II", credits: 4, code: "MAE992", semester: 3, requirements: [11]},
    //18-22
    { name: "Banco de Dados I", credits: 4, code: "ICP489", semester: 4, requirements: [12]},
    { name: "Tecnologia e Sociedade", credits: 4, code: "ICP253", semester: 4, requirements: [8]},
    { name: "Computação Científica e Análise de Dados", credits: 4, code: "ICP252", semester: 4, requirements: [13,16]},
    { name: "Arquitetura de Computadores e Sistemas Operacionais", credits: 4, code: "ICP251", semester: 4, requirements: [5,6]},
    { name: "Estatística e Probabilidade", credits: 4, code: "MAD243", semester: 4},
    //23-27
    { name: "Algoritmos e Grafos", credits: 4, code: "ICP368", semester: 5, requirements: [7,12]},
    { name: "Linguagens Formais", credits: 4, code: "ICP123", semester: 5, requirements: [7]},
    { name: "Computadores e Programação", credits: 4, code: "MAB353", semester: 5, requirements: [21]},
    { name: "Modelagem Matemática e Computacional", credits: 4, code: "ICP312", semester: 5, requirements: [13,17]},
    { name: "Modelagem e Avaliação de Desempenho", credits: 4, code: "ICP311", semester: 5, requirements: [13,22]},
    //28-32
    { name: "Otimização", credits: 4, code: "ICP325", semester: 6, requirements: [13,16]},
    { name: "Lógica e Computabilidade", credits: 4, code: "ICP324", semester: 6, requirements: [24]},
    { name: "Programação Concorrente", credits: 4, code: "ICP321", semester: 6, requirements: [15,25]},
    { name: "Introdução ao Aprendizado de Máquina", credits: 4, code: "ICP323", semester: 6, requirements: [20,22]},
    { name: "Redes de Computadores I", code: "ICP322", credits: 4, semester: 6, requirements: [0,5,22]},
    //33-37
    { name: "Metodologia da Pesquisa", credits: 4, code: "ICP412", semester: 7, requirements: [19]},
    { name: "Segurança da Informação", credits: 4, code: "ICP411", semester: 7, requirements: [32]},
    { name: "Eletiva", credits: 4, semester: 7},
    { name: "Eletiva", credits: 4, semester: 7},
    { name: "Eletiva", credits: 4, semester: 7},
    //38-42
    { name: "Trabalho de Conclusão de Curso", credits: 2, code: "ICPK01", semester: 8, requirements:[33]},
    { name: "Eletiva", credits: 4, semester: 8},
    { name: "Eletiva", credits: 4, semester: 8},
    { name: "Eletiva", credits: 4, semester: 8},
    { name: "Eletiva", credits: 4, semester: 8},
    //43-46
    { name: "Eletiva", credits: 4, semester: 9},
    { name: "Eletiva", credits: 4, semester: 9},
    { name: "Eletiva", credits: 4, semester: 9},
    { name: "Eletiva", credits: 4, semester: 9},
]
