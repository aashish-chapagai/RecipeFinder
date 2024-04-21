import { NutritionalFact } from "./nutritionalfacts-model";

export interface Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    instruction: string;
    nutritionalFacts: NutritionalFact[];
    image: File | null;
}