/**
 * Interface
 */
export class Quiz {
    id?: number;
    name: string;
    gender: string;
    country: string;
    city: string;
}



export class WkQuiz implements Quiz {
    id = 1;
    name = '';
    gender = 'm';
    country = '';
    city = '';
}



