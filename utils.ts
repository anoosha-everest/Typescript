export type getValue<T>={
    value:T;
}
export namespace Per{
    export interface Person{
        name: string;
        email:string;
        address: {
            street: string;
            city: string;
            country: string;
        }
    }
}
