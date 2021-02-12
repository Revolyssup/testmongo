class UserDTO{
    name: string;
    class: string;
    roll: number;
    constructor(obj:any){
        this.name=obj.name;
        this.class=obj.class;
        this.roll=obj.roll
    }

    validate():Error | null{
        if(typeof(this.name)!=="string"){
            return new Error("Wrong type.")
        }
        return null;
    }

    validateRoll():Error | null{
        if(typeof(this.roll)!=="number"){
            return new Error("Wrong type.")
        }
        return null;        
    }

}

export default UserDTO