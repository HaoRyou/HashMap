export{HashMap}

class HashMap{

    constructor(){
        this.limit = 16;
        this.load_factor = 0.75;
        this.bucket = new Array(this.limit);
        this.count = 0;

    }
    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }
    
    set(key, value){
        const code = this.hash(key)%this.limit;
        if(this.bucket[code] != null){
            console.log("Updating the Key Value");
        }
        for(let pair of this.bucket[index]){
            if(pair[0] === key){
                pair[1] = value;
                return;
            }
        }

        this.bucket[index].push([key, value]);
        this.count++;

    }

    get(key){
        const index = this.hash(key) % this.limit;
        const bucket = this.bucket[index];
        if (bucket) {
            for (let pair of bucket) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }

    has(key){
        if(this.bucket[this.hash[key]] != null){
            return true;
        }
        return false;
    }

    remove(key){
        const index = this.hash(key) % this.limit;
        const bucket = this.bucket[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    this.count--;
                    return true;
                }
            }
        }
        return false;
    }

    length(){
        return this.count;
    }

    clear(){
        for(let i=0;i<this.limit;i++){
            this.remove(i);
        }
    }

    keys(){
        let array = [];
        for(let i=0; i<this.limit;i++){
            array.push(this.bucket[i].key);
        }
        return array;
    }

    value(){
        let array = [];
        for(let i=0; i<this.limit;i++){
            array.push(this.bucket[i]).value;
        }
        return array;
    }

    entiries(){
        let array = [];
        for(let i=0; i<this.limit;i++){
            array.push(`${this.bucket[i].key}, ${this.bucket[i].value}`);
        }
        return array;
    }

}


