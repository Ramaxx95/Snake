

export class Snake {

    // TODO: sacar las coordenadas jardcodeadas
    coordinates = [[500,250]]; // [(x, y), ...]

    // Move the snake up, down, left or right. It can only change "x" or "y", not both.
    move(x, y) {
        
        if (x !== 0 && y !== 0){
            
            throw console.error("Snake movement can only change in one axis!");
            
        }

        let tmpCoord1 = this.coordinates[0];
        let tmpCoord2 = [this.coordinates[0][0] + x, this.coordinates[0][1] + y];

        for (let i = 0; i < this.coordinates.length; i++){
            tmpCoord1 = this.coordinates[i];
            this.coordinates[i] = tmpCoord2;
            tmpCoord2 = tmpCoord1;
        }

    }

    biteItself(){

        for (let i = 1; i < this.coordinates.length; i++){

            if (this.coordinates[0][0] === this.coordinates[i][0] &&
                this.coordinates[0][1] === this.coordinates[i][1]){
                    return true;
            }
        }

        return false;

    }

    getHeadCoordinates(){

        return this.coordinates[0];

    }

}