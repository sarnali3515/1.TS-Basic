{
    // Constraints

    const addCourseToStudent = <T extends { id: number; name: string; email: string; }>(student: T) => {
        const course = 'Next level web development'

        return {
            ...student,
            course
        }
    };

    const student3 = addCourseToStudent({
        id: 33,
        name: 'Mr z',
        email: 'z@gmail.com',
        emni: 'emni'
    })
    const student1 = addCourseToStudent({
        id: 11,
        name: 'Mr x',
        email: 'x@gmail.com',
        devType: 'NLWD'
    })

    const student2 = addCourseToStudent({
        id: 22,
        name: 'Mr y',
        email: 'y@gmail.com',
        hasWatch: 'Apple watch'
    })




    //
}