export class Ipad{
    constructor(
        public id: number,
        public model: string,
        public owner: string,
        public location: string,
        public status?: ('available' | 'reserved') //Optional
    ){}
}