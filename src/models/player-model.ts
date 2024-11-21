interface Statistics {
    overall: number,
    pace: number,
    shooting: number,
    passing: number,
    dribbling: number,
    defending: number,
    physical: number,
}

export default interface Player {
    id: number,
    name: number,
    club: string,
    nationality: string,
    position: string,
    statistics: Statistics,
}