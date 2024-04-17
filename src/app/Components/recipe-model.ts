export interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    instruction: string;
    nutritionalfacts: {
        [key: string]: string
    };
}