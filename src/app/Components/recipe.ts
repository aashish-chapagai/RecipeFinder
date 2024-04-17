interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    instructions: string;
    nutritionalfacts: {
        [key: string]: string
    };
}