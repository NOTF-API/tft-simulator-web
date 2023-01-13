type Hero = {
    level: 1 | 2 | 3
    quality: 1 | 2 | 3 | 4 | 5
}

type TempPoolCard = {
    name: string
    image: {
        src: string
    },
    isBought: boolean,
    price: number
    isHighLight: boolean
    traits?: Array<string>
}