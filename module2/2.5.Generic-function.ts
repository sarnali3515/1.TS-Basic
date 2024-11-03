{
    // Generic Function
    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('Bangladesh');


    type User = {
        id: number;
        name: string
    }
    const resGenericObj = createArrayWithGeneric<User>({
        id: 11,
        name: 'abc'
    });



    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res2 = createArrayWithTuple<string, number>('Bangladesh', 33)
    const resGeneric2 = createArrayWithTuple<string, { name: string }>('Bangladesh',
        { name: 'Asia' })



    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next level web development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name: 'Mr x',
        email: 'x@gmail.com',
        devType: 'NLWD'
    })
    const student2 = addCourseToStudent({
        name: 'Mr y',
        email: 'y@gmail.com',
        hasWatch: 'Apple watch'
    })



    //
}