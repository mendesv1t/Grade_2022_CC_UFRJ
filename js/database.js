/* Number of total columns/semesters: */
window.semesters = 9;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff"];

// Order of courses matters: do not swap positions. Append at the end.
window.courses = [
    { name: "Fund da Comp. Digital", credits: 4, code: "MAB111", semester: 1},
    { name: "Sistemas de Informação", credits: 4, code: "MAB112", semester: 1},
    { name: "Computação I (CC)", credits: 5, code: "MAB120", semester: 1},
    { name: "Num. Inteiros e Criptografia", credits: 5, code: "MAB624", semester: 1},
    { name: "Ativ. Complementares", credits: 4, code: "MABX01", semester: 1},
    { name: "Cálculo Infinitesimal I", credits: 6, code: "MAE111", semester: 1},

    { name: "Organização da Informação", credits: 4, code: "MAB113", semester: 2},
    { name: "Computação II (CC)", credits: 5, code: "MAB240", semester: 2, requirements: [2]},
    { name: "Circuitos Lógicos", credits: 4, code: "MAB245", semester: 2, requirements: [0]},
    { name: "Matemática Combinatória", credits: 4, code: "MAB352", semester: 2, requirements: [3]},
    { name: "Cálculo Integ e Diferencial II", credits: 4, code: "MAE992", semester: 2, requirements: [5]},

    { name: "Mecânica, Oscilação e Ondas", credits: 5, code: "FIW125", semester: 3, requirements: [10]},
    { name: "Álgebra Linear Algorítmica", credits: 5, code: "MAB115", semester: 3},
    { name: "Estrutura dos Dados", credits: 4, code: "MAB116", semester: 3, requirements: [2]},
    { name: "Linguagens Formais", credits: 4, code: "MAB123", semester: 3, requirements: [9]},
    { name: "Computadores e Programação", credits: 4, code: "MAB353", semester: 3, requirements: [2,8]},
    { name: "Cálculo Int e Diferencial III", credits: 4, code: "MAE993", semester: 3, requirements: [10]},

    { name: "Eletromagnetismo e Ótica", credits: 5, code: "FIW230", semester: 4, requirements: [11,16]},
    { name: "Computação Concorrente", credits: 4, code: "MAB117", semester: 4, requirements: [7]},
    { name: "Cálculo Numérico (CC)", credits: 4, code: "MAB230", semester: 4, requirements: [2,10]},
    { name: "Algoritmos e Grafos", credits: 4, code: "MAB368", semester: 4},
    { name: "Cálculo Int e Diferencial IV", credits: 4, code: "MAE994", semester: 4, requirements: [10,12]},

    { name: "Lógica", credits: 4, code: "MAB236", semester: 5, requirements: [3]},
    { name: "Computadores e Sociedade", credits: 4, code: "MAB354", semester: 5},
    { name: "Arquitetura de Computadores I", credits: 4, code: "MAB355", semester: 5, requirements: [8]},
    { name: "Compiladores I", credits: 4, code: "MAB471", semester: 5, requirements: [14]},
    { name: "Banco de Dados I", credits: 4, code: "MAB489", semester: 5, requirements: [13]},
    { name: "Fund da Engenharia de Software", credits: 4, code: "MAB533", semester: 5, requirements: [13]},

    { name: "Computação Gráfica I", credits: 4, semester: 6, code: "MAB122", requirements: [7,12]},
    { name: "Programação Linear I", credits: 4, code: "MAB232", semester: 6, requirements: [12]},
    { name: "Inteligência Artificial", credits: 4, code: "MAB508", semester: 6, requirements: [22]},
    { name: "Estatística e Probabilidade", credits: 4, code: "MAD243", semester: 6, requirements: [11]},
    { name: "Atividades Academ de Livre Escolha", credits: 4, semester: 6},

    { name: "Sistemas Operacionais I", credits: 4, code: "MAB366", semester: 7, requirements: [24]},
    { name: "Avaliação e Desempenho", credits: 4, code: "MAB515", semester: 7, requirements: [31]},
    { name: "Atividades Academ Optativas", credits: 8, semester: 7},

    { name: "Teleprocessamento e Redes", credits: 4, code: "MAB510", semester: 8, requirements: [24]},
    { name: "Projeto Final de Curso", credits: 2, code: "MABX02", semester: 8},
    { name: "Atividades Academ Optativas", credits: 16, semester: 8,},

    { name: "Atividades Academ Optativas", credits: 12, semester: 9, step: 1},

]
