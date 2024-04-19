export interface Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    instruction: string;
    nutritionalFacts: {
        [key: string]: string
    };
    image: File | null;
}