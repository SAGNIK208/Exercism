// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width,height){
    this.width = width ?? 80;
    this.height = height ?? 60;
}

Size.prototype.resize = function(width,height){
    this.width = width ?? this.width;
    this.height = height ?? this.height;
}

export function Position(x,y){
    this.x = x ?? 0;
    this.y = y ?? 0;
}

Position.prototype.move = function (x,y){
    this.x = x ?? this.x ;
    this.y =y ?? this.y;
}

export class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position();
    }
    resize(size){
        if(size.width<1){
            this.size.width = 1;
        }
        if(size.height<1){
            this.size.height = 1;
        }
        if(size.width + this.position.x>this.screenSize.width){
            this.size.width = this.screenSize.width - this.position.x;
        }else if(size.width>1){
            this.size.width = size.width;
        }
        if(size.height + this.position.y>this.screenSize.height){
            this.size.height = this.screenSize.height - this.position.y;
        }else if(size.height>1){
            this.size.height = size.height;
        }
    }
    move(position){
        if(position.x<0){
            this.position.x = 0;
        }
        if(position.y<0){
            this.position.y = 0;
        }
        if(this.size.width + position.x>this.screenSize.width){
            this.position.x = this.screenSize.width - this.size.width;
        }else if(position.x>0){
            this.position.x = position.x;
        }
        if(this.size.height + position.y>this.screenSize.height){
            this.position.y = this.screenSize.height - this.size.height;
        }else if(position.y>0){
            this.position.y = position.y;
        }
    }
}

export function changeWindow(programWindow){
    programWindow.resize(new Size(400,300));
    programWindow.move(new Position(100,150));
    return programWindow;
}