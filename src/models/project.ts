export interface project {
    id: number;
    image?: string;
    context: 'Projeto Acadêmico' | 'Freelance';
    name: string;
    description: string;
    stack?: string[];
    role?: 'Frontend' | 'Backend' | 'FullStack'
    year?: number
    gitLink?: string;
    deployLink?: string;
    girProject?: string;
    largeDescription?: string; 
    solution?:string;
    video?: string;
    stackDescription?: string;
    gifDesktop?: string;
    gifCelular?: string;
}
