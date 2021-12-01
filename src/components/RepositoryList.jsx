import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/'

const repositoryName = {
    name: "Atividade",
    description: "Descricao da Atividade",
    link: "https://github.com/thomas-manzi"
}

export function RepositoryList() {
    return ( <
        >
        <
        RepositoryItem repository = { repository }
        /> <
        Counter / >
        <
        />
    )
}