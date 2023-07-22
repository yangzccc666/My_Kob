import { AcGameObject } from "./AcGameObject";
import { Cell } from "./Cell";

export class Snake extends AcGameObject {
    constructor(info, gamemap) {
        super();

        this.id = info.id;
        this.color = info.color;
        this.gamemap = gamemap;

        this.cells = [new Cell(info.r, info.c)];  //存放蛇的身体，cells[0] 存放蛇头
        
    }

    start() {

    }

    update() {
        this.render();
    }

    render() {

    }
}