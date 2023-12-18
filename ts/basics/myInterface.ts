interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    goodleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(name: string): number
}
// interface x type
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "learner"
}

const laura: User = {dbId: 22, email: 'lalala@gmail.com', userId: 1, githubToken: 'github',
startTrial: () => {
    return "trial started"
},
getCoupon: (name: 'laura10') => {
    return 10
}}

