type Hero = {
    level: 1 | 2 | 3
    quality: 1 | 2 | 3 | 4 | 5
}

type Card = {
    name: string
    image: {
        src: string
    },
    price: number
    isHighLight: boolean
    traits?: Array<string>
}