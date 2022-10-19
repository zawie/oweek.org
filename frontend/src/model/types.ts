export type ID = number | string;

export type Student = {
    id: ID
    name: string
    imageSrc?: string
    college?: string
};

export type StudentFamily = {
    focus: Student

    parents: Student[]                       //  Parents of this family
    siblings: Student[]    //  Your siblings and their children
    kids: Student[]    //  Your siblings and their children
}

export const demoFamily: StudentFamily = {
    focus: {name: 'Adam Zawierucha', id: 0},
    parents: [{name: "Advisor", id: 100}, {name: "Co-Advisor", id: 101}],
    siblings: [1,2,3,4,5, 6, 7, 8, 9, 10].map(n =>{
        return {name: 'Student ' + n, id: n};
    }),
    kids: [1,2,3,4,5, 6, 7, 8, 9, 10].map(n =>{
        return {name: 'Kid ' + (n-1)*4, id: (n-1)*4};
    })
}