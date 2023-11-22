abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number{
        //something 
        return 8
    }
}

// const lauraPhoto = new TakePhoto('test', 'test'); won't work because it's abstract

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number){
            super(cameraMode, filter)
        }

        getSepia():void {
            console.log('sepia')
        }
}

const lauraPhoto = new Instagram('test', 'test', 3);
lauraPhoto.getReelTime();