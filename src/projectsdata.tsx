import professor from './assets/mock/professor.png';
import orientador from './assets/mock/orientador.png';
import pokedex from './assets/mock/pokedex.png';
import flix from './assets/mock/flix.png';

const ProjectsData = [
    {
        "id": 1,
        "img": professor,
        "title": "TCC - Professor",
        "description": "Projeto desenvolvido por mim e pela minha equipe em 2021 para minha escola como TCC e estágio, com principal função dos professores aplicarem ocorrência nos alunos dentro da sala de aula através do celular.",
        "tool": "React · Firebase",
        "github": "https://github.com/ogabrielbarbosa/TCC-Professor",
        "link": "https://tccprofessor.gabarbosa.com/"
    },
    {
        "id": 2,
        "img": orientador,
        "title": "TCC - Orientador",
        "description": "Projeto desenvolvido por mim e pela minha equipe em 2021 para minha escola como TCC e estágio, com principal função dos orientadores receberem, organizarem as ocorrências dos alunos da escola.",
        "tool": "React · Firebase",
        "github": "https://github.com/ogabrielbarbosa/TCC-Orientador",
        "link": "https://tccorientador.gabarbosa.com/"
    },
    {
        "id": 3,
        "img": pokedex,
        "title": "Pokédex",
        "description": "Pokédex para procurar pokémons pelo nome ou número, mostrando e filtrando dados referente ao pokémon selecionado.",
        "tool": "React · TypeScript · PokeAPI",
        "github": "https://github.com/ogabrielbarbosa/pokedex",
        "link": "https://pokedex.gabarbosa.com/"
    },
    {
        "id": 4,
        "img": flix,
        "title": "Flix",
        "description": "Plataforma de filmes em exibição, com acesso a informações do filme, como tempo de duração, gêneros, sinopse, entre outras coisas.",
        "tool": "React · TheMovieDB",
        "github": "https://github.com/ogabrielbarbosa/flix",
        "link": "https://flix.gabarbosa.com/"
    }
]

export default ProjectsData;