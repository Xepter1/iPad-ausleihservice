export class Ipad{
    constructor(
        public id: number,
        public name: string,
        public model: string,
        public owner: string,
        public location: string,
        public appleid?: string,
        public appleidpassword?: string,
        public draexlmaiermail?: string,
        public draexlmaierpassword?: string,
        public status?: ('available' | 'reserved') //Optional
    ){}
}